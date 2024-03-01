'use client';
import Image from 'next/image';
import heroImg from '../../img/hero-homegroup.webp';
import homeGroup2Img from '../../img/homegroup2.webp';
import { useGSAP } from '@gsap/react';
import {
  fadeFromBelow,
  fadeFromBelowScroll,
  slideFromLeftScroll,
  slideFromRightScroll,
} from '@/app/utils/gsapAnimations';

export default function HomeGroup() {
  useGSAP(() => {
    fadeFromBelow('#hero');
  });

  useGSAP(() => {
    slideFromLeftScroll('#story > div', '#story');
    slideFromRightScroll('#story2 > div', '#story2');
    fadeFromBelowScroll('#infos > div', '#infos');
  });
  return (
    <>
      <article>
        <header className="bg-ministries">
          <section className="bg-black h-100" id="hero">
            <section className="bg-about relativexs">
              <Image src={heroImg} alt="About Ignite" className="cover h-100 filter-black50" />
              <header>
                <h1 className="absolute-center absolut color-white text-center uppercase">Ignite Home Group</h1>
              </header>
            </section>
          </section>
        </header>

        <section>
          <div className="container ">
            <div className="row flex-center-revert-mobile" id="story">
              <div className="grid-6">
                <h2 className="uppercase text-center">story</h2>
              </div>
              <div className="grid-6 pb-0">
                <div>
                  <p className="p3 color-black ">
                    Ignite Church started in the living room of Pastor Maldo and Pastor Jasmine in 2016. Today, in
                    addition to Sundays, we meet one at homes around Brussels and Antwerp with the purpose of building
                    christ-like relationships with each other.
                  </p>
                  <p className="p3 color-black mt-1">
                    Community was always made to be Jesus&apos; school of love as the world will know we are His
                    disciples by the love we have for each other. This love can only be ignited through authentic
                    interactions of individuals gathering as one heart with one purpose : be a pleasing sacrifice to
                    their Father.
                  </p>
                </div>
              </div>
            </div>
            <div className="row flex-center-revert-mobile" id="story2">
              <div className="grid-6 py-0">
                <p className="p3 color-black">
                  For Jesus, his community of disciples was not just another kind of community like a school or a sport
                  club, it actually was his family: He replied to him, “Who is my mother, and who are my brothers?”
                  Pointing to his disciples, he said, “Here are my mother and my brothers. For whoever does the will of
                  my Father in heaven is my brother and sister and mother. - Matthew 12:48-50
                </p>
              </div>
              <div className="grid-6">
                <Image src={homeGroup2Img} alt="Old picture from first home group at Ignite" className="mb-1 cover" />
                <p className="p3 mt-4 color-black">
                  Therefore, we want to extend to you the invitation to get plugged in in one of our homegroups : to
                  belong, to practice the way of Jesus, to grow, to strengthen your commitment toward Him,...
                </p>
              </div>
            </div>
            <div className="row" id="infos">
              <div>
                <h6 className="mt-3">Meeting times</h6>
                <div className="ml-2 mt-2">
                  <li className="none-bullet">Every other week</li>
                </div>
                <h6 className="mt-3">Location</h6>
                <div className="ml-2 mt-2">
                  <li className="none-bullet">Brussels</li>
                  <li className="none-bullet">Antwerp</li>
                </div>
                <p className="p5 color-black mt-1">More information about the addresses please contact by email:</p>
                <a href="mailto:ignitechurchbrussels@gmail.com" className="color-gradient">
                  ignitechurchbrussels@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
