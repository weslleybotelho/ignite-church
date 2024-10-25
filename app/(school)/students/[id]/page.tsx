// File: app/(school)/students/[id].tsx
'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
// import './students.css';

interface StudentType {
  id: string;
  first_name: string;
  last_name: string;
  gender: string;
  date_of_birth: string;
  nationality: string;
  church_name: string;
  language: string;
  class: string;
  fee_paid: boolean;
}

export default function StudentDetails() {
  const [student, setStudent] = useState<StudentType | null>(null);
  const router = useRouter();
  const id = useSearchParams().get('id');

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const result = await axios.get(`/api/students/${id}`).then(({ data }) => data);
        if (result) {
          setStudent(result);
        }
      } catch (error) {
        console.error('API Error:', error);
      }
    };
    if (id) {
      fetchStudent();
    }
  }, [id]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`/api/students/${id}`, student);
      router.push('/students');
    } catch (error) {
      console.error('API Error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => (prevStudent ? { ...prevStudent, [name]: value } : null));
  };

  if (!student) return <div>Loading...</div>;

  return (
    <article>
      <div className="container">
        <h3>Student Details</h3>
        <form onSubmit={handleUpdate} className="mt-2">
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="first_name"
              value={student.first_name}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>
          <div className="mt-2">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="last_name"
              value={student.last_name}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>
          <div className="mt-2">
            <label htmlFor="gender">Gender:</label>
            <select id="gender" name="gender" value={student.gender} onChange={handleChange} required className="mt-1">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="mt-2">
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
              type="date"
              id="dateOfBirth"
              name="date_of_birth"
              value={student.date_of_birth}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>
          <div className="mt-2">
            <label htmlFor="nationality">Nationality:</label>
            <input
              type="text"
              id="nationality"
              name="nationality"
              value={student.nationality}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>
          <div className="mt-2">
            <label htmlFor="churchName">Church Name:</label>
            <input
              type="text"
              id="churchName"
              name="church_name"
              value={student.church_name}
              onChange={handleChange}
              className="mt-1"
            />
          </div>
          <div className="mt-2">
            <label htmlFor="language">Language:</label>
            <select
              id="language"
              name="language"
              value={student.language}
              onChange={handleChange}
              required
              className="mt-1">
              <option value="">Select Language</option>
              <option value="1">English</option>
              <option value="2">French</option>
              <option value="3">Dutch</option>
            </select>
          </div>
          <div className="mt-2">
            <label htmlFor="studentClass">Class:</label>
            <select
              id="studentClass"
              name="class"
              value={student.class}
              onChange={handleChange}
              required
              className="mt-1">
              <option value="">Select Class</option>
              <option value="1">First Year</option>
              <option value="2">Second Year</option>
              <option value="3">Third Year</option>
            </select>
          </div>
          <div className="flex-center">
            <button type="submit" className="btn-orange mt-2 w-50" style={{ border: 'none' }}>
              Update Student
            </button>
          </div>
        </form>
      </div>
    </article>
  );
}
