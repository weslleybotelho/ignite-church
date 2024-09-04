'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.module.css';

interface DataType {
  key: React.Key;
  id: string;
  student_name: string;
  student_class: string;
  file_name: string;
  file_data: Buffer;
}

export default function UploadHomework() {
  const [data, setData] = useState<DataType[]>();
  const [studentName, setStudentName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append('studentName', studentName);
      formData.append('studentClass', studentClass);
      formData.append('file', file as Blob);

      const data = await axios
        .post('/api/homework', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(({ data }) => data);
    } catch (error) {
      console.error('API Error:', error);
    }
  };

  useEffect(() => {
    const fetchHomeworks = async () => {
      try {
        const result = await axios.get('/api/homework').then(({ data }) => data);
        if (result) {
          setData(result);
        }
      } catch (error) {
        console.error('API Error:', error);
      }
    };
    fetchHomeworks();
  }, []);

  return (
    <article>
      <div className="container">
        <h3>Upload Homework</h3>
        <form onSubmit={handleSubmit} className="mt-2">
          <div>
            <label htmlFor="studentName">Student Name:</label>
            <input
              type="text"
              id="studentName"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <div className="mt-2">
            <label htmlFor="studentClass">Class:</label>
            <select
              id="studentClass"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              required
              className="mt-1">
              <option value="">Select Class</option>
              <option value="1">First Year</option>
              <option value="2">Second Year</option>
              <option value="3">Third Year</option>
              {/* Add more classes as needed */}
            </select>
          </div>
          <div className="mt-2">
            <label htmlFor="file">Upload File:</label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
              className="mt-1"
            />
          </div>
          <div className="flex-center">
            <button type="submit" className="btn-orange mt-2 w-50" style={{ border: 'none' }}>
              Upload
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        <h3>Homeworks</h3>
        <table className="w-100 styled-table">
          <thead className="">
            <tr className="">
              <th>Student Name</th>
              <th>Class</th>
              <th>File Name</th>
              <th>File</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.student_name}</td>
                  <td>{item.student_class}</td>
                  <td>{item.file_name}</td>
                  <td>
                    <a href={'api/download-homework?homeworkId=' + item.id} download className="color-black">
                      Download
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </article>
  );
}
