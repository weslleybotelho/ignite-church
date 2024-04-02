'use client';
import Image from 'next/image';
import evangelismImg from '../../img/evangelism_bg.webp';
import { useGSAP } from '@gsap/react';
import { fadeFromBelow, fadeFromBelowScroll, slideFromLeftScroll } from '@/app/utils/gsapAnimations';

export default function Evangelism() {
  useGSAP(() => {
    fadeFromBelow('#hero > section');
  });
  useGSAP(() => {
    slideFromLeftScroll('#vision > div', '#vision');
    fadeFromBelowScroll('#infos > div', '#infos');
  });
  return (
    <>
      <article>
        <header className="bg-ministries">
          <section className="bg-black h-100" id="hero">
            <section className="bg-about relativexs">
              <Image src={evangelismImg} alt="About Ignite" className="cover h-100 filter-black50" />
              <header>
                <h1 className="absolute-center absolut color-white text-center uppercase">Ignite Evangelism</h1>
              </header>
            </section>
          </section>
        </header>

        <section className="bg-black">
          <div className="container" id="vision">
            <div className="row flex-center-revert-mobile">
              <div className="grid-6">
                <h2 className="uppercase text-center color-white">mission</h2>
              </div>
              <div className="grid-6 pb-0">
                <div>
                  <p className="p3 color-gray-light">
                    The mission of Ignite Evangelism is to passionately share the Gospel of Jesus Christ throughout the
                    city of Brussels, facilitating transformative encounters with God through Jesus. To fulfill this
                    mission, we organize a variety of impactful activities aimed at reaching and connecting with people
                    in our community.
                  </p>
                  <div className="ml-2 mt-3 color-gray-light">
                    <li>A mini-training session to prepare, equip and empower people.</li>
                    <li>
                      Distribution of food, clothing and accessories for people in need during the Christmas period.
                    </li>
                    <li>Gift distribution for Valentine&apos;s Day.</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="" id="infos">
          <div className="container">
            <h6 className="mt-3 ">Meeting times</h6>
            <div className="ml-2 mt-2">
              <li className="none-bullet">First Sunday of every month after service</li>
            </div>
            <h6 className="mt-3">Location</h6>
            <div className="ml-2 mt-2">
              <li className="none-bullet">Ignite Brussels</li>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
