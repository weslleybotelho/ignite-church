'use client';
import Image from 'next/image';
import giveHero from '../../../img/give-background.png';
import { useGSAP } from '@gsap/react';
import { Heart, CreditCard, Building, Landmark, Gift, ArrowRight, Home } from 'lucide-react';
import Link from 'next/link';
import { fadeFromBelow, fadeFromOpacityScroll, slideFromLeftScroll } from '../../../utils/gsapAnimations';
import { useTranslation, useLocale } from '../../../i18n/useTranslation';

export default function Give() {
  const t = useTranslation();
  const locale = useLocale();
  const lp = (href: string) => `/${locale}${href}`;

  useGSAP(() => {
    fadeFromBelow('.page-header-content');
  });

  useGSAP(() => {
    fadeFromOpacityScroll('#why .container', '#why');
    slideFromLeftScroll('#ways .container', '#ways');
  });

  return (
    <>
      {/* ==================== PAGE HEADER ==================== */}
      <section className="page-header" style={{ minHeight: '60vh' }}>
        <Image src={giveHero} alt="Give - Tithe and Offering" fill className="hero-background" style={{ objectFit: 'cover' }} priority />
        <div className="hero-overlay"></div>
        <div className="page-header-content">
          <span className="hero-eyebrow">{t.give.headerEyebrow}</span>
          <h1 className="page-header-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            {t.give.headerTitle}
          </h1>
          <p className="page-header-subtitle">{t.give.headerSubtitle}</p>
        </div>
      </section>

      {/* ==================== WHY WE GIVE ==================== */}
      <section className="section" id="why">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow mb-4">{t.give.whyEyebrow}</span>
              <h2 className="mb-4">{t.give.whyTitle}</h2>
              <p className="text-secondary mb-4">
                {t.give.whyText1}
              </p>
              <p className="text-secondary mb-4">
                {t.give.whyText2}
              </p>
              <p className="text-secondary">
                {t.give.whyText3}
              </p>
            </div>
            <div>
              <blockquote
                style={{
                  background: 'var(--color-cream)',
                  padding: '2rem',
                  borderRadius: 'var(--radius-lg)',
                  borderLeft: '4px solid var(--color-brand)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <p className="lead" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                  &ldquo;{t.give.whyQuote}&rdquo;
                </p>
                <cite style={{ fontWeight: 600, color: 'var(--color-brand)' }}>{t.give.whyQuoteCite}</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WAYS TO GIVE ==================== */}
      <section className="section section-cream" id="ways">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">{t.give.waysEyebrow}</span>
            <h2 className="section-title">{t.give.waysTitle}</h2>
            <p className="section-subtitle">{t.give.waysSubtitle}</p>
          </div>

          <div
            className="grid gap-8"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', maxWidth: '800px', margin: '0 auto' }}>
            {/* Bank Transfer */}
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div className="feature-icon mx-auto mb-4" style={{ width: '64px', height: '64px' }}>
                <Landmark size={28} />
              </div>
              <h3 className="mb-4">{t.give.bankTitle}</h3>
              <div style={{ background: 'var(--color-cream)', padding: '1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>
                <p className="text-secondary" style={{ marginBottom: '0.5rem' }}>
                  {t.give.bankName}
                </p>
                <p style={{ fontWeight: 700, fontSize: '1.1rem', fontFamily: 'monospace' }}>{t.give.bankIban}</p>
              </div>
              <p className="text-secondary" style={{ fontSize: '0.9rem' }}>
                {t.give.bankDescription}
              </p>
            </div>

            {/* Online Giving */}
            <div className="card" style={{ padding: '2rem', textAlign: 'center', border: '2px solid var(--color-brand)' }}>
              <div className="feature-icon mx-auto mb-4" style={{ width: '64px', height: '64px', background: 'var(--color-brand)' }}>
                <CreditCard size={28} color="white" />
              </div>
              <h3 className="mb-4">{t.give.onlineTitle}</h3>
              <p className="text-secondary mb-6">
                {t.give.onlineText}
              </p>
              <a
                href="https://donate.stripe.com/28oeVM4Ym27969q006"
                target="_blank"
                className="btn-primary btn-lg"
                style={{ width: '100%', justifyContent: 'center' }}>
                {t.give.onlineBtn}
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BUILDING FUND ==================== */}
      {/*
      <section className="section section-dark">
        <div className="container">
          <div className="two-col" style={{ alignItems: 'center' }}>
            <div>
              <span className="eyebrow mb-4" style={{ color: 'var(--color-brand)' }}>
                {t.give.buildingEyebrow}
              </span>
              <h2 className="text-light mb-4">{t.give.buildingTitle}</h2>
              <p className="text-light-muted mb-4">
                {t.give.buildingText1}
              </p>
              <p className="text-light-muted mb-6">
                {t.give.buildingText2}
              </p>
              <a href="https://donate.stripe.com/dR63d476ucLN41i00a" target="_blank" className="btn-primary btn-lg">
                <Gift size={20} />
                {t.give.buildingBtn}
              </a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  background: 'rgba(232, 90, 36, 0.15)',
                  borderRadius: '50%',
                  width: '280px',
                  height: '280px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Home size={100} color="var(--color-brand)" />
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* ==================== CHEERFUL GIVER ==================== */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="feature-icon mx-auto mb-6" style={{ width: '80px', height: '80px' }}>
            <Heart size={36} />
          </div>
          <h3 className="mb-4">{t.give.cheerfulTitle}</h3>
          <p className="text-secondary mb-6" style={{ maxWidth: '600px', margin: '0 auto 1.5rem' }}>
            &ldquo;{t.give.cheerfulQuote}&rdquo;
          </p>
          <p className="text-secondary" style={{ fontWeight: 600 }}>
            {t.give.cheerfulCite}
          </p>
        </div>
      </section>

      {/* ==================== SUPPORTERS CTA ==================== */}
      <section className="section section-brand" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="text-light mb-4" style={{ color: 'var(--color-brand)' }}>{t.give.supportersCtaTitle}</h2>
          <p className="lead text-light-muted mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            {t.give.supportersCtaText}
          </p>
          <Link href={lp('/supporters')} className="btn-light btn-lg">
            {t.give.supportersCtaBtn}
          </Link>
        </div>
      </section>
    </>
  );
}
