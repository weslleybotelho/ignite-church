'use client';
import Image from 'next/image';
import heroImg from '../img/hero-school.webp';
import school1 from '../img/school-1.png';
import school2 from '../img/school-2.jpg';
import school3 from '../img/school-3.jpg';
import { useGSAP } from '@gsap/react';
import {
  fadeFromBelow,
  fadeFromBelowScroll,
  fadeFromOpacityScroll,
  slideFromLeftScroll,
} from '../utils/gsapAnimations';
import './school.scss';

export default function School() {
  useGSAP(() => {
    fadeFromBelow('#hero > section');
  });

  useGSAP(() => {
    slideFromLeftScroll('#vision > section', '#vision');
    fadeFromBelowScroll('#mission > section', '#mission');
    fadeFromOpacityScroll('#points > section', '#points');
    fadeFromBelowScroll('#years > section', '#years');
    slideFromLeftScroll('#infos > section', '#infos');
  });
  return (
    <>
      <article>
        <header className="bg-ministries">
          <section className="bg-black h-100" id="hero">
            <section className="bg-about relativexs">
              <Image src={heroImg} alt="About Ignite" className="cover hero-school h-100" />
              <header>
                <h1 className="absolute-center absolut color-white text-center uppercase">
                  Ignite School <br />
                  Of Ministry
                </h1>
              </header>
            </section>
          </section>
        </header>
        <section className="relative bg-black" id="vision">
          <section className="container flex-center p-0">
            <section className="grid-6 p-0">
              <Image src={school1} alt="school 1" className="contain h-auto" />
            </section>
            <section className="grid-6">
              <h2 className="uppercase color-white text-center">vision</h2>
              <p className="text-center p1 color-gray-light">
                Equip a generation to walk in the Spirit and to experience God&apos;s radical love for them.
              </p>
            </section>
          </section>
        </section>
        <section className="relative container flex-center py-0" id="mission">
          <section className="grid-6">
            <h2 className="uppercase text-center">mission</h2>
            <p className="p1 text-center color-black">
              See our students be transformed and empowered to reform the world around them and release Heaven on earth.
            </p>
            <p className="mt-3 text-center">
              At Ignite School of Ministries, we are dedicated to cultivating a dynamic environment where individuals
              are empowered to walk in the Spirit and encounter the radical love of God.
            </p>
            <p className="mt-3 text-center">
              Our focus is on the transformation and empowerment of each student, fostering a community that seeks to
              reform the world around them and actively release the presence of Heaven on earth.
            </p>
            <p className="mt-3 text-center">
              Join us on a journey of spiritual growth and impactful learning at ISM, where the pursuit of divine
              understanding and purposeful living takes center stage.
            </p>
          </section>
          <section className="grid-6 ">
            <Image src={school2} alt="school 1" className="contain h-auto school2" />
          </section>
        </section>
        <section className="relative bg-black" id="points">
          <section className="relative container flex-center py-0">
            <section className="grid-6 ">
              <Image src={school3} alt="school 1" className="contain h-auto school2" />
            </section>
            <section className="grid-6">
              <h3 className="uppercase text-center color-white">The school is for you if:</h3>
              <div className="ml-2 mt-3 li-white">
                <li>You feel a call towards ministry</li>
                <li>You want to know your identity as a son and daughter of God</li>
                <li>You want to learn how to walk in the gifts of the Spirit</li>
                <li>You want to impact your sphere of influence by learning how to reflect Jesus</li>
                <li>You want to go deeper in your relationship with God</li>
              </div>
            </section>
          </section>
        </section>
        <section className="container row py-0" id="years">
          <section className="grid-2 disappear"></section>
          <section className="grid-4">
            <h5 className="bold uppercase">First year</h5>
            <div className="ml-2 mt-3">
              <ul className="">
                <li>Identity in Christ</li>
                <li>Intimacy with God</li>
                <li>The gifts of the Spirit (prophetic, healing, miracles, etc.)</li>
                <li>The church and the 5-fold ministry (apostle, prophet, teacher, evangelist, pastor)</li>
                <li>Understanding the call of God upon your life</li>
                <li>Revival history</li>
                <li>And more ...</li>
              </ul>
            </div>
          </section>
          <section className="grid-4">
            <h5 className="bold uppercase">Second year</h5>
            <div className="ml-2 mt-3">
              <ul className="">
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
          </section>
          <section className="grid-2 disappear"></section>
        </section>
        <section className="container row py-0" id="infos">
          <section className="grid-2 disappear"></section>
          <section className="grid-8">
            <h5>Meeting Times</h5>
            <p className="p5 ">April</p>
            <h5 className="mt-3">Contact</h5>
            <p className="p5 ">More information on the school and how to apply via email:</p>
            <a
              href="mailto:ignite.ministryschool@gmail.com?subject = ISM Information&body = Hi, I would like to get more information about the school."
              className="color-gradient">
              ignite.ministryschool@gmail.com
            </a>
          </section>
          <section className="grid-2 disappear"></section>
        </section>
      </article>
    </>
  );
}
