'use client';
import Image from 'next/image';
import sponsors from '../../../img/SPONSOR.jpg';
import { useGSAP } from '@gsap/react';
import { Heart, Building, Handshake, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { fadeFromBelow, fadeFromOpacityScroll } from '../../../utils/gsapAnimations';
import { useTranslation, useLocale } from '../../../i18n/useTranslation';

export default function Supporters() {
  const t = useTranslation();
  const locale = useLocale();
  const lp = (href: string) => `/${locale}${href}`;
  useGSAP(() => {
    fadeFromBelow('.page-header-content');
  });

  useGSAP(() => {
    fadeFromOpacityScroll('#sponsors .container', '#sponsors');
  });

  return (
    <>
      {/* ==================== PAGE HEADER ==================== */}
      <section
        className="page-header"
        style={{
          minHeight: '50vh',
          background: 'linear-gradient(135deg, var(--color-secondary) 0%, #2D2D4A 100%)',
        }}>
        <div
          className="hero-overlay"
          style={{
            background: 'radial-gradient(circle at 30% 70%, rgba(232, 90, 36, 0.15) 0%, transparent 50%)',
          }}></div>
        <div className="page-header-content">
          <span className="hero-eyebrow">{t.supporters.headerEyebrow}</span>
          <h1 className="page-header-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-brand)' }}>
            {t.supporters.headerTitle}
          </h1>
          <p className="page-header-subtitle">{t.supporters.headerSubtitle}</p>
        </div>
      </section>

      {/* ==================== INTRO ==================== */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="feature-icon mx-auto mb-6" style={{ width: '80px', height: '80px' }}>
            <Handshake size={36} />
          </div>
          <h2 className="mb-4">{t.supporters.introTitle}</h2>
          <p className="text-secondary" style={{ maxWidth: '700px', margin: '0 auto' }}>
            {t.supporters.introText}
          </p>
        </div>
      </section>

      {/* ==================== SPONSORS IMAGE ==================== */}
      <section className="section section-cream" id="sponsors">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">{t.supporters.sponsorsEyebrow}</span>
            <h2 className="section-title">{t.supporters.sponsorsTitle}</h2>
          </div>
          <div
            style={{
              background: 'white',
              padding: '2rem',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-lg)',
            }}>
            <Image
              src={sponsors}
              alt="Our Sponsors and Partners"
              style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-md)' }}
            />
          </div>
        </div>
      </section>

      {/* ==================== BECOME A SUPPORTER ==================== */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <div className="feature-icon mx-auto mb-6" style={{ background: 'rgba(232, 90, 36, 0.2)', width: '80px', height: '80px' }}>
            <Building size={36} />
          </div>
          <h2 className="text-light mb-4">{t.supporters.becomeTitle}</h2>
          <p className="lead text-light-muted mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            {t.supporters.becomeText}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:info@ignitechurch.be" className="btn-primary btn-lg">
              <Mail size={20} />
              {t.supporters.becomeBtnContact}
            </a>
            <Link href={lp('/give')} className="btn-outline btn-lg" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
              <Heart size={20} />
              {t.supporters.becomeBtnGive}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
