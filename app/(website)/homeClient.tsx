'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { Heart, Music, Sparkles, Users, MapPin, Play, ArrowRight } from 'lucide-react';
import AboutIgniteImg from '../img/about-ignite2.png';
import IsmImg from '../img/ism-thumb.jpeg';
import {
  fadeFromBelow,
  fadeFromBelowScroll,
  fadeFromOpacityScroll,
  slideFromLeftScroll,
} from '../utils/gsapAnimations';
import SliderImages from '../components/Sliderv2/slider';

interface Announcement {
  id: number;
  title: string;
  image_url: string;
  link_url?: string;
}

export default function HomeClient() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    fetch('/api/announcements')
      .then((r) => r.json())
      .then((data) => { if (Array.isArray(data)) setAnnouncements(data); })
      .catch(console.error);
  }, []);

  useGSAP(() => {
    fadeFromBelow('#hero .hero-content');
  });

  useGSAP(() => {
    fadeFromBelowScroll('#announcement .section-header', '#announcement');
    slideFromLeftScroll('#about .two-col', '#about');
    fadeFromOpacityScroll('#ministries .grid', '#ministries');
    fadeFromBelowScroll('#ism .two-col', '#ism');
  });

  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section className="hero" id="hero">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="/bg-hero.png" 
          className="hero-video"
        >
          <source src="https://pub-77383fbe3b1e4aa7845b78670fb0f016.r2.dev/hero-video-v2.mp4" type="video/mp4" />
          <source src="https://pub-77383fbe3b1e4aa7845b78670fb0f016.r2.dev/hero-video-v2.webm" type="video/webm" />
        </video>
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <span className="hero-eyebrow">Welcome to Ignite Church Brussels</span>
          <h1 className="hero-title">
            Igniting a Generation<br />
            <span className="text-gradient">for Jesus</span>
          </h1>
          <p className="hero-subtitle">
            Join us every Sunday for our service at 10:00 AM
          </p>
          <div className="btn-group justify-center">
            <Link href="https://maps.app.goo.gl/QrMxLi79z9gTyGBg9" target="_blank" className="btn-primary btn-lg btn-arrow">
              <MapPin size={20} />
              Visit Us
            </Link>
            <Link href="https://www.youtube.com/@ignitechurchbrussels/streams" target="_blank" className="btn-outline-light btn-lg">
              <Play size={20} />
              Watch Live
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute" style={{ bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}>
          <div className="animate-bounce" style={{ color: 'rgba(255,255,255,0.6)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </div>
        </div>
      </section>

      {/* ==================== ANNOUNCEMENTS ==================== */}
      {announcements.length > 0 && (
        <section className="section section-cream" id="announcement">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">What&apos;s Happening</span>
              <h2 className="section-title">Latest Announcements</h2>
              <p className="section-subtitle">
                Stay connected with what God is doing in our community
              </p>
            </div>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <SliderImages announcements={announcements} />
            </div>
          </div>
        </section>
      )}

      {/* ==================== ABOUT SECTION ==================== */}
      <section className="section" id="about">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow mb-4">About Us</span>
              <h2 className="mb-4">
                You found more than a church,<br />
                <span className="text-gradient">you found a family.</span>
              </h2>
              <p className="lead mb-6">
                Welcome to Ignite Church Brussels — a Christian community 
                in the heart of Belgium.
              </p>
              <p className="text-secondary mb-6">
                Our community is rooted in faith in <strong>Jesus</strong>, with a deep 
                belief in the power of <strong>revival</strong>. We are a 
                congregation of believers touched by the <strong>presence of God</strong>, 
                believing in His manifested presence that has the power to change the 
                world around us.
              </p>
              <Link href="/about-ignite" className="btn-primary btn-arrow">
                Learn Our Story
              </Link>
            </div>
            <div className="image-frame">
              <Image 
                src={AboutIgniteImg} 
                alt="About Ignite Church Brussels" 
                className="image-rounded image-shadow"
                width={560} 
                height={460}
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MINISTRIES SECTION ==================== */}
      <section className="section section-dark" id="ministries">
        <div className="container">
          <div className="flex-between mb-12" style={{ flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="eyebrow-light mb-3">Our Ministries</span>
              <h2 className="text-light">Get Involved</h2>
            </div>
            <Link href="/ministries" className="btn-outline-light">
              View All Ministries <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-4 gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {/* Inner Healing Card */}
            <div className="feature-card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="feature-icon" style={{ background: 'rgba(232, 90, 36, 0.2)' }}>
                <Heart />
              </div>
              <h4 className="feature-title text-light">Inner Healing</h4>
              <p className="feature-text text-light-muted">
                The journey to emotional health is an invitation to intimacy with God. 
                Every wound is an opportunity to encounter God as Redeemer and Healer.
              </p>
              <Link href="/ministries/innerhealing" className="btn-ghost mt-4" style={{ color: '#F4A261' }}>
                Learn More <ArrowRight size={16} />
              </Link>
            </div>

            {/* Youth Card */}
            <div className="feature-card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="feature-icon" style={{ background: 'rgba(232, 90, 36, 0.2)' }}>
                <Sparkles />
              </div>
              <h4 className="feature-title text-light">Youth Ministry</h4>
              <p className="feature-text text-light-muted">
                Helping the next generation grow in Christ through 
                activities, mentorship, and community.
              </p>
              <Link href="/ministries/youth" className="btn-ghost mt-4" style={{ color: '#F4A261' }}>
                Learn More <ArrowRight size={16} />
              </Link>
            </div>

            {/* Worship Card */}
            <div className="feature-card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="feature-icon" style={{ background: 'rgba(232, 90, 36, 0.2)' }}>
                <Music />
              </div>
              <h4 className="feature-title text-light">Worship</h4>
              <p className="feature-text text-light-muted">
                Leading our congregation into God&apos;s presence through 
                worship and an anointed music ministry.
              </p>
              <Link href="/ministries/worship" className="btn-ghost mt-4" style={{ color: '#F4A261' }}>
                Learn More <ArrowRight size={16} />
              </Link>
            </div>

            {/* Home Groups Card */}
            <div className="feature-card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="feature-icon" style={{ background: 'rgba(232, 90, 36, 0.2)' }}>
                <Users />
              </div>
              <h4 className="feature-title text-light">Home Groups</h4>
              <p className="feature-text text-light-muted">
                Fellowship with brothers and sisters every other week to grow, 
                belong and go deeper in relationship.
              </p>
              <Link href="/ministries/homegroup" className="btn-ghost mt-4" style={{ color: '#F4A261' }}>
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SCHOOL OF MINISTRY ==================== */}
      <section className="section" id="ism">
        <div className="container">
          <div className="two-col-reverse">
            <div className="text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span className="eyebrow mb-4">Ignite School of Ministry</span>
              <h2 className="mb-4">
                Encountered.<br />
                <span className="text-gradient">Changed.</span><br />
                Sent Out.
              </h2>
              <p className="lead mb-6" style={{ maxWidth: '500px' }}>
                &ldquo;Our mission is to see our students be changed and equipped 
                to make a difference in the world around them and release Heaven on earth.&rdquo;
              </p>
              <a href="https://www.igniteschoolofministry.com/" target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg btn-arrow">
                Explore the School
              </a>
            </div>
            <div>
              <Image 
                src={IsmImg} 
                alt="Ignite School of Ministry"
                className="image-rounded image-shadow"
                width={500}
                height={540}
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                quality={100}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="text-light mb-4">Come hang out with us</h2>
          <p className="lead text-light-muted mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#d95916' }}>
            We&apos;d love to see you this Sunday. Come as you are — 
            you&apos;re always welcome here.
          </p>
          <div className="btn-group justify-center">
            <Link href="https://maps.app.goo.gl/QrMxLi79z9gTyGBg9" target="_blank" className="btn-primary btn-lg">
              <MapPin size={20} />
              Get Directions
            </Link>
            <Link href="/about-ignite" className="btn-outline-light btn-lg">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
