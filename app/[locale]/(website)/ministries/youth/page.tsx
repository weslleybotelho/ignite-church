'use client';
import Image from 'next/image';
import heroYouth from '../../../../img/hero-youth.webp';
import youth1 from '../../../../img/youth1.webp';
import { useGSAP } from '@gsap/react';
import { Calendar, MapPin, Clock, ArrowLeft, Users } from 'lucide-react';
import Link from 'next/link';
import { fadeFromBelow, fadeFromOpacityScroll, slideFromLeftScroll, slideFromRightScroll } from '@/app/utils/gsapAnimations';
import { useTranslation, useLocale } from '../../../../i18n/useTranslation';

export default function Youth() {
  const t = useTranslation();
  const locale = useLocale();
  const lp = (href: string) => `/${locale}${href}`;
  useGSAP(() => {
    fadeFromBelow('.page-header-content');
  });

  useGSAP(() => {
    fadeFromOpacityScroll('#about .container', '#about');
    slideFromLeftScroll('#details .two-col', '#details');
  });

  return (
    <>
      {/* ==================== PAGE HEADER ==================== */}
      <section className="page-header" style={{ minHeight: '70vh' }}>
        <Image src={heroYouth} alt="Youth Ministry" fill className="hero-background" style={{ objectFit: 'cover' }} priority />
        <div className="hero-overlay"></div>
        <div className="page-header-content">
          <span className="hero-eyebrow">{t.youth.headerEyebrow}</span>
          <h1 className="page-header-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            {t.youth.headerTitle}
          </h1>
          <p className="page-header-subtitle">{t.youth.headerSubtitle}</p>
          <Link href={lp('/ministries')} className="btn-ghost btn-sm" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)', marginTop: '1.5rem', display: 'inline-block' }}>
            <ArrowLeft size={16} />
            {t.common.backToMinistries}
          </Link>
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section className="section" id="about">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">{t.youth.aboutEyebrow}</span>
            <h2 className="section-title">{t.youth.aboutTitle}</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p className="lead text-center mb-6">
              {t.youth.aboutLead}
            </p>
            <p className="text-secondary text-center">
              {t.youth.aboutText}
            </p>
          </div>
        </div>
      </section>

      {/* ==================== DETAILS ==================== */}
      <section className="section section-cream" id="details">
        <div className="container">
          <div className="two-col">
            <div className="image-frame">
              <Image
                src={youth1}
                alt="Youth Ministry gathering"
                width={500}
                height={400}
                className="image-rounded image-shadow"
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
            <div>
              <h3 className="mb-4">{t.youth.detailsTitle}</h3>
              <p className="text-secondary mb-6">
                {t.youth.detailsText}
              </p>

              <div className="grid gap-4" style={{ gridTemplateColumns: '1fr 1fr' }}>
                <div className="feature-card" style={{ padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <Calendar size={20} className="text-brand" />
                    <h5 style={{ margin: 0 }}>{t.youth.whenLabel}</h5>
                  </div>
                  <p className="text-secondary" style={{ margin: 0, fontSize: '0.9rem' }}>
                    {t.youth.whenText}
                  </p>
                </div>
                <div className="feature-card" style={{ padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <MapPin size={20} className="text-brand" />
                    <h5 style={{ margin: 0 }}>{t.youth.whereLabel}</h5>
                  </div>
                  <p className="text-secondary" style={{ margin: 0, fontSize: '0.9rem' }}>
                    {t.youth.whereText}
                  </p>
                </div>
              </div>
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
          <h2 className="text-light mb-4">{t.youth.ctaTitle}</h2>
          <p className="lead text-light-muted mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            {t.youth.ctaText}
          </p>
          <a href="mailto:info@ignitechurch.be" className="btn-primary btn-lg">
            {t.youth.ctaBtn}
          </a>
        </div>
      </section>
    </>
  );
}
