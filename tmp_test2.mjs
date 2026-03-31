import { readFileSync } from 'fs';
import pkg from 'pg';
const { Pool } = pkg;

// NOT setting NODE_TLS_REJECT_UNAUTHORIZED = '0' — same as the actual API code

const env = readFileSync('.env.local', 'utf8');
const match = env.match(/POSTGRES_URL_NON_POOLING="([^"]+)"/);
const url = match ? match[1] : '';

const pool = new Pool({ connectionString: url, ssl: { rejectUnauthorized: false } });

try {
  const r = await pool.query('SELECT * FROM announcements WHERE is_active = true ORDER BY sort_order ASC, created_at DESC');
  console.log('Success! Rows:', r.rows.length);
} catch (e) {
  console.error('Error:', e.message);
  console.error('Code:', e.code);
}
await pool.end();
