import { NextResponse } from 'next/server';
import db from '@/app/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const includeInactive = searchParams.get('include_inactive') === 'true';

    const result = await db.query(
      includeInactive
        ? 'SELECT * FROM events ORDER BY event_date ASC, sort_order ASC'
        : 'SELECT * FROM events WHERE is_active = true ORDER BY event_date ASC, sort_order ASC'
    );
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, event_date, event_time, location, featured, sort_order } = body;

    const result = await db.query(
      `INSERT INTO events (title, description, event_date, event_time, location, featured, sort_order)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [title, description, event_date, event_time, location, featured || false, sort_order || 0]
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Error creating event:', error);
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 });
  }
}
