// File: app/api/students/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Database from '@/app/lib/db';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const result = await Database.query('SELECT * FROM students WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return NextResponse.json({
        success: false,
        message: 'Student not found',
      });
    }
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to fetch student',
    });
  }
}
