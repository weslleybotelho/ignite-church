'use client';
import Image from 'next/image';
import innerHealing from '../../../../img/inner-healing-bg.jpeg';
import { useGSAP } from '@gsap/react';
import { Heart, Sparkles, Shield, ArrowLeft, CheckCircle, BookOpen, MessageCircle, HandHeart } from 'lucide-react';
import Link from 'next/link';
import { fadeFromBelow, fadeFromOpacityScroll } from '@/app/utils/gsapAnimations';
import { useTranslation, useLocale } from '../../../../i18n/useTranslation';

export default function InnerHealing() {
  const t = useTranslation();
  const locale = useLocale();
  const lp = (href: string) => `/${locale}${href}`;

  const principles = [
    { title: t.innerhealing.forgivenessTitle, description: t.innerhealing.forgivenessDesc, icon: Heart },
    { title: t.innerhealing.confessionTitle, description: t.innerhealing.confessionDesc, icon: Shield },
    { title: t.innerhealing.liesTitle, description: t.innerhealing.liesDesc, icon: Sparkles },
    { title: t.innerhealing.healingTitle, description: t.innerhealing.healingDesc, icon: HandHeart },
  ];

  const sessionSteps = [
    { step: t.innerhealing.step1Title, description: t.innerhealing.step1Desc },
    { step: t.innerhealing.step2Title, description: t.innerhealing.step2Desc },
    { step: t.innerhealing.step3Title, description: t.innerhealing.step3Desc },
    { step: t.innerhealing.step4Title, description: t.innerhealing.step4Desc },
    { step: t.innerhealing.step5Title, description: t.innerhealing.step5Desc },
  ];
  useGSAP(() => {
    fadeFromBelow('.page-header-content');
  });

  useGSAP(() => {
    fadeFromOpacityScroll('#what .container', '#what');
  });

  return (
    <>
      {/* ==================== PAGE HEADER ==================== */}
      <section className="page-header" style={{ minHeight: '70vh' }}>
        <Image src={innerHealing} alt="Inner Healing Ministry" fill className="hero-background" style={{ objectFit: 'cover' }} priority />
        <div className="hero-overlay"></div>
        <Link href={lp('/ministries')} className="btn-ghost btn-sm back-btn-hero" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
            <ArrowLeft size={16} />
            {t.common.backToMinistries}
          </Link>
        <div className="page-header-content">
          <span className="hero-eyebrow">{t.innerhealing.headerEyebrow}</span>
          <h1 className="page-header-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            {t.innerhealing.headerTitle}
          </h1>
          <p className="page-header-subtitle">{t.innerhealing.headerSubtitle}</p>
        </div>
      </section>

      {/* ==================== WHAT IS INNER HEALING ==================== */}
      <section className="section" id="what">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">{t.innerhealing.whatEyebrow}</span>
            <h2 className="section-title">{t.innerhealing.whatTitle}</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <blockquote
              style={{
                background: 'var(--color-cream)',
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                borderLeft: '4px solid var(--color-brand)',
                marginBottom: '2rem',
                fontStyle: 'italic',
              }}>
              <p className="text-secondary mb-2">
                &ldquo;{t.innerhealing.whatQuote}&rdquo;
              </p>
              <cite style={{ fontWeight: 600, fontStyle: 'normal' }}>{t.innerhealing.whatQuoteCite}</cite>
            </blockquote>

            <p className="text-secondary mb-4">
              {t.innerhealing.whatText1}
            </p>
            <p className="text-secondary mb-4">
              {t.innerhealing.whatText2}
            </p>
            <p className="text-secondary">
              {t.innerhealing.whatText3}
            </p>
          </div>
        </div>
      </section>

      {/* ==================== WHAT IT'S NOT ==================== */}
      <section className="section section-cream">
        <div className="container">
          <div
            className="grid gap-12"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', maxWidth: '900px', margin: '0 auto' }}>
            <div>
              <h3 className="mb-6">
                {t.innerhealing.notTitle.replace(' Not', '')} {' '}
                <span
                  style={{
                    background: 'var(--color-secondary)',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                  }}>
                  Not
                </span>
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--color-brand)', fontWeight: 'bold' }}>✕</span>
                  <span className="text-secondary">{t.innerhealing.notItem1}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--color-brand)', fontWeight: 'bold' }}>✕</span>
                  <span className="text-secondary">{t.innerhealing.notItem2}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--color-brand)', fontWeight: 'bold' }}>✕</span>
                  <span className="text-secondary">{t.innerhealing.notItem3}</span>
                </div>
              </div>
              <p className="text-secondary mt-4" style={{ fontSize: '0.9rem' }}>
                {t.innerhealing.notDisclaimer}
              </p>
            </div>

            <div>
              <h3 className="mb-6">{t.innerhealing.principlesTitle}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {principles.map((principle, index) => {
                  const IconComponent = principle.icon;
                  return (
                    <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <div style={{ color: 'var(--color-brand)', minWidth: '24px' }}>
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <strong>{principle.title}:</strong> <span className="text-secondary">{principle.description}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOW SESSIONS WORK ==================== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">{t.innerhealing.sessionsEyebrow}</span>
            <h2 className="section-title">{t.innerhealing.sessionsTitle}</h2>
          </div>

          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            {sessionSteps.map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  marginBottom: '1.5rem',
                  paddingBottom: '1.5rem',
                  borderBottom: index < sessionSteps.length - 1 ? '1px solid var(--color-border)' : 'none',
                }}>
                <div
                  style={{
                    background: 'var(--color-brand)',
                    color: 'white',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    minWidth: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                  }}>
                  {index + 1}
                </div>
                <div>
                  <h4 style={{ marginBottom: '0.5rem' }}>{item.step}</h4>
                  <p className="text-secondary" style={{ margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <div className="feature-icon mx-auto mb-6" style={{ background: 'rgba(232, 90, 36, 0.2)', width: '80px', height: '80px' }}>
            <HandHeart size={36} />
          </div>
          <h2 className="text-light mb-4">{t.innerhealing.ctaTitle}</h2>
          <p className="lead text-light-muted mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            {t.innerhealing.ctaText}
          </p>
          <a href="mailto:info@ignitechurch.be" className="btn-primary btn-lg">
            {t.innerhealing.ctaBtn}
          </a>
        </div>
      </section>
    </>
  );
}
