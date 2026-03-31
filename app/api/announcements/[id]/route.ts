import { NextResponse } from 'next/server';
import db from '@/app/lib/db';
import { uploadToR2, deleteFromR2, toClientImageUrl } from '@/app/utils/services/r2';
import { ANNOUNCEMENT_ALLOWED_IMAGE_TYPES, ANNOUNCEMENT_IMAGE_MAX_BYTES } from '@/app/constants/uploads';

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  try {
    const result = await db.query('SELECT * FROM announcements WHERE id = $1', [params.id]);
    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Announcement not found' }, { status: 404 });
    }
    const row = result.rows[0];
    return NextResponse.json({
      ...row,
      image_url: row.image_url ? toClientImageUrl(row.image_url) : row.image_url,
    });
  } catch (error) {
    console.error('Error fetching announcement:', error);
    return NextResponse.json({ error: 'Failed to fetch announcement' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const formData = await request.formData();
    const file = formData.get('image') as File | null;
    const title = formData.get('title') as string;
    const description = formData.get('description') as string | null;
    const link_url = formData.get('link_url') as string | null;
    const sort_order = formData.get('sort_order') as string | null;
    const is_active = formData.get('is_active') as string | null;

    let imageUrl: string | undefined;

    if (file) {
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

      // Delete old image
      const existing = await db.query('SELECT image_url FROM announcements WHERE id = $1', [params.id]);
      if (existing.rows.length > 0 && existing.rows[0].image_url) {
        try {
          await deleteFromR2(existing.rows[0].image_url);
        } catch {
          // Old image may already be deleted
        }
      }

      const buffer = Buffer.from(await file.arrayBuffer());
      imageUrl = await uploadToR2(buffer, file.name, file.type);
    }

    const setClauses = [
      'title = $1',
      'description = $2',
      'link_url = $3',
      'sort_order = $4',
      'is_active = $5',
      'updated_at = NOW()',
    ];
    const values: any[] = [
      title,
      description,
      link_url,
      sort_order ? parseInt(sort_order) : 0,
      is_active !== 'false',
    ];

    if (imageUrl) {
      setClauses.push(`image_url = $${values.length + 1}`);
      values.push(imageUrl);
    }

    values.push(params.id);
    const idIndex = values.length;

    const result = await db.query(
      `UPDATE announcements SET ${setClauses.join(', ')} WHERE id = $${idIndex} RETURNING *`,
      values
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Announcement not found' }, { status: 404 });
    }
    const row = result.rows[0];
    return NextResponse.json({
      ...row,
      image_url: row.image_url ? toClientImageUrl(row.image_url) : row.image_url,
    });
  } catch (error) {
    console.error('Error updating announcement:', error);
    return NextResponse.json({ error: 'Failed to update announcement' }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  try {
    const existing = await db.query('SELECT image_url FROM announcements WHERE id = $1', [params.id]);
    if (existing.rows.length > 0 && existing.rows[0].image_url) {
      try {
        await deleteFromR2(existing.rows[0].image_url);
      } catch {
        // Image may already be deleted
      }
    }

    const result = await db.query('DELETE FROM announcements WHERE id = $1 RETURNING *', [params.id]);
    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Announcement not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Announcement deleted' });
  } catch (error) {
    console.error('Error deleting announcement:', error);
    return NextResponse.json({ error: 'Failed to delete announcement' }, { status: 500 });
  }
}
