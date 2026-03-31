'use client';
import Image from 'next/image';
import evangelismImg from '../../../img/evangelism_bg.webp';
import { useGSAP } from '@gsap/react';
import { Heart, Calendar, MapPin, Gift, Users, Utensils, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { fadeFromBelow, fadeFromOpacityScroll } from '@/app/utils/gsapAnimations';

const activities = [
  {
    title: 'Training Sessions',
    description: 'Mini-training sessions to prepare and equip people for effective outreach.',
    icon: Users,
  },
  {
    title: 'Christmas Outreach',
    description: 'Distribution of food, clothing and accessories for people in need during the Christmas period.',
    icon: Utensils,
  },
  {
    title: "Valentine's Day",
    description: "Gift distribution spreading God's love on Valentine's Day.",
    icon: Gift,
  },
];

export default function Evangelism() {
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
        <Image src={evangelismImg} alt="Evangelism Ministry" fill className="hero-background" style={{ objectFit: 'cover' }} priority />
        <div className="hero-overlay"></div>
        <div className="page-header-content">
          <span className="hero-eyebrow">Ministry</span>
          <h1 className="page-header-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Ignite Evangelism
          </h1>
          <p className="page-header-subtitle">Sharing the Gospel throughout Brussels</p>
          <Link href="/ministries" className="btn-ghost btn-sm" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)', marginTop: '1.5rem', display: 'inline-block' }}>
            <ArrowLeft size={16} />
            Back to Ministries
          </Link>
        </div>
      </section>

      {/* ==================== MISSION ==================== */}
      <section className="section" id="mission">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Mission</span>
            <h2 className="section-title">Encounters with God</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p className="lead text-center mb-6">
              The mission of Ignite Evangelism is to passionately share the Gospel of Jesus Christ throughout the city of Brussels.
            </p>
            <p className="text-secondary text-center">
              We help people encounter God through Jesus. To fulfill this mission, we organize different
              activities aimed at reaching and connecting with people in our community.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== ACTIVITIES ==================== */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">What We Do</span>
            <h2 className="section-title">Our Activities</h2>
          </div>

          <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {activities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <div className="feature-card" key={index}>
                  <div className="feature-icon">
                    <IconComponent />
                  </div>
                  <h4 className="feature-title">{activity.title}</h4>
                  <p className="feature-text">{activity.description}</p>
                </div>
              );
            })}
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
              <p className="feature-text">First Sunday of every month after service</p>
            </div>

            <div className="feature-card" style={{ textAlign: 'center' }}>
              <div className="feature-icon mx-auto">
                <MapPin />
              </div>
              <h4 className="feature-title">Where We Meet</h4>
              <p className="feature-text">Ignite Brussels</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <div className="feature-icon mx-auto mb-6" style={{ background: 'rgba(232, 90, 36, 0.2)', width: '80px', height: '80px' }}>
            <Heart size={36} />
          </div>
          <h2 className="text-light mb-4">Want to Share God&apos;s Love?</h2>
          <p className="lead text-light-muted mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#EF702D' }}>
            Come join us in spreading the Gospel and making a difference in our community.
          </p>
          <a href="mailto:info@ignitechurch.be" className="btn-primary btn-lg">
            Get Involved
          </a>
        </div>
      </section>
    </>
  );
}
