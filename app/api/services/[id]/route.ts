import { NextResponse } from 'next/server';
import db from '@/app/lib/db';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const { title, time, description, sort_order, is_active } = body;

    const result = await db.query(
      `UPDATE regular_services
       SET title = $1, time = $2, description = $3, sort_order = $4, is_active = $5, updated_at = NOW()
       WHERE id = $6
       RETURNING *`,
      [title, time, description, sort_order, is_active, params.id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating service:', error);
    return NextResponse.json({ error: 'Failed to update service' }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  try {
    const result = await db.query('DELETE FROM regular_services WHERE id = $1 RETURNING *', [params.id]);
    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Service deleted' });
  } catch (error) {
    console.error('Error deleting service:', error);
    return NextResponse.json({ error: 'Failed to delete service' }, { status: 500 });
  }
}
