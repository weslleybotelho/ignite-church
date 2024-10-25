// File: app/api/students/add/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Database from '@/app/lib/db';

export async function POST(req: NextRequest) {
  const { first_name, last_name, gender, date_of_birth, nationality, church_name, language_id, class_id } =
    await req.json();

  try {
    const result = await Database.query(
      'INSERT INTO students (first_name, last_name, gender, date_of_birth, nationality, church_name, language_id, class_id, fee_paid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [first_name, last_name, gender, date_of_birth, nationality, church_name, language_id, class_id, false]
    );

    return NextResponse.json({
      success: true,
      student: result.rows[0],
    });
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to add student',
    });
  }
}
