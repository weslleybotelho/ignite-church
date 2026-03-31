import { readFileSync } from 'fs';
import pkg from 'pg';
const { Pool } = pkg;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const env = readFileSync('.env.local', 'utf8');
const match = env.match(/POSTGRES_URL_NON_POOLING="([^"]+)"/);
const url = match ? match[1] : '';

const pool = new Pool({ connectionString: url });
const r = await pool.query("SELECT table_name FROM information_schema.tables WHERE table_schema='public'");
console.log('Tables:', r.rows.map(x => x.table_name));
await pool.end();
