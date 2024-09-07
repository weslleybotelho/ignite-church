import { NextRequest, NextResponse } from 'next/server';
import multer from 'multer';
import os from 'os';
import { promisify } from 'util';
import Database from '../../lib/db';

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const body = Object.fromEntries(form);
  const file = (body.file as Blob) || null;

  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const result = await Database.query(
      'INSERT INTO homeworks (student_name, student_class, file_name, file_data, reviewed) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [body.studentName, body.studentClass, (body.file as File).name, buffer, false]
    );

    if (!result) {
      return NextResponse.json({
        success: false,
        message: 'Failed to upload homework',
      });
    }

    return NextResponse.json({
      success: true,
      name: (body.file as File).name,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Failed to upload homework',
    });
  }
}

export async function GET() {
  const result = await Database.query('SELECT * FROM homeworks');
  return NextResponse.json(result.rows);
}
