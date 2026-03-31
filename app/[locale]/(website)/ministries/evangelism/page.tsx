'use client';
import Image from 'next/image';
import evangelismImg from '../../../../img/evangelism_bg.webp';
import { useGSAP } from '@gsap/react';
import { Heart, Calendar, MapPin, Gift, Users, Utensils, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { fadeFromBelow, fadeFromOpacityScroll } from '@/app/utils/gsapAnimations';
import { useTranslation, useLocale } from '../../../../i18n/useTranslation';

export default function Evangelism() {
  const t = useTranslation();
  const locale = useLocale();
  const lp = (href: string) => `/${locale}${href}`;

  const activities = [
    {
      title: t.evangelism.trainingTitle,
      description: t.evangelism.trainingDesc,
      icon: Users,
    },
    {
      title: t.evangelism.christmasTitle,
      description: t.evangelism.christmasDesc,
      icon: Utensils,
    },
    {
      title: t.evangelism.valentinesTitle,
      description: t.evangelism.valentinesDesc,
      icon: Gift,
    },
  ];
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
        <Image src={evangelismImg} alt="Evangelism Ministry" fill className="hero-background" style={{ objectFit: 'cover' }} priority />
        <div className="hero-overlay"></div>
        <Link href={lp('/ministries')} className="btn-ghost btn-sm back-btn-hero" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
            <ArrowLeft size={16} />
            {t.common.backToMinistries}
          </Link>
        <div className="page-header-content">
          <span className="hero-eyebrow">{t.evangelism.headerEyebrow}</span>
          <h1 className="page-header-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            {t.evangelism.headerTitle}
          </h1>
          <p className="page-header-subtitle">{t.evangelism.headerSubtitle}</p>
        </div>
      </section>

      {/* ==================== MISSION ==================== */}
      <section className="section" id="mission">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">{t.evangelism.missionEyebrow}</span>
            <h2 className="section-title">{t.evangelism.missionTitle}</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p className="lead text-center mb-6">
              {t.evangelism.missionLead}
            </p>
            <p className="text-secondary text-center">
              {t.evangelism.missionText}
            </p>
          </div>
        </div>
      </section>

      {/* ==================== ACTIVITIES ==================== */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">{t.evangelism.activitiesEyebrow}</span>
            <h2 className="section-title">{t.evangelism.activitiesTitle}</h2>
          </div>

          <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {activities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <div className="feature-card" key={index}>
                  <div className="feature-icon">
                    <IconComponent />
                  </div>
                  <h4 className="feature-title">{activity.title}</h4>
                  <p className="feature-text">{activity.description}</p>
                </div>
              );
            })}
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
              <h4 className="feature-title">{t.evangelism.whenTitle}</h4>
              <p className="feature-text">{t.evangelism.whenText}</p>
            </div>

            <div className="feature-card" style={{ textAlign: 'center' }}>
              <div className="feature-icon mx-auto">
                <MapPin />
              </div>
              <h4 className="feature-title">{t.evangelism.whereTitle}</h4>
              <p className="feature-text">{t.evangelism.whereText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <div className="feature-icon mx-auto mb-6" style={{ background: 'rgba(232, 90, 36, 0.2)', width: '80px', height: '80px' }}>
            <Heart size={36} />
          </div>
          <h2 className="text-light mb-4">{t.evangelism.ctaTitle}</h2>
          <p className="lead text-light-muted mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            {t.evangelism.ctaText}
          </p>
          <a href="mailto:info@ignitechurch.be" className="btn-primary btn-lg">
            {t.evangelism.ctaBtn}
          </a>
        </div>
      </section>
    </>
  );
}
