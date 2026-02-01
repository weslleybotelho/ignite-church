'use client';
import Image from 'next/image';
import bgWomen from '../../../img/bg-women.jpg';
import women1 from '../../../img/women1.png';
import { useGSAP } from '@gsap/react';
import { Users, Calendar, MapPin, Heart, Sparkles, Shield, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { fadeFromBelow, slideFromLeftScroll } from '@/app/utils/gsapAnimations';

const visionPoints = [
  'Expand our capabilities on a personal and professional level',
  'Know ourselves, our inner strengths and confidence in order to conquer life and its challenges',
  'Support each other by encouraging and praying for each other',
  'Fully embrace and walk in the new identity that we have in Christ',
  'Create a place where you can be transparent and vulnerable',
];

export default function Women() {
  useGSAP(() => {
    fadeFromBelow('.page-header-content');
  });

  useGSAP(() => {
    slideFromLeftScroll('#vision .two-col', '#vision');
  });

  return (
    <>
      {/* ==================== PAGE HEADER ==================== */}
      <section className="page-header" style={{ minHeight: '70vh' }}>
        <Image src={bgWomen} alt="Women Ministry" fill className="hero-background" style={{ objectFit: 'cover' }} priority />
        <div className="hero-overlay"></div>
        <div className="page-header-content">
          <Link href="/ministries" className="btn-ghost btn-sm mb-4" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
            <ArrowLeft size={16} />
            Back to Ministries
          </Link>
          <span className="hero-eyebrow">Ministry</span>
          <h1 className="page-header-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Women Ministry
          </h1>
          <p className="page-header-subtitle">Empower each other in our natural and spiritual abilities</p>
        </div>
      </section>

      {/* ==================== VISION ==================== */}
      <section className="section" id="vision">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow mb-4">Our Vision</span>
              <h2 className="mb-6">Empowering Women in Christ</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {visionPoints.map((point, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div
                      style={{
                        background: 'var(--color-brand)',
                        borderRadius: '50%',
                        width: '24px',
                        height: '24px',
                        minWidth: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '2px',
                      }}>
                      <Heart size={12} color="white" />
                    </div>
                    <p className="text-secondary" style={{ margin: 0 }}>
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="image-frame">
              <Image
                src={women1}
                alt="Women Ministry gathering"
                width={500}
                height={500}
                className="image-rounded image-shadow"
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section className="section section-cream">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-eyebrow">About Us</span>
            <h3 className="mb-6">Thriving Together</h3>
            <p className="text-secondary mb-6">
              Our focus is on fostering inner strength and confidence rooted in our identity in Christ, enabling us to overcome life&apos;s
              challenges with resilience and grace.
            </p>
            <p className="text-secondary">
              Through mutual support, encouragement, and prayer, we create a safe space where transparency and vulnerability are celebrated.
              Join us as we journey together, embracing our unique journeys and empowering one another to thrive in every aspect of life.
            </p>
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
              <h4 className="feature-title">When We Meet</h4>
              <p className="feature-text">Every 3rd Sunday</p>
            </div>

            <div className="feature-card" style={{ textAlign: 'center' }}>
              <div className="feature-icon mx-auto">
                <MapPin />
              </div>
              <h4 className="feature-title">Where We Meet</h4>
              <p className="feature-text">Tribes Office after service</p>
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
          <h2 className="text-light mb-4">Join Our Sisterhood</h2>
          <p className="lead text-light-muted mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            You&apos;re invited to be part of our community of women supporting and encouraging one another in faith.
          </p>
          <a href="mailto:info@ignitechurch.be" className="btn-primary btn-lg">
            Connect With Us
          </a>
        </div>
      </section>
    </>
  );
}
