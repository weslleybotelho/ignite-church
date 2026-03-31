'use client';
import { MapPin, Instagram } from 'lucide-react';
import { useTranslation } from '../../../i18n/useTranslation';

export default function Locations() {
  const t = useTranslation();

  const locations = [
    t.locations.brussels,
    t.locations.paris,
    t.locations.antwerp,
  ];

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
            background:
              'radial-gradient(circle at 70% 30%, rgba(232, 90, 36, 0.15) 0%, transparent 50%)',
          }}
        />
        <div className="page-header-content">
          <span className="hero-eyebrow">{t.locations.headerEyebrow}</span>
          <h1
            className="page-header-title"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            {t.locations.headerTitle}
          </h1>
          <p className="page-header-subtitle">{t.locations.headerSubtitle}</p>
        </div>
      </section>

      {/* ==================== LOCATION CARDS ==================== */}
      <section className="section">
        <div className="container">
          <div
            className="grid gap-8"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              maxWidth: '1100px',
              margin: '0 auto',
            }}>
            {locations.map((loc) => (
              <div
                key={loc.city}
                className="card"
                style={{
                  overflow: 'hidden',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                }}>
                {/* Card header band */}
                <div
                  style={{
                    background: 'var(--color-brand)',
                    padding: '1.5rem 1.75rem 1.25rem',
                    position: 'relative',
                  }}>
                  <span
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'rgba(0,0,0,0.25)',
                      color: 'white',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                    }}>
                    {loc.statusLabel}
                  </span>
                  <h2
                    style={{
                      color: '#1A1A1A',
                      margin: 0,
                      fontSize: '2rem',
                      fontWeight: 700,
                      lineHeight: 1.1,
                    }}>
                    {loc.city}
                  </h2>
                  <p
                    style={{
                      color: 'rgba(26,26,26,0.85)',
                      margin: '0.25rem 0 0',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                    }}>
                    {loc.country}
                  </p>
                </div>

                {/* Card body */}
                <div style={{ padding: '1.5rem 1.75rem' }}>
                  <p
                    className="text-secondary"
                    style={{ marginBottom: '1.5rem', lineHeight: 1.65 }}>
                    {loc.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {/* Address */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <MapPin
                        size={18}
                        style={{ color: 'var(--color-brand)', marginTop: '2px', flexShrink: 0 }}
                      />
                      <div>
                        <span
                          style={{
                            display: 'block',
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            color: 'var(--color-text-secondary, #6B7280)',
                            marginBottom: '0.15rem',
                          }}>
                          {t.locations.addressLabel}
                        </span>
                        <span style={{ fontSize: '0.9rem' }}>{loc.address}</span>
                        {loc.mapsUrl && (
                          <a
                            href={loc.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand"
                            style={{ display: 'block', fontSize: '0.82rem', marginTop: '0.25rem', fontWeight: 500 }}>
                            {t.locations.getDirections} →
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Instagram */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <Instagram
                        size={18}
                        style={{ color: 'var(--color-brand)', marginTop: '2px', flexShrink: 0 }}
                      />
                      <div>
                        <span
                          style={{
                            display: 'block',
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            color: 'var(--color-text-secondary, #6B7280)',
                            marginBottom: '0.15rem',
                          }}>
                          {t.locations.instagramLabel}
                        </span>
                        <a
                          href={loc.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand"
                          style={{ fontSize: '0.9rem', fontWeight: 500 }}>
                          {loc.instagramHandle}
                        </a>
                      </div>
                    </div>
                  </div>

                  <a
                    href={loc.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Instagram size={16} />
                    {t.locations.followOn}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CONTACT CTA ==================== */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="text-light mb-4">{t.locations.contactLabel}</h2>
          <p
            className="lead text-light-muted mb-8"
            style={{ maxWidth: '560px', margin: '0 auto 2rem' }}>
            {t.locations.contactText}
          </p>
          <a
            href="mailto:ignitechurchbrussels@gmail.com"
            className="btn-primary btn-lg">
            {t.locations.contactBtn}
          </a>
        </div>
      </section>
    </>
  );
}
