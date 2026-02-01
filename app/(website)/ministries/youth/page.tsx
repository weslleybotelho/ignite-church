'use client';
import Image from 'next/image';
import heroYouth from '../../../img/hero-youth.webp';
import youth1 from '../../../img/youth1.webp';
import { useGSAP } from '@gsap/react';
import { Calendar, MapPin, Clock, ArrowLeft, Users } from 'lucide-react';
import Link from 'next/link';
import { fadeFromBelow, fadeFromOpacityScroll, slideFromLeftScroll, slideFromRightScroll } from '@/app/utils/gsapAnimations';

export default function Youth() {
  useGSAP(() => {
    fadeFromBelow('.page-header-content');
  });

  useGSAP(() => {
    fadeFromOpacityScroll('#about .container', '#about');
    slideFromLeftScroll('#details .two-col', '#details');
  });

  return (
    <>
      {/* ==================== PAGE HEADER ==================== */}
      <section className="page-header" style={{ minHeight: '70vh' }}>
        <Image src={heroYouth} alt="Youth Ministry" fill className="hero-background" style={{ objectFit: 'cover' }} priority />
        <div className="hero-overlay"></div>
        <div className="page-header-content">
          <Link href="/ministries" className="btn-ghost btn-sm mb-4" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
            <ArrowLeft size={16} />
            Back to Ministries
          </Link>
          <span className="hero-eyebrow">Ages 12-25</span>
          <h1 className="page-header-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Youth Ministry
          </h1>
          <p className="page-header-subtitle">Launched in October 2023</p>
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section className="section" id="about">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">About IYM</span>
            <h2 className="section-title">Ignite Youth Ministry</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p className="lead text-center mb-6">
              A group of young people aged from 12 to 25 years old that are sold for Jesus and His Kingdom and are ready to be equipped and
              taught to make a difference wherever God calls them to.
            </p>
            <p className="text-secondary text-center">
              It is also a place to build healthy and long-lasting friendships that glorify God and help us to finish the race on planet
              earth. Most importantly it is a place where young people can learn what it means to have their identity anchored in
              Jesus-Christ, the perfect model.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== DETAILS ==================== */}
      <section className="section section-cream" id="details">
        <div className="container">
          <div className="two-col">
            <div className="image-frame">
              <Image
                src={youth1}
                alt="Youth Ministry gathering"
                width={500}
                height={400}
                className="image-rounded image-shadow"
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
            <div>
              <h3 className="mb-4">Community Like Family</h3>
              <p className="text-secondary mb-6">
                For Jesus, his community of disciples was not just another kind of community like a school or a sport club, it actually was
                his family: He replied to him, &ldquo;Who is my mother, and who are my brothers?&rdquo; Pointing to his disciples, he said,
                &ldquo;Here are my mother and my brothers. For whoever does the will of my Father in heaven is my brother and sister and
                mother.&rdquo; - Matthew 12:48-50
              </p>

              <div className="grid gap-4" style={{ gridTemplateColumns: '1fr 1fr' }}>
                <div className="feature-card" style={{ padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <Calendar size={20} className="text-brand" />
                    <h5 style={{ margin: 0 }}>When</h5>
                  </div>
                  <p className="text-secondary" style={{ margin: 0, fontSize: '0.9rem' }}>
                    Every other week
                  </p>
                </div>
                <div className="feature-card" style={{ padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <MapPin size={20} className="text-brand" />
                    <h5 style={{ margin: 0 }}>Where</h5>
                  </div>
                  <p className="text-secondary" style={{ margin: 0, fontSize: '0.9rem' }}>
                    Tribes Office
                  </p>
                </div>
              </div>
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
          <h2 className="text-light mb-4">Ready to Join Us?</h2>
          <p className="lead text-light-muted mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Whether you&apos;re 12 or 25, there&apos;s a place for you in our youth community. Come as you are and grow with us!
          </p>
          <a href="mailto:info@ignitechurch.be" className="btn-primary btn-lg">
            Get Connected
          </a>
        </div>
      </section>
    </>
  );
}
