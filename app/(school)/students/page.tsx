'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { CLASSES } from '@/app/constants/classes';
import { LANGUAGES } from '@/app/constants/languages';
// import './students.css';

interface StudentType {
  id: string;
  first_name: string;
  last_name: string;
  gender: string;
  date_of_birth: string;
  nationality: string;
  church_name: string;
  language_id: string;
  class_id: string;
  fee_paid: boolean;
}

export default function Students() {
  const [students, setStudents] = useState<StudentType[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<StudentType[]>([]);
  const [nameFilter, setNameFilter] = useState('');
  const [classFilter, setClassFilter] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const result = await axios.get('/api/students').then(({ data }) => data);
        if (result) {
          setStudents(result);
          setFilteredStudents(result);
        }
      } catch (error) {
        console.error('API Error:', error);
      }
    };
    fetchStudents();
  }, []);

  useEffect(() => {
    console.log(classFilter);
    console.log(languageFilter);
    console.log(nameFilter);
    const filtered = students.filter((student) => {
      console.log(student);
      return (
        student.first_name.toLowerCase().includes(nameFilter.toLowerCase()) ||
        (student.last_name.toLowerCase().includes(nameFilter.toLowerCase()) &&
          student.class_id.toString().includes(classFilter) &&
          student.language_id.toString().includes(languageFilter))
      );
    });
    setFilteredStudents(filtered);
  }, [nameFilter, classFilter, languageFilter, students]);

  return (
    <article>
      <section className="container pb-0">
        <div className="flex-space flex-end-row">
          <h3>Students</h3>
          <Link href="/students/add" className="btn-orange">
            Add New Student
          </Link>
        </div>
        <div className="filters flex-center-revert-mobile pt-4">
          <h5 className="m-1 color-gray">Filter</h5>
          <input
            type="text"
            placeholder="Filter by name"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
            className="m-1"
            id="filterName"
          />
          <select value={classFilter} onChange={(e) => setClassFilter(e.target.value)} className="m-1" id="filterClass">
            <option value="">All Classes</option>
            <option value="1">First Year</option>
            <option value="2">Second Year</option>
            <option value="3">Third Year</option>
          </select>
          <select
            value={languageFilter}
            onChange={(e) => setLanguageFilter(e.target.value)}
            className="m-1"
            id="filterLanguage">
            <option value="">All Languages</option>
            <option value="1">English</option>
            <option value="2">French</option>
            <option value="3">Dutch</option>
          </select>
        </div>
      </section>
      <section className="relative">
        <div className="container p-1">
          <div className="row">
            <div className="grid-12">
              <table className="w-100 styled-table">
                <thead className="">
                  <tr className="">
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Class</th>
                    <th>Language</th>
                    <th>Fee Paid</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student) => (
                    <tr key={student.id}>
                      <td>{student.first_name}</td>
                      <td>{student.last_name}</td>
                      <td>{CLASSES[student.class_id]}</td>
                      <td>{LANGUAGES[student.language_id]}</td>
                      <td>{student.fee_paid ? 'Yes' : 'No'}</td>
                      <td>
                        <Link href={`/students/${student.id}`} className="btn-blue">
                          View/Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
