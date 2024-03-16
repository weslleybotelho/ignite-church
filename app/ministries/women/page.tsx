'use client';
import Image from 'next/image';
import bgWomen from '../../img/bg-women.jpg';
import women1 from '../../img/women1.png';
import { fadeFromBelow, fadeFromBelowScroll, slideFromLeftScroll } from '@/app/utils/gsapAnimations';
import { useGSAP } from '@gsap/react';

export default function Women() {
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
              <Image src={bgWomen} alt="About Ignite" className="cover h-100 filter-black50" />
              <header>
                <h1 className="absolute-center absolut color-white text-center uppercase">Women Ministry</h1>
              </header>
            </section>
          </section>
        </header>

        <section className="bg-black pt-8 pb-9">
          <div className="container pt-0 pb-9-back" id="vision">
            <div className="row flex-center-revert-mobile">
              <div className="grid-6">
                <h2 className="uppercase text-center color-white">Vision</h2>
              </div>
              <div className="grid-6 pb-0">
                <div>
                  <h3 className="color-white">Empower each other in our natural and spiritual abilities</h3>
                  <div className="ml-2">
                    <ul className="color-white">
                      <li>Expand our capabilities on a personnel and professional level</li>
                      <li>
                        Know ourselves, our inner strengths and confidence in order to conquer life and its challenges
                      </li>
                      <li>Support each other by encouraging and praying for each other</li>
                      <li>Fully embrace and walk in the new identity that we have in Christ</li>
                      <li>Create a place where you can be transparent and vulnerable</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-0">
          <div className="row flex-center-revert-mobile " id="infos">
            <div className="grid-1 disappear"></div>
            <div className="grid-10">
              <Image
                src={women1}
                alt="Old picture from first home group at Ignite"
                className="contain h-auto img-women1"
              />

              <div className="women-paragraph">
                <p className="color-gray mt-4">
                  Our focus is on fostering inner strength and confidence rooted in our identity in Christ, enabling us
                  to overcome life&apos;s challenges with resilience and grace. Through mutual support, encouragement,
                  and prayer, we create a safe space where transparency and vulnerability are celebrated. Join us as we
                  journey together, embracing our unique journeys and empowering one another to thrive in every aspect
                  of life.
                </p>
                <h6 className="mt-5">Meeting times</h6>
                <div className="ml-2 mt-2">
                  <li className="none-bullet">Every 3rd Sunday</li>
                </div>
                <h6 className="mt-3">Location</h6>
                <div className="ml-2 mt-2">
                  <li className="none-bullet">Tribes Office after service</li>
                </div>
              </div>
            </div>
            <div className="grid-1 disappear"></div>
          </div>
        </section>
      </article>
    </>
  );
}
