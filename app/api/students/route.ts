import { NextRequest, NextResponse } from 'next/server';
import Database from '@/app/lib/db';

export async function GET() {
  try {
    const result = await Database.query('SELECT * FROM students');
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to fetch students',
    });
  }
}
