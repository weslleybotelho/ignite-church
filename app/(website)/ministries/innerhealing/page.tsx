'use client';
import Image from 'next/image';
import innerHealing from '../../../img/inner-healing-bg.jpeg';
import { useGSAP } from '@gsap/react';
import { Heart, Sparkles, Shield, ArrowLeft, CheckCircle, BookOpen, MessageCircle, HandHeart } from 'lucide-react';
import Link from 'next/link';
import { fadeFromBelow, fadeFromOpacityScroll } from '@/app/utils/gsapAnimations';

const principles = [
  {
    title: 'Forgiveness',
    description: 'Releasing others sets us free. Forgiveness is a choice of obedience to God.',
    icon: Heart,
  },
  {
    title: 'Confession and Repentance',
    description: 'Leads to freedom. Involves renouncing sin and receiving forgiveness.',
    icon: Shield,
  },
  {
    title: 'Renouncing Lies',
    description: "Replace lies with God's truth and embrace your true identity in Christ.",
    icon: Sparkles,
  },
  {
    title: 'Receiving Healing',
    description: 'Let the Holy Spirit bring truth and breakthrough into every area of your life.',
    icon: HandHeart,
  },
];

const sessionSteps = [
  { step: 'Choosing a Topic', description: 'Fill out a form to identify your focus areas.' },
  { step: 'Prayer and Connection', description: "We start in prayer, inviting God's presence." },
  { step: 'Conversation', description: 'We explore root causes of emotional or spiritual issues.' },
  { step: 'Ministry Time', description: 'With the Holy Spirit, we walk through forgiveness, repentance, and healing.' },
  { step: 'Closing Prayer', description: 'We seal the session with blessing and encouragement.' },
];

export default function InnerHealing() {
  useGSAP(() => {
    fadeFromBelow('.page-header-content');
  });

  useGSAP(() => {
    fadeFromOpacityScroll('#what .container', '#what');
  });

  return (
    <>
      {/* ==================== PAGE HEADER ==================== */}
      <section className="page-header" style={{ minHeight: '70vh' }}>
        <Image src={innerHealing} alt="Inner Healing Ministry" fill className="hero-background" style={{ objectFit: 'cover' }} priority />
        <div className="hero-overlay"></div>
        <div className="page-header-content">
          <span className="hero-eyebrow">Ministry</span>
          <h1 className="page-header-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Ignite Inner Healing
          </h1>
          <p className="page-header-subtitle">Freedom and Wholeness in Christ</p>
          <Link href="/ministries" className="btn-ghost btn-sm" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)', marginTop: '1.5rem', display: 'inline-block' }}>
            <ArrowLeft size={16} />
            Back to Ministries
          </Link>
        </div>
      </section>

      {/* ==================== WHAT IS INNER HEALING ==================== */}
      <section className="section" id="what">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Understanding</span>
            <h2 className="section-title">What is Inner Healing?</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <blockquote
              style={{
                background: 'var(--color-cream)',
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                borderLeft: '4px solid var(--color-brand)',
                marginBottom: '2rem',
                fontStyle: 'italic',
              }}>
              <p className="text-secondary mb-2">
                &ldquo;Inner healing is the application of the crucified and resurrected life of Jesus Christ and His blood to those parts
                of my heart and yours that did not fully &lsquo;get the message&rsquo; when we first received Jesus as Savior. Inner healing
                is the evangelism to the unbelieving hearts of believers.&rdquo;
              </p>
              <cite style={{ fontWeight: 600, fontStyle: 'normal' }}>— John Loren and Mark Sandford</cite>
            </blockquote>

            <p className="text-secondary mb-4">
              When we are born again, our spirit becomes alive and Jesus comes to dwell inside of us. But wounds from our past, lies, and
              fears can still influence our lives. Our soul still needs healing and our mind needs renewing (Romans 12:2).
            </p>
            <p className="text-secondary mb-4">
              Every unhealthy behavior or habit often has a root – a lie, painful memory, or soul tie. Jesus came to restore what the enemy
              has stolen (John 10:10).
            </p>
            <p className="text-secondary">
              The journey to emotional health is an invitation to intimacy with God. Every wound is an opportunity to encounter God as
              Redeemer, Healer, and Comforter.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== WHAT IT'S NOT ==================== */}
      <section className="section section-cream">
        <div className="container">
          <div
            className="grid gap-12"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', maxWidth: '900px', margin: '0 auto' }}>
            <div>
              <h3 className="mb-6">
                What Inner Healing is{' '}
                <span
                  style={{
                    background: 'var(--color-secondary)',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                  }}>
                  Not
                </span>
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--color-brand)', fontWeight: 'bold' }}>✕</span>
                  <span className="text-secondary">Pastoral counseling</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--color-brand)', fontWeight: 'bold' }}>✕</span>
                  <span className="text-secondary">Mentoring</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--color-brand)', fontWeight: 'bold' }}>✕</span>
                  <span className="text-secondary">Long-term follow-up</span>
                </div>
              </div>
              <p className="text-secondary mt-4" style={{ fontSize: '0.9rem' }}>
                We offer issue-focused healing sessions, aiming for breakthrough in one or two appointments. For long-term care, we refer to
                professional counselors.
              </p>
            </div>

            <div>
              <h3 className="mb-6">Principles of Inner Healing</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {principles.map((principle, index) => {
                  const IconComponent = principle.icon;
                  return (
                    <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <div style={{ color: 'var(--color-brand)', minWidth: '24px' }}>
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <strong>{principle.title}:</strong> <span className="text-secondary">{principle.description}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOW SESSIONS WORK ==================== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">The Process</span>
            <h2 className="section-title">How Does a Session Work?</h2>
          </div>

          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            {sessionSteps.map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  marginBottom: '1.5rem',
                  paddingBottom: '1.5rem',
                  borderBottom: index < sessionSteps.length - 1 ? '1px solid var(--color-border)' : 'none',
                }}>
                <div
                  style={{
                    background: 'var(--color-brand)',
                    color: 'white',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    minWidth: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                  }}>
                  {index + 1}
                </div>
                <div>
                  <h4 style={{ marginBottom: '0.5rem' }}>{item.step}</h4>
                  <p className="text-secondary" style={{ margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <div className="feature-icon mx-auto mb-6" style={{ background: 'rgba(232, 90, 36, 0.2)', width: '80px', height: '80px' }}>
            <HandHeart size={36} />
          </div>
          <h2 className="text-light mb-4">Want to Know More?</h2>
          <p className="lead text-light-muted mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#EF702D' }}>
            Take the first step toward freedom and wholeness. Our trained ministry team is here to walk with you through the healing
            process.
          </p>
          <a href="mailto:info@ignitechurch.be" className="btn-primary btn-lg">
            Request a Session
          </a>
        </div>
      </section>
    </>
  );
}
