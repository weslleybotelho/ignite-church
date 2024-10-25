import { NextRequest, NextResponse } from 'next/server';
import Database from '@/app/lib/db';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const { first_name, last_name, gender, date_of_birth, nationality, church_name, language_id, class_id, fee_paid } =
    await req.json();

  try {
    const result = await Database.query(
      'UPDATE students SET first_name = $1, last_name = $2, gender = $3, date_of_birth = $4, nationality = $5, church_name = $6, language_id = $7, class_id = $8, fee_paid = $9 WHERE id = $10 RETURNING *',
      [first_name, last_name, gender, date_of_birth, nationality, church_name, language_id, class_id, fee_paid, id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({
        success: false,
        message: 'Student not found',
      });
    }

    return NextResponse.json({
      success: true,
      student: result.rows[0],
    });
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to update student',
    });
  }
}
