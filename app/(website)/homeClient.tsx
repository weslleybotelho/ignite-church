'use client';
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

type Props = {
  imageFiles: string[];
};

export default function HomeClient({ imageFiles }: Props) {
  useGSAP(() => {
    fadeFromBelow('#hero .hero-content');
  });

  useGSAP(() => {
    fadeFromBelowScroll('#announcement .section-header', '#announcement');
    slideFromLeftScroll('#about .two-col', '#about');
    fadeFromOpacityScroll('#ministries .grid', '#ministries');
    fadeFromBelowScroll('#ism .two-col', '#ism');
    fadeFromOpacityScroll('#newsletter .newsletter-content', '#newsletter');
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
            Join our vibrant community every Sunday at 10:00 AM for powerful worship, 
            transformative teaching, and authentic fellowship.
          </p>
          <div className="btn-group justify-center">
            <Link href="https://maps.app.goo.gl/QrMxLi79z9gTyGBg9" target="_blank" className="btn-primary btn-lg btn-arrow">
              <MapPin size={20} />
              Visit Us Sunday
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
            <SliderImages imageFiles={imageFiles} />
          </div>
        </div>
      </section>

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
                Welcome to Ignite Church Brussels — a vibrant Christian community 
                nestled in the heart of Belgium.
              </p>
              <p className="text-secondary mb-6">
                Our community is rooted in faith in <strong>Jesus</strong>, with a fervent 
                belief in the transformative power of <strong>revival</strong>. We are a 
                congregation of believers touched by the <strong>presence of God</strong>, 
                believing in His manifested presence that has the power to transform the 
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
              <h2 className="text-light">Find Your Place</h2>
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
                Empowering the next generation to live boldly for Christ through 
                engaging activities, mentorship, and community.
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
                Leading our congregation into God&apos;s presence through powerful 
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
                <span className="text-gradient">Transformed.</span><br />
                Empowered.
              </h2>
              <p className="lead mb-6" style={{ maxWidth: '500px' }}>
                &ldquo;Our mission is to see our students be transformed and empowered 
                to reform the world around them and release Heaven on earth.&rdquo;
              </p>
              <Link href="/ignite-school-of-ministry" className="btn-primary btn-lg btn-arrow">
                Explore the School
              </Link>
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

      {/* ==================== NEWSLETTER ==================== */}
      <section className="section section-cream" id="newsletter">
        <div className="container">
          <div className="newsletter-content" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <span className="eyebrow mb-4">Stay Connected</span>
            <h2 className="mb-4">Join Our Newsletter</h2>
            <p className="section-subtitle mb-8">
              Get the latest updates, event announcements, and encouragement 
              delivered straight to your inbox.
            </p>
            
            <form 
              action="https://formsubmit.co/7aaf31e9c1e59aa2047a15acd2c62b39" 
              method="POST" 
              className="flex-col-center gap-4"
            >
              <div className="grid gap-4" style={{ width: '100%', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                <input 
                  type="text" 
                  name="first-name" 
                  placeholder="First Name" 
                  required 
                  className="form-input"
                />
                <input 
                  type="text" 
                  name="last-name" 
                  placeholder="Last Name" 
                  required 
                  className="form-input"
                />
              </div>
              <input 
                type="email" 
                name="email" 
                placeholder="Email Address" 
                required 
                className="form-input"
                style={{ width: '100%' }}
              />
              <button type="submit" className="btn-primary btn-lg btn-full mt-2">
                Subscribe to Newsletter
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="text-light mb-4">Ready to Experience More?</h2>
          <p className="lead text-light-muted mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            We&apos;d love to welcome you this Sunday. Come as you are and 
            discover a community that will walk alongside you in your faith journey.
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
