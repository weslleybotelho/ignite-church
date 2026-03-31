import { NextResponse } from 'next/server';
import db from '@/app/lib/db';

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  try {
    const result = await db.query('SELECT * FROM events WHERE id = $1', [params.id]);
    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching event:', error);
    return NextResponse.json({ error: 'Failed to fetch event' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const { title, description, event_date, event_time, location, featured, sort_order, is_active } = body;

    const result = await db.query(
      `UPDATE events
       SET title = $1, description = $2, event_date = $3, event_time = $4,
           location = $5, featured = $6, sort_order = $7, is_active = $8,
           updated_at = NOW()
       WHERE id = $9
       RETURNING *`,
      [title, description, event_date, event_time, location, featured, sort_order, is_active, params.id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating event:', error);
    return NextResponse.json({ error: 'Failed to update event' }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  try {
    const result = await db.query('DELETE FROM events WHERE id = $1 RETURNING *', [params.id]);
    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Event deleted' });
  } catch (error) {
    console.error('Error deleting event:', error);
    return NextResponse.json({ error: 'Failed to delete event' }, { status: 500 });
  }
}
