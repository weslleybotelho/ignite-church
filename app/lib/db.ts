import { Pool } from 'pg';

class Database {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      connectionString: process.env.ignite_URL,
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
