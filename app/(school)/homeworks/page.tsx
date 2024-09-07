'use client';
import { CLASSES } from '@/app/constants/classes';
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
  const [filteredData, setFilteredData] = useState<DataType[]>();
  const [studentNameFilter, setStudentNameFilter] = useState('');
  const [studentClassFilter, setStudentClassFilter] = useState('');

  useEffect(() => {
    const fetchHomeworks = async () => {
      try {
        const result = await axios.get('/api/homework').then(({ data }) => data);
        if (result) {
          setData(result);
          setFilteredData(result);
        }
      } catch (error) {
        console.error('API Error:', error);
      }
    };
    fetchHomeworks();
  }, []);

  useEffect(() => {
    if (data) {
      const filtered = data.filter((item) => {
        return (
          item.student_name.toLowerCase().includes(studentNameFilter.toLowerCase()) &&
          item.student_class.toString().includes(studentClassFilter)
        );
      });
      setFilteredData(filtered);
    }
  }, [studentNameFilter, studentClassFilter, data]);

  return (
    <article className="container relative">
      <h3>Homeworks</h3>
      <div className="filters flex-center-revert-mobile">
        <h5 className="m-1 color-gray">Filter</h5>
        <input
          type="text"
          placeholder="Filter by student name"
          value={studentNameFilter}
          onChange={(e) => setStudentNameFilter(e.target.value)}
          className="m-1"
          id="filterName"
        />
        <select
          value={studentClassFilter}
          onChange={(e) => setStudentClassFilter(e.target.value)}
          className="m-1"
          id="filterClass">
          <option value="">All Classes</option>
          <option value="1">First Year</option>
          <option value="2">Second Year</option>
          <option value="3">Third Year</option>
          {/* Add more classes as needed */}
        </select>
      </div>
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
          {filteredData?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.student_name}</td>
                <td>{CLASSES[item.student_class]}</td>
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
    </article>
  );
}
