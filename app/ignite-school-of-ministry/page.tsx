'use client';
import Image from 'next/image';
import bgImg from '../img/school.jpg';
import { useGSAP } from '@gsap/react';
import { fadeFromBelow, slideFromLeftScroll } from '../utils/gsapAnimations';

export default function School() {
  useGSAP(() => {
    fadeFromBelow('#hero > section');
  });

  useGSAP(() => {
    slideFromLeftScroll('#about > section', '#about');
  });
  return (
    <>
      <article>
        <header className="bg-ministries">
          <section className="container row h-100 flex-center" id="hero">
            <section className="grid-6">
              <h1 className="color-white">Ignite School of Ministry</h1>
              <p>Be equiped to release Heaven on earth.</p>
              <a href="mailto:ignite.ministryschool@gmail.com" className="btn-orange mt-3 p-1">
                Send email
              </a>
            </section>
            <section className="grid-6">
              <Image
                src={bgImg}
                alt="Ignite School of Ministries background"
                height={400}
                className="cover img-mobile"
              />
            </section>
          </section>
        </header>
        <section>
          <section className="container" id="about">
            <section className="row">
              <div className="grid-2 disappear"></div>
              <div className="grid-8">
                <h2>
                  About <br />
                  Ignite School of Ministry
                </h2>
                <h3 className="mt-3">Vision</h3>
                <p className="p3 color-black ">
                  Equip a generation to walk in the Spirit and to experience God&apos;s radical love for them.
                </p>
                <h3 className="mt-3">Mission</h3>
                <p className="p3 color-black ">
                  See our students be transformed and empowered to reform the world around them and release Heaven on
                  earth.
                </p>
                <p className="p3 color-black mt-3">
                  At Ignite School of Ministries, we are dedicated to cultivating a dynamic environment where
                  individuals are empowered to walk in the Spirit and encounter the radical love of God. Our focus is on
                  the transformation and empowerment of each student, fostering a community that seeks to reform the
                  world around them and actively release the presence of Heaven on earth. Join us on a journey of
                  spiritual growth and impactful learning at ISM, where the pursuit of divine understanding and
                  purposeful living takes center stage.
                </p>
                <h4 className="mt-3">The school is for you if:</h4>
                <div className="ml-2">
                  <li>You feel a call towards ministry</li>
                  <li>You want to know your identity as a son and daughter of God</li>
                  <li>You want to learn how to walk in the gifts of the Spirit</li>
                  <li>You want to impact your sphere of influence by learning how to reflect Jesus</li>
                  <li>You want to go deeper in your relationship with God</li>
                </div>
              </div>
              <div className="grid-2 disappear"></div>
            </section>
            <section className="row">
              <div className="grid-2 disappear"></div>
              <div className="grid-4">
                <h5>First year</h5>
                <div className="ml-2">
                  <ul className="none-bullet">
                    <li>Identity in Christ</li>
                    <li>Intimacy with God</li>
                    <li>The gifts of the Spirit (prophetic, healing, miracles, etc.)</li>
                    <li>The church and the 5-fold ministry (apostle, prophet, teacher, evangelist, pastor)</li>
                    <li>Understanding the call of God upon your life</li>
                    <li>Revival history</li>
                    <li>And more ...</li>
                  </ul>
                </div>
              </div>
              <div className="grid-4">
                <h5>Second year</h5>
                <div className="ml-2">
                  <ul className="none-bullet">
                    <li>Leadership and character</li>
                    <li>Culture of Honor</li>
                    <li>Spiritual warfare & Deliverance</li>
                    <li>Purity, dating & marriage</li>
                    <li>Emotional health</li>
                    <li>Preaching activation</li>
                    <li>Ministry trip</li>
                    <li>And more ...</li>
                  </ul>
                </div>
              </div>
              <div className="grid-2 disappear"></div>
            </section>
            <section className="row">
              <div className="grid-2 disappear"></div>
              <div className="grid-8">
                <h5>Meeting Times</h5>
                <p className="p5 color-black">April</p>
                <h5 className="mt-3">Contact</h5>
                <p className="p5 color-black">More information on the school and how to apply via email:</p>
                <a
                  href="mailto:ignite.ministryschool@gmail.com?subject = ISM Information&body = Hi, I would like to get more information about the school."
                  className="color-gradient">
                  ignite.ministryschool@gmail.com
                </a>
              </div>
              <div className="grid-2 disappear"></div>
            </section>
          </section>
        </section>
      </article>
    </>
  );
}
