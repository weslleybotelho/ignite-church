'use client';
import styles from './calendar.module.css';
import { slideFromRightScroll } from '../../utils/gsapAnimations';
import { useGSAP } from '@gsap/react';

const events2 = [
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
