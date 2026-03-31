import { NextResponse } from 'next/server';
import db from '@/app/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const includeInactive = searchParams.get('include_inactive') === 'true';

    const result = await db.query(
      includeInactive
        ? 'SELECT * FROM regular_services ORDER BY sort_order ASC, created_at DESC'
        : 'SELECT * FROM regular_services WHERE is_active = true ORDER BY sort_order ASC'
    );
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, time, description, sort_order } = body;

    const result = await db.query(
      `INSERT INTO regular_services (title, time, description, sort_order)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [title, time, description, sort_order || 0]
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Error creating service:', error);
    return NextResponse.json({ error: 'Failed to create service' }, { status: 500 });
  }
}
