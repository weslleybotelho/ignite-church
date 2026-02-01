'use client';
import Image from 'next/image';
import sponsors from '../../img/SPONSOR.jpg';
import { useGSAP } from '@gsap/react';
import { Heart, Building, Handshake, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { fadeFromBelow, fadeFromOpacityScroll } from '../../utils/gsapAnimations';

export default function Supporters() {
  useGSAP(() => {
    fadeFromBelow('.page-header-content');
  });

  useGSAP(() => {
    fadeFromOpacityScroll('#sponsors .container', '#sponsors');
  });

  return (
    <>
      {/* ==================== PAGE HEADER ==================== */}
      <section
        className="page-header"
        style={{
          minHeight: '50vh',
          background: 'linear-gradient(135deg, var(--color-secondary) 0%, #2D2D4A 100%)',
        }}>
        <div
          className="hero-overlay"
          style={{
            background: 'radial-gradient(circle at 30% 70%, rgba(232, 90, 36, 0.15) 0%, transparent 50%)',
          }}></div>
        <div className="page-header-content">
          <span className="hero-eyebrow">Partnership</span>
          <h1 className="page-header-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Our Supporters
          </h1>
          <p className="page-header-subtitle">Businesses and partners who help make our mission possible</p>
        </div>
      </section>

      {/* ==================== INTRO ==================== */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="feature-icon mx-auto mb-6" style={{ width: '80px', height: '80px' }}>
            <Handshake size={36} />
          </div>
          <h2 className="mb-4">Thank You to Our Partners</h2>
          <p className="text-secondary" style={{ maxWidth: '700px', margin: '0 auto' }}>
            We are incredibly grateful for the businesses and individuals who support Ignite Church. Their generosity helps us continue our
            mission of spreading God&apos;s love throughout Brussels and beyond.
          </p>
        </div>
      </section>

      {/* ==================== SPONSORS IMAGE ==================== */}
      <section className="section section-cream" id="sponsors">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Partners</span>
            <h2 className="section-title">Supporting Our Mission</h2>
          </div>
          <div
            style={{
              background: 'white',
              padding: '2rem',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-lg)',
            }}>
            <Image
              src={sponsors}
              alt="Our Sponsors and Partners"
              style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-md)' }}
            />
          </div>
        </div>
      </section>

      {/* ==================== BECOME A SUPPORTER ==================== */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <div className="feature-icon mx-auto mb-6" style={{ background: 'rgba(232, 90, 36, 0.2)', width: '80px', height: '80px' }}>
            <Building size={36} />
          </div>
          <h2 className="text-light mb-4">Become a Supporter</h2>
          <p className="lead text-light-muted mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Interested in partnering with Ignite Church? We&apos;d love to hear from you and explore how we can work together to impact our
            community.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:info@ignitechurch.be" className="btn-primary btn-lg">
              <Mail size={20} />
              Contact Us
            </a>
            <Link href="/give" className="btn-outline btn-lg" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
              <Heart size={20} />
              Give Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
