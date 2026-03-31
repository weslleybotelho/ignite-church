import { NextResponse } from 'next/server';
import { getFromR2 } from '@/app/utils/services/r2';

export async function GET(_request: Request, { params }: { params: { key: string[] } }) {
  try {
    const key = (params.key || []).join('/');
    if (!key) {
      return NextResponse.json({ error: 'Missing object key' }, { status: 400 });
    }

    const object = await getFromR2(key);
    if (!object.Body) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    const data = await object.Body.transformToByteArray();
    return new NextResponse(data, {
      status: 200,
      headers: {
        'Content-Type': object.ContentType || 'application/octet-stream',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error: any) {
    if (error?.name === 'NoSuchKey' || error?.$metadata?.httpStatusCode === 404) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    console.error('Error fetching file from R2:', error);
    return NextResponse.json({ error: 'Failed to fetch file' }, { status: 500 });
  }
}
