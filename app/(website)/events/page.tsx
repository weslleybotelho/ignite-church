'use client';
import { Calendar, Clock, MapPin, ChevronRight, Bell } from 'lucide-react';

// Update these events as needed
const upcomingEvents = [
  {
    month: 'DEC',
    day: 22,
    title: 'Christmas Celebration - Potluck',
    description: 'Bring your traditional dish and celebrate the birth of our Savior together!',
    time: 'After service',
    location: 'Ignite Church',
    featured: true,
  },
  {
    month: 'DEC',
    day: 31,
    title: "New Year's Eve Celebration",
    description: '25€ per person (Free for kids under 12). Ticket non-refundable.',
    time: 'Evening',
    location: 'Ignite Church',
    featured: true,
  },
];

const regularServices = [
  {
    title: 'Sunday Service',
    time: '10:00 AM',
    description: 'Join us for worship, teaching, and fellowship every Sunday.',
  },
  {
    title: 'Home Groups',
    time: 'Every other week',
    description: 'Connect in smaller groups around Brussels and Antwerp.',
  },
  {
    title: 'Youth Ministry',
    time: 'Every other week',
    description: 'For ages 12-25. Building community and growing in faith together.',
  },
];

export default function Events() {
  return (
    <>
      {/* ==================== PAGE HEADER ==================== */}
      <section
        className="page-header"
        style={{
          minHeight: '50vh',
          backgroundColor: '#1A1A2E',
        }}>
        <div
          className="hero-overlay"
          style={{
            background: 'radial-gradient(circle at 30% 70%, rgba(232, 90, 36, 0.15) 0%, transparent 50%)',
          }}></div>
        <div className="page-header-content">
          <span className="hero-eyebrow">Join Us</span>
          <h1 className="page-header-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Events &amp; Calendar
          </h1>
          <p className="page-header-subtitle">Discover what&apos;s happening at Ignite Church</p>
        </div>
      </section>

      {/* ==================== UPCOMING EVENTS ==================== */}
      <section className="section" id="upcoming">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Coming Up</span>
            <h2 className="section-title">Upcoming Events</h2>
            <p className="section-subtitle">Special events and gatherings you won&apos;t want to miss.</p>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="event-card card card-hover"
                  style={{
                    overflow: 'hidden',
                    border: event.featured ? '2px solid var(--color-brand)' : undefined,
                  }}>
                  <div style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem' }}>
                    {/* Date Badge */}
                    <div
                      style={{
                        background: event.featured ? 'var(--color-brand)' : 'var(--color-cream)',
                        borderRadius: 'var(--radius-md)',
                        padding: '1rem',
                        textAlign: 'center',
                        minWidth: '80px',
                      }}>
                      <span
                        style={{
                          display: 'block',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: event.featured ? '#1A1A1A' : 'var(--color-brand)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}>
                        {event.month}
                      </span>
                      <span
                        style={{
                          display: 'block',
                          fontSize: '2rem',
                          fontWeight: 700,
                          color: event.featured ? '#1A1A1A' : 'var(--color-text)',
                          lineHeight: 1,
                        }}>
                        {event.day}
                      </span>
                    </div>

                    {/* Event Details */}
                    <div style={{ flex: 1 }}>
                      <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>{event.title}</h3>
                      <p className="text-secondary" style={{ marginBottom: '1rem', fontSize: '0.95rem' }}>
                        {event.description}
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                        {event.time && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Clock size={16} className="text-brand" />
                            <span className="text-secondary" style={{ fontSize: '0.9rem' }}>
                              {event.time}
                            </span>
                          </div>
                        )}
                        {event.location && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <MapPin size={16} className="text-brand" />
                            <span className="text-secondary" style={{ fontSize: '0.9rem' }}>
                              {event.location}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem' }}>
              <div className="feature-icon mx-auto mb-4">
                <Calendar size={32} />
              </div>
              <p className="text-secondary">No upcoming events scheduled. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* ==================== REGULAR SERVICES ==================== */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Every Week</span>
            <h2 className="section-title">Regular Services</h2>
            <p className="section-subtitle">Ongoing gatherings and opportunities to connect.</p>
          </div>

          <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {regularServices.map((service, index) => (
              <div key={index} className="feature-card">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1rem',
                    paddingBottom: '1rem',
                    borderBottom: '1px solid var(--color-border)',
                  }}>
                  <div className="feature-icon" style={{ width: '48px', height: '48px' }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0 }}>{service.title}</h4>
                    <span className="text-brand" style={{ fontSize: '0.9rem', fontWeight: 600 }}>
                      {service.time}
                    </span>
                  </div>
                </div>
                <p className="text-secondary" style={{ margin: 0 }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== STAY UPDATED ==================== */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <div className="feature-icon mx-auto mb-6" style={{ background: 'rgba(232, 90, 36, 0.2)', width: '80px', height: '80px' }}>
            <Bell size={36} />
          </div>
          <h2 className="text-light mb-4">Stay Updated</h2>
          <p className="lead text-light-muted mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Follow us on social media or contact us to stay informed about all our events and activities.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://www.instagram.com/ignitechurch_brussels/" target="_blank" className="btn-primary btn-lg">
              Follow on Instagram
            </a>
            <a
              href="mailto:info@ignitechurch.be"
              className="btn-outline btn-lg"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
