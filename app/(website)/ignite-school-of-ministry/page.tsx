'use client';
import Image from 'next/image';
import heroImg from '../../img/heroSchool2.jpeg';
import school1 from '../../img/school-1.png';
import school5 from '../../img/school-5.jpeg';
import school6 from '../../img/school-6.png';
import { useGSAP } from '@gsap/react';
import { BookOpen, Heart, Zap, Users, Calendar, Mail, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { fadeFromBelow, fadeFromBelowScroll, fadeFromOpacityScroll, slideFromLeftScroll } from '../../utils/gsapAnimations';

const forYouPoints = [
  'You feel a call towards ministry',
  'You want to know your identity as a son and daughter of God',
  'You want to learn how to walk in the gifts of the Spirit',
  'You want to impact your sphere of influence by learning how to reflect Jesus',
  'You want to go deeper in your relationship with God',
];

const years = [
  {
    year: 'First Year',
    theme: 'Encountered',
    description:
      "The first year at ISM is focused on encountering God's love and breaking free from any lies about His nature or our identity.",
    topics: [
      'Identity in Christ',
      'Intimacy with God',
      'The gifts of the Spirit',
      'The church and the 5-fold ministry',
      'Understanding the call of God',
      'Revival history',
      'Ministry trip in Belgium*',
    ],
    price: { early: 325, full: 350 },
  },
  {
    year: 'Second Year',
    theme: 'Transformed',
    description:
      'The second year is focused on being transformed character wise and growing in maturity. Students will take on more responsibility.',
    topics: [
      'Leadership and character',
      'Culture of Honor',
      'Spiritual warfare & Deliverance',
      'Purity, dating & marriage',
      'Emotional health',
      'Preaching activation',
      'Ministry trips*',
    ],
    price: { early: 270, full: 295 },
  },
  {
    year: 'Third Year',
    theme: 'Empowered',
    description:
      'Five classes throughout the year focused on leadership and practical ministry, along with an internship as part of the ISM team.',
    topics: ['Pastoral', 'Missions', 'Administration', 'Worship', 'Creativity', 'Hands-on internship'],
    price: { early: 125, full: 150 },
  },
];

export default function School() {
  useGSAP(() => {
    fadeFromBelow('.page-header-content');
  });

  useGSAP(() => {
    slideFromLeftScroll('#vision .two-col', '#vision');
    fadeFromBelowScroll('#mission .container', '#mission');
    fadeFromOpacityScroll('#for-you .container', '#for-you');
    fadeFromBelowScroll('#years .grid', '#years');
  });

  return (
    <>
      {/* ==================== PAGE HEADER ==================== */}
      <section className="page-header" style={{ minHeight: '70vh' }}>
        <Image src={heroImg} alt="Ignite School of Ministry" fill className="hero-background" style={{ objectFit: 'cover' }} priority />
        <div className="hero-overlay"></div>
        <div className="page-header-content">
          <span className="hero-eyebrow">ISM</span>
          <h1 className="page-header-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Ignite School
            <br />
            of Ministry
          </h1>
          <p className="page-header-subtitle">Equipping a generation to walk in the Spirit</p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="https://forms.gle/ePnwMDS498gHHKn59" target="_blank" className="btn-primary btn-lg">
              Apply Now <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ==================== VISION ==================== */}
      <section className="section" id="vision">
        <div className="container">
          <div className="two-col">
            <div className="image-frame">
              <Image
                src={school1}
                alt="ISM students"
                width={500}
                height={450}
                className="image-rounded image-shadow"
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
            <div>
              <span className="eyebrow mb-4">Our Vision</span>
              <h2 className="mb-4">Experience God&apos;s Radical Love</h2>
              <p className="lead mb-4">Equip a generation to walk in the Spirit and to experience God&apos;s radical love for them.</p>
              <p className="text-secondary">
                Our goal is not merely to give you information but to help facilitate God&apos;s presence to touch and transform you in a
                deep way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MISSION ==================== */}
      <section className="section section-cream" id="mission">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Mission</span>
            <h2 className="section-title">Transformed &amp; Empowered</h2>
          </div>
          <div className="two-col" style={{ alignItems: 'center' }}>
            <div>
              <p className="lead mb-4">
                See our students be transformed and empowered to reform the world around them and release Heaven on earth.
              </p>
              <p className="text-secondary mb-4">
                What you can expect from the first, second and third year is to receive
                <strong> transformational teachings</strong> from our team and
                <strong> local and international</strong> speakers. You can expect to be
                <strong> activated and empowered in ministry</strong> and in the gifts that God has given you.
              </p>
              <p className="text-secondary">
                We will also have <strong>moments of worship</strong> where we&apos;ll
                <strong> pursue God&apos;s presence together</strong>.
              </p>
            </div>
            <div className="image-frame">
              <Image
                src={school6}
                alt="ISM worship"
                width={500}
                height={400}
                className="image-rounded image-shadow"
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOR YOU ==================== */}
      <section className="section section-dark" id="for-you">
        <div className="container">
          <div className="two-col" style={{ alignItems: 'center' }}>
            <div className="image-frame">
              <Image
                src={school5}
                alt="ISM community"
                width={500}
                height={400}
                className="image-rounded image-shadow"
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
            <div>
              <span className="eyebrow mb-4" style={{ color: 'var(--color-brand)' }}>
                Is This For You?
              </span>
              <h2 className="text-light mb-6">The School is For You If...</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {forYouPoints.map((point, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <CheckCircle size={20} className="text-brand" style={{ minWidth: '20px', marginTop: '2px' }} />
                    <p className="text-light-muted" style={{ margin: 0 }}>
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== THREE YEARS ==================== */}
      <section className="section" id="years">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">The Journey</span>
            <h2 className="section-title">Three Years of Transformation</h2>
            <p className="section-subtitle">1 class a month from September to June + 5 going deeper sessions = 15 classes total</p>
          </div>

          <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {years.map((year, index) => (
              <div key={index} className="card" style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    background: 'var(--color-brand)',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    marginBottom: '1rem',
                    alignSelf: 'flex-start',
                  }}>
                  {year.year}
                </div>
                <h3 className="mb-2" style={{ fontStyle: 'italic', color: 'var(--color-brand)' }}>
                  {year.theme}
                </h3>
                <p className="text-secondary mb-4" style={{ fontSize: '0.95rem' }}>
                  {year.description}
                </p>

                <div style={{ flex: 1 }}>
                  <h5 className="mb-3" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Topics Include:
                  </h5>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {year.topics.map((topic, i) => (
                      <li
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          marginBottom: '0.5rem',
                          fontSize: '0.9rem',
                        }}>
                        <span style={{ color: 'var(--color-brand)' }}>•</span>
                        <span className="text-secondary">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  style={{
                    marginTop: '1.5rem',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid var(--color-border)',
                  }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-secondary)' }}>
                        Early Bird
                      </span>
                      <p style={{ fontWeight: 700, fontSize: '1.25rem' }}>€{year.price.early}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-secondary)' }}>
                        Full Price
                      </span>
                      <p style={{ fontWeight: 700, fontSize: '1.25rem' }}>€{year.price.full}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-secondary text-center mt-6" style={{ fontSize: '0.9rem' }}>
            *Ministry and mission trips are not included in the tuition costs.
            <br />
            Early bird pricing applies when paid in full before August 24th.
          </p>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="section section-brand">
        <div className="container">
          <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'center' }}>
            <div>
              <h2 className="text-light mb-4">Ready to Begin Your Journey?</h2>
              <p className="text-light-muted mb-6">
                Applications open in April. Take the first step toward discovering your calling and growing deeper in your relationship with
                God.
              </p>
              <a href="https://forms.gle/ePnwMDS498gHHKn59" target="_blank" className="btn-light btn-lg">
                Apply Now <ArrowRight size={18} />
              </a>
            </div>
            <div>
              <div
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  padding: '2rem',
                  borderRadius: 'var(--radius-lg)',
                }}>
                <h4 className="text-light mb-4">Contact Us</h4>
                <p className="text-light-muted mb-4" style={{ fontSize: '0.95rem' }}>
                  Have questions about ISM? We&apos;d love to hear from you.
                </p>
                <a
                  href="mailto:ignite.ministryschool@gmail.com?subject=ISM Information&body=Hi, I would like to get more information about the school."
                  className="text-light"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={18} />
                  ignite.ministryschool@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
