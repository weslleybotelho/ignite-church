'use client';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
// import './students.css';

export default function AddStudent() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [nationality, setNationality] = useState('');
  const [churchName, setChurchName] = useState('');
  const [language, setLanguage] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/students/add', {
        first_name: firstName,
        last_name: lastName,
        gender,
        date_of_birth: dateOfBirth,
        nationality,
        church_name: churchName,
        language_id: language,
        class_id: studentClass,
      });
      router.push('/students');
    } catch (error) {
      console.error('API Error:', error);
    }
  };

  return (
    <article>
      <div className="container">
        <h3>Add New Student</h3>
        <form onSubmit={handleSubmit} className="mt-2">
          <div className="row">
            <div className="grid-6">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="mt-1"
              />
            </div>
            <div className="grid-6">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="mt-1"
              />
            </div>
          </div>
          <div className="row">
            <div className="grid-4">
              <div className="mt-2">
                <label htmlFor="gender">Gender:</label>
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                  className="mt-1">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <div className="grid-4">
              <div className="mt-2">
                <label htmlFor="dateOfBirth">Date of Birth:</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
            </div>
            <div className="grid-4">
              <div className="mt-2">
                <label htmlFor="nationality">Nationality:</label>
                <input
                  type="text"
                  id="nationality"
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="grid-4">
              <div className="mt-2">
                <label htmlFor="churchName">Church Name:</label>
                <input
                  type="text"
                  id="churchName"
                  value={churchName}
                  onChange={(e) => setChurchName(e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
            <div className="grid-4">
              <div className="mt-2">
                <label htmlFor="language">Language:</label>
                <select
                  id="language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  required
                  className="mt-1">
                  <option value="">Select Language</option>
                  <option value="1">English</option>
                  <option value="2">French</option>
                  <option value="3">Dutch</option>
                </select>
              </div>
            </div>
            <div className="grid-4">
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
                </select>
              </div>
            </div>
          </div>
          <div className="flex-start-row ml-2">
            <button type="submit" className="btn-orange" style={{ border: 'none' }}>
              Add Student
            </button>
          </div>
        </form>
      </div>
    </article>
  );
}
