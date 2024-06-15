'use client';
import Image from 'next/image';
import heroYouth from '../../img/hero-youth.webp';
import youth1 from '../../img/youth1.webp';
import { useGSAP } from '@gsap/react';
import {
  fadeFromBelow,
  fadeFromOpacityScroll,
  slideFromLeftScroll,
  slideFromRightScroll,
} from '@/app/utils/gsapAnimations';

export default function Youth() {
  useGSAP(() => {
    fadeFromBelow('#hero > section');
  });

  useGSAP(() => {
    fadeFromOpacityScroll('#story > div', '#story');
    slideFromLeftScroll('#story2 > div', '#story2');
    slideFromRightScroll('#infos > div', '#infos');
  });
  return (
    <>
      <article>
        <header className="bg-ministries">
          <section className="bg-black h-100" id="hero">
            <section className="bg-about relativexs">
              <Image src={heroYouth} alt="About Ignite" className="cover h-100 filter-black50" />
              <header>
                <h1 className="absolute-center absolut color-white text-center uppercase">Youth Ministry</h1>
              </header>
            </section>
          </section>
        </header>

        <section className="bg-black">
          <div className="container" id="story">
            <div className="row flex-center-revert-mobile">
              <div className="grid-6">
                <h2 className="uppercase text-center color-white">Launched in October 2023</h2>
              </div>
              <div className="grid-6 pb-0">
                <div>
                  <p className="p3 color-gray-light">
                    Ignite Youth Ministry (IYM) is a group of young people aged from 12 to 25 years old that are sold
                    for Jesus and His Kingdom and are ready to be equipped and taught to make a difference wherever God
                    calls them to.
                  </p>
                  <p className="p3 mt-2 color-gray-light">
                    It is also a place to build healthy and long-lasting friendships that glorify God and help us to
                    finish the race on planet earth. Most importantly it is a place where young people can learn what it
                    means to have their identity anchored in Jesus-Christ, the perfect model.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="row flex-center-revert-mobile" id="story2">
            <div className="grid-6 py-0">
              <p className="p3">
                For Jesus, his community of disciples was not just another kind of community like a school or a sport
                club, it actually was his family: He replied to him, “Who is my mother, and who are my brothers?”
                Pointing to his disciples, he said, “Here are my mother and my brothers. For whoever does the will of my
                Father in heaven is my brother and sister and mother. - Matthew 12:48-50
              </p>
            </div>
            <div className="grid-6">
              <Image src={youth1} alt="Old picture from first home group at Ignite" className="contain h-auto" />
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
                <li className="none-bullet">Tribes Office</li>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
