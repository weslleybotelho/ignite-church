// import fs from 'fs';
// import formidable from 'formidable';
// import Database from '../../lib/db';

// export async function saveHomework(studentName: string, studentClass: string, file: formidable.File) {
//   if (!file) {
//     throw new Error('No file uploaded');
//   }

//   const fileData = fs.readFileSync(file.filepath);

//   try {
//     const result = await Database.query(
//       'INSERT INTO homeworks (student_name, student_class, file_name, file_data) VALUES ($1, $2, $3, $4) RETURNING *',
//       [studentName, studentClass, file.originalFilename, fileData]
//     );
//     return result.rows[0];
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error(`Database error: ${error.message}`);
//   }
// }
