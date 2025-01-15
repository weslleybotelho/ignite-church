'use client';
import Image from 'next/image';
import giveHero from '../../img/give-background.png';
import sponsors from '../../img/SPONSOR.jpg';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  fadeFromBelow,
  fadeFromOpacityScroll,
  slideFromLeftScroll,
  slideFromRightScroll,
} from '../../utils/gsapAnimations';
import Link from 'next/link';

export default function Supporters() {
  useGSAP(() => {
    fadeFromBelow('#hero > section');
  });

  useGSAP(() => {
    fadeFromOpacityScroll('#about > section', '#about');
    slideFromLeftScroll('#pastors > div', '#pastors');
    slideFromRightScroll('#core-values div', '#core-values');
  });
  return (
    <>
      <article>
        {/* <section className="bg-black" id="hero">
          <section className=" relative">
            <Image src={giveHero} alt="Give Background" className="img-hero" />
            <header>
              <h1 className="absolute-center absolut color-white text-center w-100">OUR SUPPORTERS</h1>
            </header>
          </section>
        </section> */}
        <section>
          <Image src={sponsors} alt="Sponsors page" className="h-100p pt-5" />
        </section>
      </article>
    </>
  );
}
