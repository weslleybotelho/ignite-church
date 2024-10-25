'use client';
import styles from './calendar.module.css';
import { slideFromRightScroll } from '../../utils/gsapAnimations';
import { useGSAP } from '@gsap/react';

const events2 = [
  {
    month: 'OCT',
    day: 15,
    title: "Men's ministry",
    time: '7:30 AM - 8:30 AM',
  },
  {
    month: 'OCT',
    day: 20,
    title: 'Youth meeting',
    time: '7:30 AM - 8:30 AM',
  },
  {
    month: 'OCT',
    day: 2,
    title: 'Evangelism',
    time: '7:30 AM - 8:30 AM',
    location: 'Gare Central - Main entrance',
  },
];

export default function Events() {
  useGSAP(() => {
    slideFromRightScroll('#events > div', '#events');
  });
  return (
    <>
      <article className="hidden">
        <section className="container mt-3">
          <div className={styles.container}>
            <h1 className={styles.heading}>Calendar</h1>
            <h2 className={styles.subheading + ' mt-5'}>October 2024</h2>
            <div id="events">
              {events2.map((event, index) => (
                <div key={index} className={`${styles.event} flex-start-row pt-2`}>
                  <div className={`${styles.rightBorder} flex-center-column`}>
                    <p className={styles.eventMonth}>{event.month}</p>
                    <p className={styles.eventDate}>{event.day}</p>
                  </div>
                  <div>
                    <p className={styles.eventTitle}>{event.title}</p>
                    {event.time && <p className={styles.eventTime}>{event.time}</p>}
                    <p className={styles.eventLocation}>{event.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
