'use client';
import Image from 'next/image';
import kidsImg from '../../../../img/kidsministry.jpg';
import { useGSAP } from '@gsap/react';
import { Baby, Calendar, MapPin, Heart, BookOpen, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { fadeFromBelow, fadeFromOpacityScroll } from '@/app/utils/gsapAnimations';
import { useTranslation, useLocale } from '../../../../i18n/useTranslation';

export default function Kids() {
  const t = useTranslation();
  const locale = useLocale();
  const lp = (href: string) => `/${locale}${href}`;
  useGSAP(() => {
    fadeFromBelow('.page-header-content');
  });

  useGSAP(() => {
    fadeFromOpacityScroll('#mission .container', '#mission');
  });

  return (
    <>
      {/* ==================== PAGE HEADER ==================== */}
      <section className="page-header" style={{ minHeight: '70vh' }}>
        <Image src={kidsImg} alt="Kids Ministry" fill className="hero-background" style={{ objectFit: 'cover' }} priority />
        <div className="hero-overlay"></div>
        <Link href={lp('/ministries')} className="btn-ghost btn-sm back-btn-hero" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
            <ArrowLeft size={16} />
            {t.common.backToMinistries}
          </Link>
        <div className="page-header-content">
          <span className="hero-eyebrow">{t.kids.headerEyebrow}</span>
          <h1 className="page-header-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            {t.kids.headerTitle}
          </h1>
          <p className="page-header-subtitle">{t.kids.headerSubtitle}</p>
        </div>
      </section>

      {/* ==================== MISSION ==================== */}
      <section className="section" id="mission">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">{t.kids.missionEyebrow}</span>
            <h2 className="section-title">{t.kids.missionTitle}</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p className="lead text-center mb-6">
              {t.kids.missionLead}
            </p>
            <p className="text-secondary text-center mb-4">
              {t.kids.missionText1}
            </p>
            <p className="text-secondary text-center">
              {t.kids.missionText2}
            </p>
          </div>
        </div>
      </section>

      {/* ==================== WHAT WE DO ==================== */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">{t.kids.wwdEyebrow}</span>
            <h2 className="section-title">{t.kids.wwdTitle}</h2>
          </div>

          <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="feature-card">
              <div className="feature-icon">
                <Heart />
              </div>
              <h4 className="feature-title">{t.kids.prayerTitle}</h4>
              <p className="feature-text">
                {t.kids.prayerText}
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <BookOpen />
              </div>
              <h4 className="feature-title">{t.kids.scriptureTitle}</h4>
              <p className="feature-text">
                {t.kids.scriptureText}
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Baby />
              </div>
              <h4 className="feature-title">{t.kids.funTitle}</h4>
              <p className="feature-text">
                {t.kids.funText}
              </p>
            </div>
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
              <h4 className="feature-title">{t.kids.whenTitle}</h4>
              <p className="feature-text">{t.kids.whenText}</p>
            </div>

            <div className="feature-card" style={{ textAlign: 'center' }}>
              <div className="feature-icon mx-auto">
                <MapPin />
              </div>
              <h4 className="feature-title">{t.kids.whereTitle}</h4>
              <p className="feature-text">{t.kids.whereText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="section section-brand" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="text-light mb-4">{t.kids.ctaTitle}</h2>
          <p className="lead text-light-muted mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            {t.kids.ctaText}
          </p>
          <a href="mailto:info@ignitechurch.be" className="btn-light btn-lg">
            {t.kids.ctaBtn}
          </a>
        </div>
      </section>
    </>
  );
}
