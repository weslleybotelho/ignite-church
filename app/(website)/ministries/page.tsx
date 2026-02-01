'use client';
import Image from 'next/image';
import evangelismImg from '../../img/evangelism.jpg';
import innerHealingImg from '../../img/inner-healing.jpg';
import schoolImg from '../../img/school.jpg';
import musicImg from '../../img/music.jpg';
import homeGroupImg from '../../img/homegroup.jpg';
import womenImg from '../../img/women.jpg';
import menImg from '../../img/men.jpg';
import kidsMinistry from '../../img/kidsministry.jpg';
import youthMinistry from '../../img/hero-youth.webp';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { fadeFromBelow } from '../../utils/gsapAnimations';
import { ArrowRight, Users, Heart, Music, BookOpen, Home, Sparkles, Baby, UserCheck } from 'lucide-react';

const ministries = [
  {
    title: 'Evangelism',
    description: 'Sharing the love of Christ with the community through outreach and mission.',
    image: evangelismImg,
    link: '/ministries/evangelism',
    icon: Heart,
  },
  {
    title: 'Inner Healing',
    description: 'Finding freedom and restoration through prayer ministry and counseling.',
    image: innerHealingImg,
    link: '/ministries/innerhealing',
    icon: Sparkles,
  },
  {
    title: 'School of Ministry',
    description: 'Equipping believers for effective ministry and spiritual growth.',
    image: schoolImg,
    link: '/ignite-school-of-ministry',
    icon: BookOpen,
  },
  {
    title: 'Ignite Worship',
    description: 'Leading the congregation into the presence of God through praise and worship.',
    image: musicImg,
    link: '/ministries/worship',
    icon: Music,
  },
  {
    title: 'Home Groups',
    description: 'Building community and deepening faith in small group settings.',
    image: homeGroupImg,
    link: '/ministries/homegroup',
    icon: Home,
  },
  {
    title: 'Men Ministry',
    description: 'Empowering men to become spiritual leaders in their families and communities.',
    image: menImg,
    link: '/ministries/men',
    icon: UserCheck,
  },
  {
    title: 'Women Ministry',
    description: 'Encouraging women to grow in faith and discover their God-given purpose.',
    image: womenImg,
    link: '/ministries/women',
    icon: Users,
  },
  {
    title: 'Kids Ministry',
    description: 'Nurturing children to know and love Jesus through fun and engaging activities.',
    image: kidsMinistry,
    link: '/ministries/kids',
    icon: Baby,
  },
  {
    title: 'Youth Ministry',
    description: 'Empowering the next generation to live boldly for Christ.',
    image: youthMinistry,
    link: '/ministries/youth',
    icon: Users,
  },
];

  const cardsRef = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    fadeFromBelow('.page-header-content');
  });

  useGSAP(() => {
    if (cardsRef.current) {
      gsap.from(cardsRef.current.querySelectorAll('.ministry-card'), {
        opacity: 0,
        ease: 'power4.out',
        stagger: { each: 0.2 },
        duration: 2,
      });
    }
  }, { dependencies: [ministries] });

  return (
    <>
      {/* ==================== PAGE HEADER ==================== */}
      <section className="page-header" style={{ minHeight: '50vh' }}>
        <div
          className="hero-overlay"
          style={{ background: 'radial-gradient(circle at 30% 70%, rgba(232, 90, 36, 0.15) 0%, transparent 50%)' }}></div>
        <div className="page-header-content">
          <span className="hero-eyebrow">Get Involved</span>
          <h1 className="page-header-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Ministries
          </h1>
          <p className="page-header-subtitle">Find a place for you in what God is doing here</p>
        </div>
      </section>

      {/* ==================== MINISTRIES GRID ==================== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Ministries</span>
            <h2 className="section-title">Ways to Connect & Serve</h2>
            <p className="section-subtitle">Discover the different ways you can get involved and make a difference in our community.</p>
          </div>

          <div ref={cardsRef} className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {ministries.map((ministry, index) => {
              const IconComponent = ministry.icon;
              return (
                <Link href={ministry.link} key={index} className="ministry-card" style={{ textDecoration: 'none' }}>
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
                      <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-text)' }}>{ministry.title}</h3>
                      <p className="text-secondary" style={{ marginBottom: '1rem', fontSize: '0.95rem' }}>
                        {ministry.description}
                      </p>
                      <span
                        className="text-brand"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600' }}>
                        Learn More <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="section section-brand" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="text-light mb-4">Not Sure Where to Start?</h2>
          <p className="lead text-light-muted mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            We&apos;d love to help you find the right ministry for you. Reach out and let&apos;s chat!
          </p>
          <a href="mailto:info@ignitechurch.be" className="btn-light btn-lg">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
