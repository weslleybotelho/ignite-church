import type { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import Database from '../../lib/db'; // Adjust the path to your actual Database module
import util from 'util';

// Setup multer to store files in memory
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Promisify multer middleware
const uploadSingle = util.promisify(upload.single('file'));

// API Route handler
export async function POST(request: Request) {
  // console.log(req.method);
  if (request.method === 'POST') {
    return Response.json({ message: request.body });
    // upload.single('file')(request as any, response as any, (err) => {
    //   if (err) {
    //     console.error('Multer Error:', err);
    //     return response.json({ error: 'File upload error', details: err.message });
    //   }

    //   const { studentName, studentClass } = request.body;
    //   const file = request.file;
    // });
    //   try {
    //     // Apply multer middleware to parse the file
    //     // await uploadSingle(request, response);

    //     // Extract form data and file
    //     const body = await request.data;

    //     const file = request.file;

    //     if (!body || !file) {
    //       return Response.json({ error: 'Missing required fields or file ', details: request });
    //     }

    //     // Insert into the database
    //     const result = await Database.query(
    //       'INSERT INTO homeworks (student_name, student_class, file_name, file_data) VALUES ($1, $2, $3, $4) RETURNING *',
    //       [body.studentName, body.studentClass, file.originalname, file.buffer]
    //     );

    //     return Response.json(result.rows[0]);
    //   } catch (error) {
    //     console.error('Database Error:', error);
    //     return Response.json({ error: 'Database error', details: (error as Error).message });
    //   }
    // } else {
    //   // Handle other HTTP methods
    //   // response.setHeader('Allow', ['POST']);
    //   return Response.json({ error: `Method ${request.method} Not Alloweddddd` });
  }
}
