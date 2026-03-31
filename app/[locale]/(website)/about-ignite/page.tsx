'use client';
import Image from 'next/image';
import Link from 'next/link';
import aboutHero from '../../../img/about-hero3.jpg';
import aboutImg1 from '../../../img/about-image1.jpg';
import coreValuesImg from '../../../img/core-values.png';
import { useGSAP } from '@gsap/react';
import { MapPin, Target, Sparkles, Zap, Users, Heart } from 'lucide-react';
import { fadeFromBelow, fadeFromOpacityScroll, slideFromLeftScroll, slideFromRightScroll } from '../../../utils/gsapAnimations';
import { useTranslation, useLocale } from '../../../i18n/useTranslation';

export default function About() {
  const t = useTranslation();
  const locale = useLocale();
  useGSAP(() => {
    fadeFromBelow('.page-header-content');
  });

  useGSAP(() => {
    fadeFromOpacityScroll('#story .container', '#story');
    slideFromLeftScroll('#pastors .two-col', '#pastors');
    slideFromRightScroll('#values .grid', '#values');
  });

  return (
    <>
      {/* ==================== PAGE HEADER ==================== */}
      <section className="page-header" style={{ minHeight: '70vh' }}>
        <Image src={aboutHero} alt="About Ignite Church" fill className="hero-background" style={{ objectFit: 'cover' }} priority />
        <div className="hero-overlay"></div>
        <div className="page-header-content">
          <span className="hero-eyebrow">{t.about.headerEyebrow}</span>
          <h1 className="page-header-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            {t.about.headerTitle}
          </h1>
          <p className="page-header-subtitle">{t.about.headerSubtitle}</p>
        </div>
      </section>

      {/* ==================== OUR STORY ==================== */}
      <section className="section" id="story">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">{t.about.storyEyebrow}</span>
            <h2 className="section-title">{t.about.storyTitle}</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p className="lead text-center mb-6">
              {t.about.storyLead}
            </p>
            <p className="text-secondary text-center">
              {t.about.storyText}
            </p>
          </div>
        </div>
      </section>

      {/* ==================== PASTOR SECTION ==================== */}
      <section className="section section-cream" id="pastors">
        <div className="container">
          <span className="eyebrow mb-6">{t.about.pastorEyebrow}</span>
          <div className="two-col">
            <div className="image-frame">
              <Image
                src={aboutImg1}
                alt={t.about.pastorAlt}
                className="image-rounded image-shadow"
                width={500}
                height={540}
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
            <div>
              <h2 className="mb-4">{t.about.pastorTitle}</h2>
              <p className="text-secondary mb-4">
                {t.about.pastorText1}
              </p>
              <p className="text-secondary mb-4">
                {t.about.pastorText2}
              </p>
              <p className="text-secondary">
                {t.about.pastorText3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VISION & MISSION ==================== */}
      <section className="section section-dark" id="vision-mission">
        <div className="container">
          <div className="grid gap-12" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <div className="text-center">
              <div className="feature-icon mx-auto mb-6" style={{ background: 'rgba(232, 90, 36, 0.2)', width: '80px', height: '80px' }}>
                <Target size={36} />
              </div>
              <h3 className="text-light mb-4">{t.about.visionTitle}</h3>
              <p className="text-light-muted">{t.about.visionText}</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto mb-6" style={{ background: 'rgba(232, 90, 36, 0.2)', width: '80px', height: '80px' }}>
                <Sparkles size={36} />
              </div>
              <h3 className="text-light mb-4">{t.about.missionTitle}</h3>
              <p className="text-light-muted">
                {t.about.missionText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CORE VALUES ==================== */}
      <section className="section" id="values">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">{t.about.valuesEyebrow}</span>
            <h2 className="section-title">{t.about.valuesTitle}</h2>
            <p className="section-subtitle">
              {t.about.valuesSubtitle}
            </p>
          </div>

          <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {/* Presence */}
            <div className="feature-card">
              <div className="feature-icon">
                <MapPin />
              </div>
              <h4 className="feature-title">{t.about.pillarPresenceTitle}</h4>
              <p className="feature-text">
                {t.about.pillarPresenceText}
              </p>
            </div>

            {/* Power */}
            <div className="feature-card">
              <div className="feature-icon">
                <Zap />
              </div>
              <h4 className="feature-title">{t.about.pillarPowerTitle}</h4>
              <p className="feature-text">
                {t.about.pillarPowerText}
              </p>
            </div>

            {/* Purity */}
            <div className="feature-card">
              <div className="feature-icon">
                <Sparkles />
              </div>
              <h4 className="feature-title">{t.about.pillarPurityTitle}</h4>
              <p className="feature-text">
                {t.about.pillarPurityText}
              </p>
            </div>

            {/* People */}
            <div className="feature-card">
              <div className="feature-icon">
                <Users />
              </div>
              <h4 className="feature-title">{t.about.pillarPeopleTitle}</h4>
              <p className="feature-text">
                {t.about.pillarPeopleText}
              </p>
            </div>

            {/* Purpose */}
            <div className="feature-card">
              <div className="feature-icon">
                <Heart />
              </div>
              <h4 className="feature-title">{t.about.pillarPurposeTitle}</h4>
              <p className="feature-text">
                {t.about.pillarPurposeText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="text-light mb-4">{t.about.ctaTitle}</h2>
          <p className="lead text-light-muted mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            {t.about.ctaSubtitle}
          </p>
          <Link href={`/${locale}/locations`} className="btn-primary btn-lg">
            <MapPin size={20} />
            {t.about.ctaBtn}
          </Link>
        </div>
      </section>
    </>
  );
}
