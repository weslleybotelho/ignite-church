'use client';
import Image from 'next/image';
import evangelismImg from '../../../img/evangelism.jpg';
import innerHealingImg from '../../../img/inner-healing.jpg';
import schoolImg from '../../../img/school.jpg';
import musicImg from '../../../img/music.jpg';
import homeGroupImg from '../../../img/homegroup.jpg';
import womenImg from '../../../img/women.jpg';
import kidsMinistry from '../../../img/kidsministry.jpg';
import youthMinistry from '../../../img/hero-youth.webp';
import Link from 'next/link';
import { ArrowRight, Users, Heart, Music, BookOpen, Home, Sparkles, Baby } from 'lucide-react';
import { useTranslation, useLocale } from '../../../i18n/useTranslation';

export default function Ministries() {
  const t = useTranslation();
  const locale = useLocale();
  const lp = (href: string) => `/${locale}${href}`;

  const ministries = [
    {
      title: t.ministries.evangelismTitle,
      description: t.ministries.evangelismDesc,
      image: evangelismImg,
      link: '/ministries/evangelism',
      icon: Heart,
      external: false,
    },
    {
      title: t.ministries.innerHealingTitle,
      description: t.ministries.innerHealingDesc,
      image: innerHealingImg,
      link: '/ministries/innerhealing',
      icon: Sparkles,
      external: false,
    },
    {
      title: t.ministries.schoolTitle,
      description: t.ministries.schoolDesc,
      image: schoolImg,
      link: 'https://www.igniteschoolofministry.com/',
      icon: BookOpen,
      external: true,
    },
    {
      title: t.ministries.worshipTitle,
      description: t.ministries.worshipDesc,
      image: musicImg,
      link: '/ministries/worship',
      icon: Music,
      external: false,
    },
    {
      title: t.ministries.homeGroupsTitle,
      description: t.ministries.homeGroupsDesc,
      image: homeGroupImg,
      link: '/ministries/homegroup',
      icon: Home,
      external: false,
    },
    {
      title: t.ministries.womenTitle,
      description: t.ministries.womenDesc,
      image: womenImg,
      link: '/ministries/women',
      icon: Users,
      external: false,
    },
    {
      title: t.ministries.kidsTitle,
      description: t.ministries.kidsDesc,
      image: kidsMinistry,
      link: '/ministries/kids',
      icon: Baby,
      external: false,
    },
    {
      title: t.ministries.youthTitle,
      description: t.ministries.youthDesc,
      image: youthMinistry,
      link: '/ministries/youth',
      icon: Users,
      external: false,
    },
  ];
  return (
    <>
      {/* ==================== PAGE HEADER ==================== */}
      <section className="page-header" style={{ minHeight: '50vh', backgroundColor: '#1A1A2E' }}>
        <div
          className="hero-overlay"
          style={{ background: 'radial-gradient(circle at 30% 70%, rgba(232, 90, 36, 0.15) 0%, transparent 50%)' }}></div>
        <div className="page-header-content">
          <span className="hero-eyebrow">{t.ministries.headerEyebrow}</span>
          <h1 className="page-header-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            {t.ministries.headerTitle}
          </h1>
          <p className="page-header-subtitle">{t.ministries.headerSubtitle}</p>
        </div>
      </section>

      {/* ==================== MINISTRIES GRID ==================== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">{t.ministries.gridEyebrow}</span>
            <h2 className="section-title">{t.ministries.gridTitle}</h2>
            <p className="section-subtitle">{t.ministries.gridSubtitle}</p>
          </div>

          <div id="ministries-grid" className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {ministries.map((ministry, index) => {
              const IconComponent = ministry.icon;
              const CardContent = (
                <div className="card card-hover" style={{ height: '100%', overflow: 'hidden' }}>
                  <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                    <Image
                      src={ministry.image}
                      alt={ministry.title}
                      fill
                      style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      className="ministry-image"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'var(--color-brand)',
                        borderRadius: '50%',
                        width: '48px',
                        height: '48px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                      }}>
                      <IconComponent size={24} />
                    </div>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ marginBottom: '0.5rem', color: '#1A1A1A', fontWeight: '600' }}>{ministry.title}</h3>
                    <p className="text-secondary" style={{ marginBottom: '1rem', fontSize: '0.95rem' }}>
                      {ministry.description}
                    </p>
                    <span className="text-brand" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600' }}>
                      {t.common.learnMore} <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              );

              return ministry.external ? (
                <a
                  href={ministry.link}
                  key={index}
                  className="ministry-card"
                  style={{ textDecoration: 'none' }}
                  target="_blank"
                  rel="noopener noreferrer">
                  {CardContent}
                </a>
              ) : (
                <Link href={lp(ministry.link)} key={index} className="ministry-card" style={{ textDecoration: 'none' }}>
                  {CardContent}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="section section-brand" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="text-light mb-4">{t.ministries.ctaTitle}</h2>
          <p className="lead text-light-muted mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            {t.ministries.ctaSubtitle}
          </p>
          <a href="mailto:info@ignitechurch.be" className="btn-light btn-lg">
            {t.ministries.ctaBtn}
          </a>
        </div>
      </section>
    </>
  );
}
