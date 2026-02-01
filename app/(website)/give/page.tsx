'use client';
import Image from 'next/image';
import giveHero from '../../img/give-background.png';
import { useGSAP } from '@gsap/react';
import { Heart, CreditCard, Building, Landmark, Gift, ArrowRight, Home } from 'lucide-react';
import Link from 'next/link';
import { fadeFromBelow, fadeFromOpacityScroll, slideFromLeftScroll } from '../../utils/gsapAnimations';

export default function Give() {
  useGSAP(() => {
    fadeFromBelow('.page-header-content');
  });

  useGSAP(() => {
    fadeFromOpacityScroll('#why .container', '#why');
    slideFromLeftScroll('#ways .container', '#ways');
  });

  return (
    <>
      {/* ==================== PAGE HEADER ==================== */}
      <section className="page-header" style={{ minHeight: '60vh' }}>
        <Image src={giveHero} alt="Give - Tithe and Offering" fill className="hero-background" style={{ objectFit: 'cover' }} priority />
        <div className="hero-overlay"></div>
        <div className="page-header-content">
          <span className="hero-eyebrow">Generosity</span>
          <h1 className="page-header-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Tithe &amp; Offering
          </h1>
          <p className="page-header-subtitle">Worship through your generosity</p>
        </div>
      </section>

      {/* ==================== WHY WE GIVE ==================== */}
      <section className="section" id="why">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow mb-4">Why We Give</span>
              <h2 className="mb-4">Worship through Tithe and Offering</h2>
              <p className="text-secondary mb-4">
                The concept of tithing and giving offerings is deeply rooted in biblical teachings and serves as an expression of worship,
                gratitude, and trust in God.
              </p>
              <p className="text-secondary mb-4">
                The first mention of tithing in the Bible is found in Genesis 14, where Abram honored God after a victorious battle by
                giving a tithe to Melchizedek, a priest who represented God. Through this act, Abram recognized God&apos;s provision and
                sovereignty in his life.
              </p>
              <p className="text-secondary">
                Giving tithes and offerings is a way to honor God with the resources He has entrusted to us, supporting His work on earth
                and reflecting our trust in His provision.
              </p>
            </div>
            <div>
              <blockquote
                style={{
                  background: 'var(--color-cream)',
                  padding: '2rem',
                  borderRadius: 'var(--radius-lg)',
                  borderLeft: '4px solid var(--color-brand)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <p className="lead" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                  &ldquo;Honor the Lord with your wealth, with the firstfruits of all your crops; then your barns will be filled to
                  overflowing, and your vats will brim over with new wine.&rdquo;
                </p>
                <cite style={{ fontWeight: 600, color: 'var(--color-brand)' }}>— Proverbs 3:9-10</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WAYS TO GIVE ==================== */}
      <section className="section section-cream" id="ways">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Give Today</span>
            <h2 className="section-title">Ways to Contribute</h2>
            <p className="section-subtitle">Choose the method that works best for you to support our mission.</p>
          </div>

          <div
            className="grid gap-8"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', maxWidth: '800px', margin: '0 auto' }}>
            {/* Bank Transfer */}
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div className="feature-icon mx-auto mb-4" style={{ width: '64px', height: '64px' }}>
                <Landmark size={28} />
              </div>
              <h3 className="mb-4">Bank Transfer</h3>
              <div style={{ background: 'var(--color-cream)', padding: '1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>
                <p className="text-secondary" style={{ marginBottom: '0.5rem' }}>
                  Ignite Church Ministries
                </p>
                <p style={{ fontWeight: 700, fontSize: '1.1rem', fontFamily: 'monospace' }}>BE22 0689 4526 7047</p>
              </div>
              <p className="text-secondary" style={{ fontSize: '0.9rem' }}>
                Transfer directly to our bank account
              </p>
            </div>

            {/* Online Giving */}
            <div className="card" style={{ padding: '2rem', textAlign: 'center', border: '2px solid var(--color-brand)' }}>
              <div className="feature-icon mx-auto mb-4" style={{ width: '64px', height: '64px', background: 'var(--color-brand)' }}>
                <CreditCard size={28} color="white" />
              </div>
              <h3 className="mb-4">Online Giving</h3>
              <p className="text-secondary mb-6">
                Give securely using Apple Pay, Google Pay, or Credit Card through our safe online platform.
              </p>
              <a
                href="https://donate.stripe.com/28oeVM4Ym27969q006"
                target="_blank"
                className="btn-primary btn-lg"
                style={{ width: '100%', justifyContent: 'center' }}>
                Give Now
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BUILDING FUND ==================== */}
      <section className="section section-dark">
        <div className="container">
          <div className="two-col" style={{ alignItems: 'center' }}>
            <div>
              <span className="eyebrow mb-4" style={{ color: 'var(--color-brand)' }}>
                Special Project
              </span>
              <h2 className="text-light mb-4">Building Dreams, Shaping Futures</h2>
              <p className="text-light-muted mb-4">
                At Ignite Church, we&apos;re on a heartfelt journey to create a lasting home — not just a building, but a place where dreams
                can grow and lives can be transformed.
              </p>
              <p className="text-light-muted mb-6">
                We envision a space that meets the diverse needs of our community. With your support, we aim to create a hub that not only
                serves our attendees but also extends a welcoming hand to the people of Brussels, spreading the transformative message of
                God&apos;s love throughout our city.
              </p>
              <a href="https://donate.stripe.com/dR63d476ucLN41i00a" target="_blank" className="btn-primary btn-lg">
                <Gift size={20} />
                Donate to Building Fund
              </a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  background: 'rgba(232, 90, 36, 0.15)',
                  borderRadius: '50%',
                  width: '280px',
                  height: '280px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Home size={100} color="var(--color-brand)" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CHEERFUL GIVER ==================== */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="feature-icon mx-auto mb-6" style={{ width: '80px', height: '80px' }}>
            <Heart size={36} />
          </div>
          <h3 className="mb-4">God Loves a Cheerful Giver</h3>
          <p className="text-secondary mb-6" style={{ maxWidth: '600px', margin: '0 auto 1.5rem' }}>
            &ldquo;Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a
            cheerful giver.&rdquo;
          </p>
          <p className="text-secondary" style={{ fontWeight: 600 }}>
            — 2 Corinthians 9:7
          </p>
        </div>
      </section>

      {/* ==================== SUPPORTERS CTA ==================== */}
      <section className="section section-brand" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="text-light mb-4">Our Supporters</h2>
          <p className="lead text-light-muted mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Check out the businesses that support our mission and help us make an impact.
          </p>
          <Link href="/supporters" className="btn-light btn-lg">
            View Our Supporters
          </Link>
        </div>
      </section>
    </>
  );
}
