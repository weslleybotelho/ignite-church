import { NextRequest, NextResponse } from 'next/server';
import Database from '../../../../lib/db';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({
      success: false,
      message: 'Homework ID is required',
    });
  }

  try {
    const result = await Database.query('UPDATE homeworks SET reviewed = FALSE WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return NextResponse.json({
        success: false,
        message: 'Homework not found',
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Homework marked as NOT reviewed',
      homework: result.rows[0],
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: 'Failed to mark homework as NOT reviewed',
    });
  }
}
