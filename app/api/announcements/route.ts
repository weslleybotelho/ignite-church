import { NextResponse } from 'next/server';
import db from '@/app/lib/db';
import { uploadToR2, toClientImageUrl } from '@/app/utils/services/r2';
import { ANNOUNCEMENT_ALLOWED_IMAGE_TYPES, ANNOUNCEMENT_IMAGE_MAX_BYTES } from '@/app/constants/uploads';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const includeInactive = searchParams.get('include_inactive') === 'true';

    const result = await db.query(
      includeInactive
        ? 'SELECT * FROM announcements ORDER BY sort_order ASC, created_at DESC'
        : 'SELECT * FROM announcements WHERE is_active = true ORDER BY sort_order ASC, created_at DESC'
    );
    const rows = result.rows.map((row) => ({
      ...row,
      image_url: row.image_url ? toClientImageUrl(row.image_url) : row.image_url,
    }));
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Error fetching announcements:', error);
    return NextResponse.json({ error: 'Failed to fetch announcements' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('image') as File | null;
    const title = formData.get('title') as string;
    const description = formData.get('description') as string | null;
    const link_url = formData.get('link_url') as string | null;
    const sort_order = formData.get('sort_order') as string | null;

    if (!file || !title) {
      return NextResponse.json({ error: 'Image and title are required' }, { status: 400 });
    }

    if (!ANNOUNCEMENT_ALLOWED_IMAGE_TYPES.includes(file.type as (typeof ANNOUNCEMENT_ALLOWED_IMAGE_TYPES)[number])) {
      return NextResponse.json(
        { error: 'Invalid image type. Please upload JPG, PNG, WEBP, or GIF.' },
        { status: 400 }
      );
    }

    if (file.size > ANNOUNCEMENT_IMAGE_MAX_BYTES) {
      return NextResponse.json(
        { error: `Image is too large. Maximum allowed size is ${Math.floor(ANNOUNCEMENT_IMAGE_MAX_BYTES / (1024 * 1024))}MB.` },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const imageUrl = await uploadToR2(buffer, file.name, file.type);

    const result = await db.query(
      `INSERT INTO announcements (title, description, image_url, link_url, sort_order)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [title, description, imageUrl, link_url, sort_order ? parseInt(sort_order) : 0]
    );

    const row = result.rows[0];
    return NextResponse.json(
      {
        ...row,
        image_url: row.image_url ? toClientImageUrl(row.image_url) : row.image_url,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating announcement:', error);
    return NextResponse.json({ error: 'Failed to create announcement' }, { status: 500 });
  }
}
