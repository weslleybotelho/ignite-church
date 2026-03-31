'use client';
import Image from 'next/image';
import aboutHero from '../../img/about-hero3.jpg';
import aboutImg1 from '../../img/about-image1.jpg';
import coreValuesImg from '../../img/core-values.png';
import { useGSAP } from '@gsap/react';
import { MapPin, Target, Sparkles, Zap, Users, Heart } from 'lucide-react';
import { fadeFromBelow, fadeFromOpacityScroll, slideFromLeftScroll, slideFromRightScroll } from '../../utils/gsapAnimations';

export default function About() {
  useGSAP(() => {
    fadeFromBelow('.page-header-content');
  });

  useGSAP(() => {
    fadeFromOpacityScroll('#story .container', '#story');
    slideFromLeftScroll('#pastors .two-col', '#pastors');
    slideFromRightScroll('#values .grid', '#values');
  });

  return (
    <>
      {/* ==================== PAGE HEADER ==================== */}
      <section className="page-header" style={{ minHeight: '70vh' }}>
        <Image src={aboutHero} alt="About Ignite Church" fill className="hero-background" style={{ objectFit: 'cover' }} priority />
        <div className="hero-overlay"></div>
        <div className="page-header-content">
          <span className="hero-eyebrow">Who We Are</span>
          <h1 className="page-header-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            About Ignite Church
          </h1>
          <p className="page-header-subtitle">A Christian community igniting a generation for Jesus</p>
        </div>
      </section>

      {/* ==================== OUR STORY ==================== */}
      <section className="section" id="story">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Story</span>
            <h2 className="section-title">A Journey of Faith</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p className="lead text-center mb-6">
              Maldo&apos;s journey to founding Ignite Church in Brussels, Belgium, is a testament to unwavering faith and dedication.
            </p>
            <p className="text-secondary text-center">
              Born in Dolores Eastern Samar, Philippines, he relocated to Belgium at a young age, where he encountered the 
              power of Christ. Influenced profoundly by his mother&apos;s prayers, Maldo&apos;s spiritual journey took root amidst the
              Flemish-speaking landscape of Brussels.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== PASTOR SECTION ==================== */}
      <section className="section section-cream" id="pastors">
        <div className="container">
          <span className="eyebrow mb-6">Leadership</span>
          <div className="two-col">
            <div className="image-frame">
              <Image
                src={aboutImg1}
                alt="Pastor Maldo and his wife Jasmine"
                className="image-rounded image-shadow"
                width={500}
                height={540}
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
            <div>
              <h2 className="mb-4">Pastor Maldo</h2>
              <p className="text-secondary mb-4">
                Growing up in the vibrant Filipino community of &ldquo;Christian Center Anderlecht,&rdquo; Maldo&apos;s calling to ministry
                became increasingly evident.
              </p>
              <p className="text-secondary mb-4">
                Following years of faithful service within the church, Maldo and his wife, Jasmine, were released in 2016 to establish
                Ignite Church—an endeavor rooted in the belief that every heart ignited with God&apos;s love has the power to change
                communities.
              </p>
              <p className="text-secondary">
                With a steadfast commitment to leading others into a deeper encounter with Christ, Maldo&apos;s vision for Ignite Church in
                Brussels is one fueled by the desire for revival and the relentless passion for Jesus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VISION & MISSION ==================== */}
      <section className="section section-dark" id="vision-mission">
        <div className="container">
          <div className="grid gap-12" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <div className="text-center">
              <div className="feature-icon mx-auto mb-6" style={{ background: 'rgba(232, 90, 36, 0.2)', width: '80px', height: '80px' }}>
                <Target size={36} />
              </div>
              <h3 className="text-light mb-4">Our Vision</h3>
              <p className="text-light-muted">Igniting a generation on fire for Jesus and for the presence of God.</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto mb-6" style={{ background: 'rgba(232, 90, 36, 0.2)', width: '80px', height: '80px' }}>
                <Sparkles size={36} />
              </div>
              <h3 className="text-light mb-4">Our Mission</h3>
              <p className="text-light-muted">
                At Ignite Church Brussels, our mission is deeply rooted in five foundational pillars: Presence, Power, Purity, People, and
                Purpose. These pillars guide our every endeavor, shaping our collective vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CORE VALUES ==================== */}
      <section className="section" id="values">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">What We Believe</span>
            <h2 className="section-title">Our Five Pillars</h2>
            <p className="section-subtitle">
              These foundational pillars guide everything we do, shaping our shared vision and driving our commitment to people
              and communities.
            </p>
          </div>

          <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {/* Presence */}
            <div className="feature-card">
              <div className="feature-icon">
                <MapPin />
              </div>
              <h4 className="feature-title">Presence</h4>
              <p className="feature-text">
                We prioritize cultivating the presence of God in every part of our community. Through worship and intentional
                fellowship, we create an atmosphere where His presence is real.
              </p>
            </div>

            {/* Power */}
            <div className="feature-card">
              <div className="feature-icon">
                <Zap />
              </div>
              <h4 className="feature-title">Power</h4>
              <p className="feature-text">
                Led by the Holy Spirit, we embrace the power of God to bring about lasting change. Through signs, wonders, and
                miracles, we boldly proclaim the gospel.
              </p>
            </div>

            {/* Purity */}
            <div className="feature-card">
              <div className="feature-icon">
                <Sparkles />
              </div>
              <h4 className="feature-title">Purity</h4>
              <p className="feature-text">
                Integrity and purity are the cornerstones of our walk with God. We are committed to upholding biblical standards of
                righteousness and holiness in all areas of life.
              </p>
            </div>

            {/* People */}
            <div className="feature-card">
              <div className="feature-icon">
                <Users />
              </div>
              <h4 className="feature-title">People</h4>
              <p className="feature-text">
                At the heart of Ignite Church is a deep love for people. We believe in creating a welcoming community where everyone feels
                loved, accepted, and valued.
              </p>
            </div>

            {/* Purpose */}
            <div className="feature-card">
              <div className="feature-icon">
                <Heart />
              </div>
              <h4 className="feature-title">Purpose</h4>
              <p className="feature-text">
                Driven by our love for Jesus, we embrace our purpose to impact our world for His glory. With clarity and determination,
                we pursue God&apos;s purposes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="text-light mb-4">Join Our Family</h2>
          <p className="lead text-light-muted mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            We&apos;d love to meet you! Come visit us this Sunday and see what we&apos;re all about.
          </p>
          <a href="https://maps.app.goo.gl/QrMxLi79z9gTyGBg9" target="_blank" className="btn-primary btn-lg">
            <MapPin size={20} />
            Get Directions
          </a>
        </div>
      </section>
    </>
  );
}
