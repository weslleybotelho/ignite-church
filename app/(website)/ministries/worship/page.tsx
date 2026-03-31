'use client';
import Image from 'next/image';
import heroImg from '../../../img/music.jpg';
import school1 from '../../../img/worship1-min.webp';
import school2 from '../../../img/worship2-min.webp';
import { useGSAP } from '@gsap/react';
import { Music, Heart, MessageCircle, Lightbulb, Shield, HandHeart, Star, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { fadeFromBelow, fadeFromOpacityScroll, slideFromLeftScroll } from '../../../utils/gsapAnimations';

const values = [
  {
    title: 'Presence and Prophetic',
    description:
      "Cultivating and valuing the Presence of God and a prophetic culture in our midst. Seeking alignment with God's heart and desires.",
    icon: Heart,
  },
  {
    title: 'Collaboration and Communication',
    description: 'Fostering a culture of open and transparent communication. Prioritizing collaboration above individual ambitions.',
    icon: MessageCircle,
  },
  {
    title: 'Flexibility and Creativity',
    description:
      "Embracing flexibility and openness to the Holy Spirit's leading. Creating an environment of freedom where everyone feels valued.",
    icon: Lightbulb,
  },
  {
    title: 'Accountability and Responsibility',
    description:
      'Taking ownership of responsibilities and holding ourselves accountable. Delivering on commitments and seeking continuous improvement.',
    icon: Shield,
  },
  {
    title: 'Purity and Integrity',
    description: 'Upholding biblical standards in all our actions. Leading by example with honesty, fairness, and transparency.',
    icon: Star,
  },
  {
    title: 'Prayer and Intercession',
    description: 'Praying and interceding for the worship team and its members. We want to bathe everything we do with prayer.',
    icon: HandHeart,
  },
];

export default function Worship() {
  useGSAP(() => {
    fadeFromBelow('.page-header-content');
  });

  useGSAP(() => {
    slideFromLeftScroll('#vision .two-col', '#vision');
    fadeFromOpacityScroll('#values .grid', '#values');
  });

  return (
    <>
      {/* ==================== PAGE HEADER ==================== */}
      <section className="page-header" style={{ minHeight: '70vh' }}>
        <Image src={heroImg} alt="Ignite Worship" fill className="hero-background" style={{ objectFit: 'cover' }} priority />
        <div className="hero-overlay"></div>
        <Link href="/ministries" className="btn-ghost btn-sm back-btn-hero" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
            <ArrowLeft size={16} />
            Back to Ministries
          </Link>
        <div className="page-header-content">
          <span className="hero-eyebrow">Ministry</span>
          <h1 className="page-header-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Ignite Worship
          </h1>
          <p className="page-header-subtitle">A movement of sons and daughters who worship Jesus</p>
        </div>
      </section>

      {/* ==================== VISION ==================== */}
      <section className="section" id="vision">
        <div className="container">
          <div className="two-col">
            <div className="image-frame">
              <Image
                src={school1}
                alt="Worship team leading"
                width={500}
                height={400}
                className="image-rounded image-shadow"
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
            <div>
              <span className="eyebrow mb-4">Our Vision</span>
              <h2 className="mb-4">We Burn for Him</h2>
              <p className="lead mb-4">
                Ignite Worship is a movement of sons and daughters who worship Jesus for what He has done and who He is.
              </p>
              <p className="text-secondary">
                We are a family. We are passionate worshippers of Him. We burn for Him. We are hungry and thirsty for Jesus. Through our
                worship, we create an atmosphere where His presence is real and lives are changed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VALUES ==================== */}
      <section className="section section-cream" id="values">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Values</span>
            <h2 className="section-title">What We Stand For</h2>
            <p className="section-subtitle">The principles that guide our worship ministry and shape who we are.</p>
          </div>

          <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div className="feature-card" key={index}>
                  <div className="feature-icon">
                    <IconComponent />
                  </div>
                  <h4 className="feature-title">{value.title}</h4>
                  <p className="feature-text">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== GALLERY ==================== */}
      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow mb-4">Excellence</span>
              <h3 className="mb-4">Striving for Excellence</h3>
              <p className="text-secondary mb-4">
                We believe in giving our best to God in everything we do. Excellence in worship is not about perfection but about bringing
                our best offering to the One who deserves it all.
              </p>
              <p className="text-secondary">
                Our team commits to preparation, practice, and prayer so that we can lead others into authentic encounters with God.
              </p>
            </div>
            <div className="image-frame">
              <Image
                src={school2}
                alt="Worship team practice"
                width={500}
                height={400}
                className="image-rounded image-shadow"
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <div className="feature-icon mx-auto mb-6" style={{ background: 'rgba(232, 90, 36, 0.2)', width: '80px', height: '80px' }}>
            <Music size={36} />
          </div>
          <h2 className="text-light mb-4">Join Our Worship Team</h2>
          <p className="lead text-light-muted mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Do you have a heart for worship? We&apos;d love to connect with you and explore how you can use your gifts to glorify God.
          </p>
          <a href="mailto:info@ignitechurch.be" className="btn-primary btn-lg">
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
