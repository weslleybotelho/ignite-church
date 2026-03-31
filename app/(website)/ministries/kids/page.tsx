'use client';
import Image from 'next/image';
import kidsImg from '../../../img/kidsministry.jpg';
import { useGSAP } from '@gsap/react';
import { Baby, Calendar, MapPin, Heart, BookOpen, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { fadeFromBelow, fadeFromOpacityScroll } from '@/app/utils/gsapAnimations';

export default function Kids() {
  useGSAP(() => {
    fadeFromBelow('.page-header-content');
  });

  useGSAP(() => {
    fadeFromOpacityScroll('#mission .container', '#mission');
  });

  return (
    <>
      {/* ==================== PAGE HEADER ==================== */}
      <section className="page-header" style={{ minHeight: '70vh' }}>
        <Image src={kidsImg} alt="Kids Ministry" fill className="hero-background" style={{ objectFit: 'cover' }} priority />
        <div className="hero-overlay"></div>
        <Link href="/ministries" className="btn-ghost btn-sm back-btn-hero" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
            <ArrowLeft size={16} />
            Back to Ministries
          </Link>
        <div className="page-header-content">
          <span className="hero-eyebrow">Ages 0-12</span>
          <h1 className="page-header-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Ignite Kids
          </h1>
          <p className="page-header-subtitle">Launched in 2020</p>
        </div>
      </section>

      {/* ==================== MISSION ==================== */}
      <section className="section" id="mission">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Mission</span>
            <h2 className="section-title">Touching Young Hearts</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p className="lead text-center mb-6">
              A ministry dedicated to touching the hearts of preschool-aged children and helping them discover Jesus&apos;s love.
            </p>
            <p className="text-secondary text-center mb-4">
              Our dedicated team of volunteers, fluent in French, English, and Dutch, welcomes your children at our office while you enjoy
              the service.
            </p>
            <p className="text-secondary text-center">
              This is more than just babysitting. We believe in Christ&apos;s ability to change the youngest hearts, preparing them to
              positively impact the world.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== WHAT WE DO ==================== */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">What We Do</span>
            <h2 className="section-title">Growing Together in Faith</h2>
          </div>

          <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="feature-card">
              <div className="feature-icon">
                <Heart />
              </div>
              <h4 className="feature-title">Prayer</h4>
              <p className="feature-text">
                We pray together, teaching children to communicate with God and building their relationship with Him from an early age.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <BookOpen />
              </div>
              <h4 className="feature-title">Scripture</h4>
              <p className="feature-text">
                We memorize verses and share stories inspired by Holy Scriptures, carefully tailored for deep understanding.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Baby />
              </div>
              <h4 className="feature-title">Fun Activities</h4>
              <p className="feature-text">
                We integrate faith into children&apos;s everyday lives through engaging games, crafts, and interactive lessons.
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
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', maxWidth: '700px', margin: '0 auto' }}>
            <div className="feature-card" style={{ textAlign: 'center' }}>
              <div className="feature-icon mx-auto">
                <Calendar />
              </div>
              <h4 className="feature-title">When We Meet</h4>
              <p className="feature-text">Every Sunday from 9:45 AM to 12:30 PM</p>
            </div>

            <div className="feature-card" style={{ textAlign: 'center' }}>
              <div className="feature-icon mx-auto">
                <MapPin />
              </div>
              <h4 className="feature-title">Where We Meet</h4>
              <p className="feature-text">Tribes Office</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="section section-brand" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="text-light mb-4">Questions About Kids Ministry?</h2>
          <p className="lead text-light-muted mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            We&apos;d love to tell you more about how we care for and nurture your little ones!
          </p>
          <a href="mailto:info@ignitechurch.be" className="btn-light btn-lg">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
