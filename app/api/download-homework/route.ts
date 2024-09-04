import { NextRequest, NextResponse } from 'next/server';
import Database from '../../lib/db';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const homeworkId = searchParams.get('homeworkId');

  try {
    const result = await Database.query('SELECT file_name, file_data FROM homeworks where id = $1', [homeworkId]);

    if (result.rows.length === 0) {
      return NextResponse.json({
        success: false,
        message: 'Homework not found',
      });
    }

    const homework = result.rows[0];
    const fileBuffer = homework.file_data;
    const fileName = homework.file_name;

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Content-Type': 'application/octet-stream',
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: 'Failed to retrieve homework',
    });
  }
}
