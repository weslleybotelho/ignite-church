'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { Heart, Music, Sparkles, Users, MapPin, Play, ArrowRight } from 'lucide-react';
import AboutIgniteImg from '../../img/about-ignite2.png';
import IsmImg from '../../img/school-design.jpg';
import {
  fadeFromBelow,
  fadeFromBelowScroll,
  fadeFromOpacityScroll,
  slideFromLeftScroll,
} from '../../utils/gsapAnimations';
import SliderImages from '../../components/Sliderv2/slider';
import { useTranslation, useLocale } from '../../i18n/useTranslation';

interface Announcement {
  id: number;
  title: string;
  image_url: string;
  link_url?: string;
}

export default function HomeClient() {
  const t = useTranslation();
  const locale = useLocale();
  const lp = (href: string) => `/${locale}${href}`;
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    fetch('/api/announcements')
      .then((r) => r.json())
      .then((data) => { if (Array.isArray(data)) setAnnouncements(data); })
      .catch(console.error);
  }, []);

  useGSAP(() => {
    fadeFromBelow('#hero .hero-content');
  });

  useGSAP(() => {
    fadeFromBelowScroll('#announcement .section-header', '#announcement');
    slideFromLeftScroll('#about .two-col', '#about');
    fadeFromOpacityScroll('#ministries .grid', '#ministries');
    fadeFromBelowScroll('#ism .two-col', '#ism');
  });

  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section className="hero" id="hero">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="/bg-hero.png" 
          className="hero-video"
        >
          <source src="https://pub-77383fbe3b1e4aa7845b78670fb0f016.r2.dev/hero-video-v2.mp4" type="video/mp4" />
          <source src="https://pub-77383fbe3b1e4aa7845b78670fb0f016.r2.dev/hero-video-v2.webm" type="video/webm" />
        </video>
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <span className="hero-eyebrow">{t.home.heroEyebrow}</span>
          <h1 className="hero-title">
            {t.home.heroTitleLine1}<br />
            <span className="text-gradient">{t.home.heroTitleLine2}</span>
          </h1>
          <p className="hero-subtitle">
            {t.home.heroSubtitle}
          </p>
          <div className="btn-group justify-center">
            <Link href="https://maps.app.goo.gl/QrMxLi79z9gTyGBg9" target="_blank" className="btn-primary btn-lg btn-arrow">
              <MapPin size={20} />
              {t.home.heroBtnVisit}
            </Link>
            <Link href="https://www.youtube.com/@ignitechurchbrussels/streams" target="_blank" className="btn-outline-light btn-lg">
              <Play size={20} />
              {t.home.heroBtnWatch}
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute" style={{ bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}>
          <div className="animate-bounce" style={{ color: 'rgba(255,255,255,0.6)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </div>
        </div>
      </section>

      {/* ==================== ANNOUNCEMENTS ==================== */}
      {announcements.length > 0 && (
        <section className="section section-cream" id="announcement">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">{t.home.announcementsEyebrow}</span>
              <h2 className="section-title">{t.home.announcementsTitle}</h2>
              <p className="section-subtitle">
                {t.home.announcementsSubtitle}
              </p>
            </div>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <SliderImages announcements={announcements} />
            </div>
          </div>
        </section>
      )}

      {/* ==================== ABOUT SECTION ==================== */}
      <section className="section" id="about">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow mb-4">{t.home.aboutEyebrow}</span>
              <h2 className="mb-4">
                {t.home.aboutTitleLine1}<br />
                <span className="text-gradient">{t.home.aboutTitleLine2}</span>
              </h2>
              <p className="lead mb-6">
                {t.home.aboutLead}
              </p>
              <p className="text-secondary mb-6">
                {t.home.aboutText}
              </p>
              <Link href={lp('/about-ignite')} className="btn-primary btn-arrow">
                {t.home.aboutBtn}
              </Link>
            </div>
            <div className="image-frame">
              <Image 
                src={AboutIgniteImg} 
                alt={t.home.aboutAlt} 
                className="image-rounded image-shadow"
                width={560} 
                height={460}
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MINISTRIES SECTION ==================== */}
      <section className="section section-dark" id="ministries">
        <div className="container">
          <div className="flex-between mb-12" style={{ flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="eyebrow-light mb-3">{t.home.ministriesEyebrow}</span>
              <h2 className="text-light">{t.home.ministriesTitle}</h2>
            </div>
            <Link href={lp('/ministries')} className="btn-outline-light">
              {t.home.ministriesBtnAll} <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-4 gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {/* Inner Healing Card */}
            <div className="feature-card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="feature-icon" style={{ background: 'rgba(232, 90, 36, 0.2)' }}>
                <Heart />
              </div>
              <h4 className="feature-title text-light">{t.home.ministryInnerHealingTitle}</h4>
              <p className="feature-text text-light-muted">
                {t.home.ministryInnerHealingText}
              </p>
              <Link href={lp('/ministries/innerhealing')} className="btn-ghost mt-4" style={{ color: '#F4A261' }}>
                {t.common.learnMore} <ArrowRight size={16} />
              </Link>
            </div>

            {/* Youth Card */}
            <div className="feature-card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="feature-icon" style={{ background: 'rgba(232, 90, 36, 0.2)' }}>
                <Sparkles />
              </div>
              <h4 className="feature-title text-light">{t.home.ministryYouthTitle}</h4>
              <p className="feature-text text-light-muted">
                {t.home.ministryYouthText}
              </p>
              <Link href={lp('/ministries/youth')} className="btn-ghost mt-4" style={{ color: '#F4A261' }}>
                {t.common.learnMore} <ArrowRight size={16} />
              </Link>
            </div>

            {/* Worship Card */}
            <div className="feature-card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="feature-icon" style={{ background: 'rgba(232, 90, 36, 0.2)' }}>
                <Music />
              </div>
              <h4 className="feature-title text-light">{t.home.ministryWorshipTitle}</h4>
              <p className="feature-text text-light-muted">
                {t.home.ministryWorshipText}
              </p>
              <Link href={lp('/ministries/worship')} className="btn-ghost mt-4" style={{ color: '#F4A261' }}>
                {t.common.learnMore} <ArrowRight size={16} />
              </Link>
            </div>

            {/* Home Groups Card */}
            <div className="feature-card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="feature-icon" style={{ background: 'rgba(232, 90, 36, 0.2)' }}>
                <Users />
              </div>
              <h4 className="feature-title text-light">{t.home.ministryHomeGroupsTitle}</h4>
              <p className="feature-text text-light-muted">
                {t.home.ministryHomeGroupsText}
              </p>
              <Link href={lp('/ministries/homegroup')} className="btn-ghost mt-4" style={{ color: '#F4A261' }}>
                {t.common.learnMore} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SCHOOL OF MINISTRY ==================== */}
      <section className="section" id="ism">
        <div className="container">
          <div className="two-col-reverse">
            <div className="text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span className="eyebrow mb-4">{t.home.ismEyebrow}</span>
              <h2 className="mb-4">
                {t.home.ismTitleLine1}<br />
                <span className="text-gradient">{t.home.ismTitleLine2}</span><br />
                {t.home.ismTitleLine3}
              </h2>
              <p className="lead mb-6" style={{ maxWidth: '500px' }}>
                &ldquo;{t.home.ismQuote}&rdquo;
              </p>
              <a href="https://www.igniteschoolofministry.com/" target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg btn-arrow">
                {t.home.ismBtn}
              </a>
            </div>
            <div>
              <Image 
                src={IsmImg} 
                alt={t.home.ismAlt}
                className="image-rounded image-shadow"
                width={500}
                height={540}
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                quality={100}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="text-light mb-4">{t.home.ctaTitle}</h2>
          <p className="lead text-light-muted mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#d95916' }}>
            {t.home.ctaSubtitle}
          </p>
          <div className="btn-group justify-center">
            <Link href="https://maps.app.goo.gl/QrMxLi79z9gTyGBg9" target="_blank" className="btn-primary btn-lg">
              <MapPin size={20} />
              {t.home.ctaBtnDirections}
            </Link>
            <Link href={lp('/about-ignite')} className="btn-outline-light btn-lg">
              {t.home.ctaBtnLearnMore}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
