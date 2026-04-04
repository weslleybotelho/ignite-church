'use client';
import Image from 'next/image';
import heroImg from '../../../../img/music.jpg';
import school1 from '../../../../img/worship1-min.webp';
import school2 from '../../../../img/worship2-min.webp';
import { useGSAP } from '@gsap/react';
import { Music, Heart, MessageCircle, Lightbulb, Shield, HandHeart, Star, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { fadeFromBelow, fadeFromOpacityScroll, slideFromLeftScroll } from '../../../../utils/gsapAnimations';
import { useTranslation, useLocale } from '../../../../i18n/useTranslation';

export default function Worship() {
  const t = useTranslation();
  const locale = useLocale();
  const lp = (href: string) => `/${locale}${href}`;

  const values = [
    { title: t.worship.presenceTitle, description: t.worship.presenceDesc, icon: Heart },
    { title: t.worship.collaborationTitle, description: t.worship.collaborationDesc, icon: MessageCircle },
    { title: t.worship.flexibilityTitle, description: t.worship.flexibilityDesc, icon: Lightbulb },
    { title: t.worship.accountabilityTitle, description: t.worship.accountabilityDesc, icon: Shield },
    { title: t.worship.purityTitle, description: t.worship.purityDesc, icon: Star },
    { title: t.worship.prayerTitle, description: t.worship.prayerDesc, icon: HandHeart },
  ];
  useGSAP(() => {
    fadeFromBelow('.page-header-content');
  });

  useGSAP(() => {
    slideFromLeftScroll('#vision .two-col', '#vision');
    fadeFromOpacityScroll('#values .grid', '#values');
  });

  return (
    <>
      {/* ==================== PAGE HEADER ==================== */}
      <section className="page-header" style={{ minHeight: '70vh' }}>
        <Image src={heroImg} alt="Ignite Worship" fill className="hero-background" style={{ objectFit: 'cover' }} priority />
        <div className="hero-overlay"></div>
        <div className="page-header-content">
          <span className="hero-eyebrow">{t.worship.headerEyebrow}</span>
          <h1 className="page-header-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            {t.worship.headerTitle}
          </h1>
          <p className="page-header-subtitle">{t.worship.headerSubtitle}</p>
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
            <div className="image-frame">
              <Image
                src={school1}
                alt="Worship team leading"
                width={500}
                height={400}
                className="image-rounded image-shadow"
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
            <div>
              <span className="eyebrow mb-4">{t.worship.visionEyebrow}</span>
              <h2 className="mb-4">{t.worship.visionTitle}</h2>
              <p className="lead mb-4">
                {t.worship.visionLead}
              </p>
              <p className="text-secondary">
                {t.worship.visionText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VALUES ==================== */}
      <section className="section section-cream" id="values">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">{t.worship.valuesEyebrow}</span>
            <h2 className="section-title">{t.worship.valuesTitle}</h2>
            <p className="section-subtitle">{t.worship.valuesSubtitle}</p>
          </div>

          <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div className="feature-card" key={index}>
                  <div className="feature-icon">
                    <IconComponent />
                  </div>
                  <h4 className="feature-title">{value.title}</h4>
                  <p className="feature-text">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== GALLERY ==================== */}
      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow mb-4">{t.worship.excellenceEyebrow}</span>
              <h3 className="mb-4">{t.worship.excellenceTitle}</h3>
              <p className="text-secondary mb-4">
                {t.worship.excellenceText1}
              </p>
              <p className="text-secondary">
                {t.worship.excellenceText2}
              </p>
            </div>
            <div className="image-frame">
              <Image
                src={school2}
                alt="Worship team practice"
                width={500}
                height={400}
                className="image-rounded image-shadow"
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <div className="feature-icon mx-auto mb-6" style={{ background: 'rgba(232, 90, 36, 0.2)', width: '80px', height: '80px' }}>
            <Music size={36} />
          </div>
          <h2 className="text-light mb-4">{t.worship.ctaTitle}</h2>
          <p className="lead text-light-muted mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            {t.worship.ctaText}
          </p>
          <a href="mailto:info@ignitechurch.be" className="btn-primary btn-lg">
            {t.worship.ctaBtn}
          </a>
        </div>
      </section>
    </>
  );
}
