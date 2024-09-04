'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface DataType {
  key: React.Key;
  id: string;
  student_name: string;
  student_class: string;
  file_name: string;
  file_data: Buffer;
}

export default function Homeworks() {
  const [data, setData] = useState<DataType[]>();

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
  );
}
