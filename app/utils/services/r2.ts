import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';

const r2Client = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID!}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

const BUCKET = process.env.R2_BUCKET_NAME!;
const PUBLIC_URL = process.env.R2_PUBLIC_URL!;

function toPathSafeKey(key: string): string {
  return key
    .split('/')
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join('/');
}

export function buildR2ProxyUrl(key: string): string {
  return `/api/r2/${toPathSafeKey(key)}`;
}

export function extractR2Key(imageUrl: string): string | null {
  if (!imageUrl) return null;

  if (imageUrl.startsWith('/api/r2/')) {
    return decodeURIComponent(imageUrl.replace('/api/r2/', ''));
  }

  if (PUBLIC_URL && imageUrl.startsWith(`${PUBLIC_URL}/`)) {
    return decodeURIComponent(imageUrl.replace(`${PUBLIC_URL}/`, ''));
  }

  try {
    const url = new URL(imageUrl);
    const pathname = url.pathname.replace(/^\//, '');

    if (url.hostname.includes('.r2.cloudflarestorage.com')) {
      if (pathname.startsWith(`${BUCKET}/`)) {
        return decodeURIComponent(pathname.replace(`${BUCKET}/`, ''));
      }
      return decodeURIComponent(pathname);
    }
  } catch {
    return null;
  }

  return null;
}

export function toClientImageUrl(imageUrl: string): string {
  const key = extractR2Key(imageUrl);
  if (!key) return imageUrl;
  return buildR2ProxyUrl(key);
}

export async function uploadToR2(file: Buffer, fileName: string, contentType: string): Promise<string> {
  const key = `announcements/${Date.now()}-${fileName}`;

  await r2Client.send(
    new PutObjectCommand({
      Bucket: BUCKET,
      Key: key,
      Body: file,
      ContentType: contentType,
    })
  );

  return buildR2ProxyUrl(key);
}

export async function deleteFromR2(imageUrl: string): Promise<void> {
  const key = extractR2Key(imageUrl);
  if (!key) return;

  await r2Client.send(
    new DeleteObjectCommand({
      Bucket: BUCKET,
      Key: key,
    })
  );
}

export async function getFromR2(key: string) {
  return r2Client.send(
    new GetObjectCommand({
      Bucket: BUCKET,
      Key: key,
    })
  );
}
