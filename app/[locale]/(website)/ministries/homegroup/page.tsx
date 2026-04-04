'use client';
import Image from 'next/image';
import heroImg from '../../../../img/hero-homegroup.webp';
import homeGroup2Img from '../../../../img/homegroup2.webp';
import { useGSAP } from '@gsap/react';
import { Home, Calendar, MapPin, Heart, Users, ArrowLeft, Mail } from 'lucide-react';
import Link from 'next/link';
import { fadeFromBelow, slideFromLeftScroll, slideFromRightScroll } from '@/app/utils/gsapAnimations';
import { useTranslation, useLocale } from '../../../../i18n/useTranslation';

export default function HomeGroup() {
  const t = useTranslation();
  const locale = useLocale();
  const lp = (href: string) => `/${locale}${href}`;
  useGSAP(() => {
    fadeFromBelow('.page-header-content');
  });

  useGSAP(() => {
    slideFromLeftScroll('#story .two-col', '#story');
    slideFromRightScroll('#community .two-col', '#community');
  });

  return (
    <>
      {/* ==================== PAGE HEADER ==================== */}
      <section className="page-header" style={{ minHeight: '70vh' }}>
        <Image src={heroImg} alt="Home Groups" fill className="hero-background" style={{ objectFit: 'cover' }} priority />
        <div className="hero-overlay"></div>
        <div className="page-header-content">
          <span className="hero-eyebrow">{t.homegroup.headerEyebrow}</span>
          <h1 className="page-header-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            {t.homegroup.headerTitle}
          </h1>
          <p className="page-header-subtitle">{t.homegroup.headerSubtitle}</p>
          <Link href={lp('/ministries')} className="btn-ghost btn-sm" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)', marginTop: '1.5rem', display: 'inline-block' }}>
            <ArrowLeft size={16} />
            {t.common.backToMinistries}
          </Link>
        </div>
      </section>

      {/* ==================== STORY ==================== */}
      <section className="section" id="story">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow mb-4">{t.homegroup.storyEyebrow}</span>
              <h2 className="mb-4">{t.homegroup.storyTitle}</h2>
              <p className="text-secondary mb-4">
                {t.homegroup.storyText1}
              </p>
              <p className="text-secondary">
                {t.homegroup.storyText2}
              </p>
            </div>
            <div className="image-frame">
              <Image
                src={homeGroup2Img}
                alt="Home group gathering"
                width={500}
                height={400}
                className="image-rounded image-shadow"
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== COMMUNITY ==================== */}
      <section className="section section-cream" id="community">
        <div className="container">
          <div className="two-col">
            <div
              style={{
                background: 'var(--color-secondary)',
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                color: 'white',
              }}>
              <h3 className="text-light mb-4">{t.homegroup.communityCardTitle}</h3>
              <p className="text-light-muted" style={{ fontStyle: 'italic', lineHeight: '1.8' }}>
                {t.homegroup.communityCardQuote}
              </p>
              <p className="text-light-muted mt-4" style={{ fontSize: '0.9rem' }}>
                {t.homegroup.communityCardCite}
              </p>
            </div>
            <div>
              <span className="eyebrow mb-4">{t.homegroup.communityEyebrow}</span>
              <h3 className="mb-4">{t.homegroup.communityTitle}</h3>
              <p className="text-secondary mb-4">
                {t.homegroup.communityText1}
              </p>
              <p className="text-secondary">
                {t.homegroup.communityText2}
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
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', maxWidth: '900px', margin: '0 auto' }}>
            <div className="feature-card" style={{ textAlign: 'center' }}>
              <div className="feature-icon mx-auto">
                <Calendar />
              </div>
              <h4 className="feature-title">{t.homegroup.whenTitle}</h4>
              <p className="feature-text">{t.homegroup.whenText}</p>
            </div>

            <div className="feature-card" style={{ textAlign: 'center' }}>
              <div className="feature-icon mx-auto">
                <MapPin />
              </div>
              <h4 className="feature-title">{t.homegroup.whereTitle}</h4>
              <p className="feature-text">{t.homegroup.whereText}</p>
            </div>

            <div className="feature-card" style={{ textAlign: 'center' }}>
              <div className="feature-icon mx-auto">
                <Mail />
              </div>
              <h4 className="feature-title">{t.homegroup.infoTitle}</h4>
              <a href="mailto:ignitechurchbrussels@gmail.com" className="text-brand" style={{ fontSize: '0.9rem' }}>
                ignitechurchbrussels@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <div className="feature-icon mx-auto mb-6" style={{ background: 'rgba(232, 90, 36, 0.2)', width: '80px', height: '80px' }}>
            <Home size={36} />
          </div>
          <h2 className="text-light mb-4">{t.homegroup.ctaTitle}</h2>
          <p className="lead text-light-muted mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            {t.homegroup.ctaText}
          </p>
          <a href="mailto:ignitechurchbrussels@gmail.com" className="btn-primary btn-lg">
            {t.homegroup.ctaBtn}
          </a>
        </div>
      </section>
    </>
  );
}
