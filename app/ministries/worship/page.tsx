'use client';
import Image from 'next/image';
import heroImg from '../../img/music.jpg';
import school1 from '../../img/worship1-min.webp';
import school2 from '../../img/worship2-min.webp';
import school3 from '../../img/music.jpg';
import { useGSAP } from '@gsap/react';
import {
  fadeFromBelow,
  fadeFromBelowScroll,
  fadeFromOpacityScroll,
  slideFromLeftScroll,
} from '../../utils/gsapAnimations';

export default function Worship() {
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
                <h1 className="absolute-center absolut color-white text-center uppercase">Ignite Worship</h1>
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
                Ignite Worship is a movement of sons and daughters who worship Jesus or what He has done and who He is.
                We are a family. We are passionate worshippers of Him. We burn for Him. We are hungry and thirsty for
                Jesus.
              </p>
            </section>
          </section>
        </section>
        <section className="relative container flex-center py-0" id="mission">
          <section className="grid-6">
            <h2 className="uppercase text-center">values</h2>
            <h6>Presence and Prophetic</h6>
            <p className="text-center color-black">
              Cultivating and valuing the Presence of God and a prophetic culture in our midst and in everything we do.
              Seeking alignment with God&apos;s heart and desires.{' '}
            </p>
            <h6 className="mt-2">Collaboration and Communication</h6>
            <p className="text-center color-black">
              Fostering a culture of open and transparent communication. Actively listening, sharing relevant
              information, and encouraging constructive feedback. Prioritizing collaboration above individual ambitions.
            </p>
            <h6 className="mt-2">Flexibility, Freedom, and Creativity</h6>
            <p className="text-center color-black">
              Embracing flexibility and openness to the Holy Spirit&apos;s leading, even when uncomfortable. Creating an
              environment of freedom where everyone feels valued and can contribute. Encouraging creativity and
              innovative ideas.
            </p>
            <h6 className="mt-2">Accountability and Responsibility</h6>
            <p className="text-center color-black">
              Taking ownership of responsibilities and holding ourselves and each other accountable. Delivering on
              commitments, learning from mistakes, and seeking continuous improvement.
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
              <h6 className="mt-2 color-white">Purity and integrity</h6>
              <p className="text-center color-white">
                Upholding the biblical standards in all our actions and decisions. Integrity and purity will be our
                guiding principle, and we will lead by example, demonstrating honesty, fairness, and transparency, etc.
              </p>
              <h6 className="mt-2 color-white">Prayer and intercession</h6>
              <p className="text-center color-white">
                Pray and intercede for the worship team and its members as well as the members of the core team worship.
                We want to bath everything we do with prayer.
              </p>
              <h6 className="mt-2 color-white">Excellency</h6>
              <p className="text-center color-white">
                Give God our best. We will give time to practice our skills in order to be better and give God what He
                is worthy of. The goal is not perfection but excellence. The heart behind an excellent heart is giving
                something that costs us.
              </p>
            </section>
          </section>
        </section>
        {/* <section className="container row py-0" id="infos">
          <section className="grid-2 disappear"></section>
          <section className="grid-8">
            <h5 className="mt-3">Contact</h5>
            <p className="p5 color-black">Worship team for more information</p>
          </section>
          <section className="grid-2 disappear"></section>
        </section> */}
      </article>
    </>
  );
}
