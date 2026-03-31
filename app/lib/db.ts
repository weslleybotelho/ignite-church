import { Pool } from 'pg';

// Required for Supabase pooler SSL certificates
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

class Database {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      connectionString: process.env.POSTGRES_URL_NON_POOLING,
      ssl: {
        rejectUnauthorized: false,
      },
    });
  }

  async query(text: string, params?: any[]) {
    // console.log('Database Query:', text, params);
    const client = await this.pool.connect();
    try {
      const res = await client.query(text, params);
      // console.log('Database Result:', res.rows);
      return res;
    } finally {
      client.release();
    }
  }
}

export default new Database();
