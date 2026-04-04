'use client';
import Image from 'next/image';
import bgWomen from '../../../../img/bg-women.jpg';
import women1 from '../../../../img/women1.png';
import { useGSAP } from '@gsap/react';
import { Users, Calendar, MapPin, Heart, Sparkles, Shield, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { fadeFromBelow, slideFromLeftScroll } from '@/app/utils/gsapAnimations';
import { useTranslation, useLocale } from '../../../../i18n/useTranslation';

export default function Women() {
  const t = useTranslation();
  const locale = useLocale();
  const lp = (href: string) => `/${locale}${href}`;

  const visionPoints = [
    t.women.visionPoint1,
    t.women.visionPoint2,
    t.women.visionPoint3,
    t.women.visionPoint4,
    t.women.visionPoint5,
  ];
  useGSAP(() => {
    fadeFromBelow('.page-header-content');
  });

  useGSAP(() => {
    slideFromLeftScroll('#vision .two-col', '#vision');
  });

  return (
    <>
      {/* ==================== PAGE HEADER ==================== */}
      <section className="page-header" style={{ minHeight: '70vh' }}>
        <Image src={bgWomen} alt="Women Ministry" fill className="hero-background" style={{ objectFit: 'cover' }} priority />
        <div className="hero-overlay"></div>
        <div className="page-header-content">
          <span className="hero-eyebrow">{t.women.headerEyebrow}</span>
          <h1 className="page-header-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            {t.women.headerTitle}
          </h1>
          <p className="page-header-subtitle">{t.women.headerSubtitle}</p>
          <Link href={lp('/ministries')} className="btn-ghost btn-sm" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)', marginTop: '1.5rem', display: 'inline-block' }}>
            <ArrowLeft size={16} />
            {t.common.backToMinistries}
          </Link>
        </div>
      </section>

      {/* ==================== VISION ==================== */}
      <section className="section" id="vision">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow mb-4">{t.women.visionEyebrow}</span>
              <h2 className="mb-6">{t.women.visionTitle}</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {visionPoints.map((point, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div
                      style={{
                        background: 'var(--color-brand)',
                        borderRadius: '50%',
                        width: '24px',
                        height: '24px',
                        minWidth: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '2px',
                      }}>
                      <Heart size={12} color="white" />
                    </div>
                    <p className="text-secondary" style={{ margin: 0 }}>
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="image-frame">
              <Image
                src={women1}
                alt="Women Ministry gathering"
                width={500}
                height={500}
                className="image-rounded image-shadow"
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section className="section section-cream">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-eyebrow">{t.women.aboutEyebrow}</span>
            <h3 className="mb-6">{t.women.aboutTitle}</h3>
            <p className="text-secondary mb-6">
              {t.women.aboutText1}
            </p>
            <p className="text-secondary">
              {t.women.aboutText2}
            </p>
          </div>
        </div>
      </section>

      {/* ==================== DETAILS ==================== */}
      <section className="section">
        <div className="container">
          <div
            className="grid gap-8"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', maxWidth: '700px', margin: '0 auto' }}>
            <div className="feature-card" style={{ textAlign: 'center' }}>
              <div className="feature-icon mx-auto">
                <Calendar />
              </div>
              <h4 className="feature-title">{t.women.whenTitle}</h4>
              <p className="feature-text">{t.women.whenText}</p>
            </div>

            <div className="feature-card" style={{ textAlign: 'center' }}>
              <div className="feature-icon mx-auto">
                <MapPin />
              </div>
              <h4 className="feature-title">{t.women.whereTitle}</h4>
              <p className="feature-text">{t.women.whereText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <div className="feature-icon mx-auto mb-6" style={{ background: 'rgba(232, 90, 36, 0.2)', width: '80px', height: '80px' }}>
            <Users size={36} />
          </div>
          <h2 className="text-light mb-4">{t.women.ctaTitle}</h2>
          <p className="lead text-light-muted mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            {t.women.ctaText}
          </p>
          <a href="mailto:info@ignitechurch.be" className="btn-primary btn-lg">
            {t.women.ctaBtn}
          </a>
        </div>
      </section>
    </>
  );
}
