'use client';
import styles from './calendar.module.css';
import { slideFromRightScroll } from '../../utils/gsapAnimations';
import { useGSAP } from '@gsap/react';

const events2 = [
  {
    month: 'NOV',
    day: 19,
    title: 'Prayer Meeting',
    time: '07:30 PM',
  },
  {
    month: 'NOV',
    day: 22,
    title: 'Evangelism - Gare Central',
    time: '06:30 PM',
  },
  {
    month: 'NOV',
    day: 24,
    title: "Women's Meeting - Anne Christine",
    time: 'After service',
  },
  {
    month: 'NOV',
    day: 26,
    title: "Men's Ministry - Boxing Activity",
    time: '7:30 PM',
    // location: 'Gare Central - Main entrance',
  },
  {
    month: 'NOV',
    day: 29,
    title: 'Youth Meeting - Mélodie',
    time: '7:00 PM',
  },
  {
    month: 'DEC',
    day: 15,
    title: 'Baptism',
    time: 'For more info - Lionel or Laurianne',
  },
  {
    month: 'DEC',
    day: 22,
    title: 'Christimas - Potluck (Bring your traditional dish)',
    time: 'After service',
  },
  {
    month: 'DEC',
    day: 31,
    title: 'New Years Eve - 25€ per person',
    time: 'Ticket non-refundable (Free for kids -12 yrs old)',
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
            <h2 className={styles.subheading + ' mt-5'}>2024</h2>
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
                    {/* <p className={styles.eventLocation}>{event.location}</p> */}
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
