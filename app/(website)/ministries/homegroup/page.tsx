'use client';
import Image from 'next/image';
import heroImg from '../../../img/hero-homegroup.webp';
import homeGroup2Img from '../../../img/homegroup2.webp';
import { useGSAP } from '@gsap/react';
import { Home, Calendar, MapPin, Heart, Users, ArrowLeft, Mail } from 'lucide-react';
import Link from 'next/link';
import { fadeFromBelow, slideFromLeftScroll, slideFromRightScroll } from '@/app/utils/gsapAnimations';

export default function HomeGroup() {
  useGSAP(() => {
    fadeFromBelow('.page-header-content');
  });

  useGSAP(() => {
    slideFromLeftScroll('#story .two-col', '#story');
    slideFromRightScroll('#community .two-col', '#community');
  });

  return (
    <>
      {/* ==================== PAGE HEADER ==================== */}
      <section className="page-header" style={{ minHeight: '70vh' }}>
        <Image src={heroImg} alt="Home Groups" fill className="hero-background" style={{ objectFit: 'cover' }} priority />
        <div className="hero-overlay"></div>
        <div className="page-header-content">
          <span className="hero-eyebrow">Ministry</span>
          <h1 className="page-header-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Ignite Home Group
          </h1>
          <p className="page-header-subtitle">Building Christ-like relationships</p>
          <Link href="/ministries" className="btn-ghost btn-sm" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)', marginTop: '1.5rem', display: 'inline-block' }}>
            <ArrowLeft size={16} />
            Back to Ministries
          </Link>
        </div>
      </section>

      {/* ==================== STORY ==================== */}
      <section className="section" id="story">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow mb-4">Our Story</span>
              <h2 className="mb-4">Where It All Began</h2>
              <p className="text-secondary mb-4">
                Ignite Church started in the living room of Pastor Maldo and Pastor Jasmine in 2016. Today, in addition to Sundays, we meet
                at homes around Brussels and Antwerp with the purpose of building Christ-like relationships with each other.
              </p>
              <p className="text-secondary">
                Community was always made to be Jesus&apos;s school of love as the world will know we are His disciples by the love we have
                for each other. This love can only be ignited through authentic interactions of individuals gathering as one heart with one
                purpose: be a pleasing sacrifice to their Father.
              </p>
            </div>
            <div className="image-frame">
              <Image
                src={homeGroup2Img}
                alt="Home group gathering"
                width={500}
                height={400}
                className="image-rounded image-shadow"
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== COMMUNITY ==================== */}
      <section className="section section-cream" id="community">
        <div className="container">
          <div className="two-col">
            <div
              style={{
                background: 'var(--color-secondary)',
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                color: 'white',
              }}>
              <h3 className="text-light mb-4">Family in Christ</h3>
              <p className="text-light-muted" style={{ fontStyle: 'italic', lineHeight: '1.8' }}>
                &ldquo;Who is my mother, and who are my brothers?&rdquo; Pointing to his disciples, he said, &ldquo;Here are my mother and
                my brothers. For whoever does the will of my Father in heaven is my brother and sister and mother.&rdquo;
              </p>
              <p className="text-light-muted mt-4" style={{ fontSize: '0.9rem' }}>
                — Matthew 12:48-50
              </p>
            </div>
            <div>
              <span className="eyebrow mb-4">Join Us</span>
              <h3 className="mb-4">You&apos;re Invited</h3>
              <p className="text-secondary mb-4">
                For Jesus, his community of disciples was not just another kind of community like a school or a sport club, it actually was
                his family.
              </p>
              <p className="text-secondary">
                Therefore, we want to extend to you the invitation to get plugged in to one of our homegroups: to belong, to practice the
                way of Jesus, to grow, to strengthen your commitment toward Him.
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
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', maxWidth: '900px', margin: '0 auto' }}>
            <div className="feature-card" style={{ textAlign: 'center' }}>
              <div className="feature-icon mx-auto">
                <Calendar />
              </div>
              <h4 className="feature-title">When We Meet</h4>
              <p className="feature-text">Every other week</p>
            </div>

            <div className="feature-card" style={{ textAlign: 'center' }}>
              <div className="feature-icon mx-auto">
                <MapPin />
              </div>
              <h4 className="feature-title">Locations</h4>
              <p className="feature-text">Brussels &amp; Antwerp</p>
            </div>

            <div className="feature-card" style={{ textAlign: 'center' }}>
              <div className="feature-icon mx-auto">
                <Mail />
              </div>
              <h4 className="feature-title">More Info</h4>
              <a href="mailto:ignitechurchbrussels@gmail.com" className="text-brand" style={{ fontSize: '0.9rem' }}>
                ignitechurchbrussels@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <div className="feature-icon mx-auto mb-6" style={{ background: 'rgba(232, 90, 36, 0.2)', width: '80px', height: '80px' }}>
            <Home size={36} />
          </div>
          <h2 className="text-light mb-4">Find Your Home Group</h2>
          <p className="lead text-light-muted mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#EF702D' }}>
            Ready to connect with a community that feels like family? Reach out and we&apos;ll help you find the perfect group.
          </p>
          <a href="mailto:ignitechurchbrussels@gmail.com" className="btn-primary btn-lg">
            Get Connected
          </a>
        </div>
      </section>
    </>
  );
}
