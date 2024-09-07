'use client';
import { CLASSES } from '@/app/constants/classes';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import downloadIcon from '@/public/svg/download.svg';
import successIcon from '@/public/svg/checkbox-circlesvg.svg';
import closeIcon from '@/public/svg/close-circle.svg';
import Notification from '@/app/components/Notification/notification';
import './homeworks.css';

interface DataType {
  key: React.Key;
  id: string;
  student_name: string;
  student_class: string;
  file_name: string;
  file_data: Buffer;
  reviewed: boolean;
}

export default function Homeworks() {
  const [data, setData] = useState<DataType[]>();
  const [filteredData, setFilteredData] = useState<DataType[]>();
  const [studentNameFilter, setStudentNameFilter] = useState('');
  const [studentClassFilter, setStudentClassFilter] = useState('');
  const [notification, setNotification] = useState<string | null>(null);

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

  const markAsReviewed = async (id: string) => {
    try {
      await axios.patch(`/api/homework/${id}/reviewed`);
      setData((prevData) => prevData?.map((item) => (item.id === id ? { ...item, reviewed: true } : item)));
      setNotification('Homework reviewed');
    } catch (error) {
      console.error('API Error:', error);
    }
  };

  const markAsNotReviewed = async (id: string) => {
    try {
      await axios.patch(`/api/homework/${id}/not-reviewed`);
      setData((prevData) => prevData?.map((item) => (item.id === id ? { ...item, reviewed: false } : item)));
      setNotification('Homework rejected');
    } catch (error) {
      console.error('API Error:', error);
    }
  };

  return (
    <>
      {notification && <Notification message={notification} onClose={() => setNotification(null)} />}
      <article className="">
        <section className="container pb-0">
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
            </select>
          </div>
        </section>
        <section className="relative">
          <div className="">
            <div className="row">
              <div className="grid-12">
                <table className="w-100 styled-table">
                  <thead className="">
                    <tr className="">
                      <th>Student Name</th>
                      <th>Year</th>
                      <th>File Name</th>
                      <th>Reviewed</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData?.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>{item.student_name}</td>
                          <td>{CLASSES[item.student_class]}</td>
                          <td>{item.file_name}</td>
                          <td>{item.reviewed ? 'Yes' : 'No'}</td>
                          <td className="flex-start-row">
                            <Link href={'/api/download-homework?homeworkId=' + item.id} className="flex-center">
                              <Image
                                src={downloadIcon}
                                alt="Icon Donwload Homework"
                                width={24}
                                height={24}
                                className="icon-actions"
                              />
                            </Link>
                            {/* <button onClick={() => markAsReviewed(item.id)} disabled={item.reviewed} className="ml-2">
                              Mark as Reviewed
                            </button> */}
                            <button
                              onClick={() => markAsReviewed(item.id)}
                              className="flex-center ml-2"
                              disabled={item.reviewed}>
                              <Image
                                src={successIcon}
                                alt="Icon Check Homework done"
                                width={24}
                                height={24}
                                className="icon-actions"
                              />
                            </button>
                            <button
                              onClick={() => markAsNotReviewed(item.id)}
                              className="flex-center ml-2"
                              disabled={!item.reviewed}>
                              <Image
                                src={closeIcon}
                                alt="Icon not reviewed Homework"
                                width={24}
                                height={24}
                                className="icon-actions"
                              />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
