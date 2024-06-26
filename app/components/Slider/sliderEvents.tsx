'use client';
import Image from 'next/image';
import Link from 'next/link';

import PresenceImg from '../../img/presence-conference.jpeg';
import AriseImg from '../../img/arise.jpg';
import EvangelismImg from '../../img/evangelism.jpg';

import { useRef } from 'react';

export default function SliderEvents() {
  const prev = useRef<HTMLButtonElement>(null);
  const next = useRef<HTMLButtonElement>(null);
  const list = useRef<HTMLDivElement>(null);

  const itemWidth = 150;
  const padding = 10;

  function handlerPrevButton() {
    if (list.current) {
      list.current.scrollLeft -= itemWidth + padding;
    }
  }

  function handlerNextButton() {
    if (list.current) {
      list.current.scrollLeft += itemWidth - padding;
    }
  }

  return (
    <>
      <section className="container py-1">
        <h5 className="uppercase color-gradient" style={{ display: '' }}>
          events
        </h5>
        <p className=" color-black">Take a look in our next events</p>
        <section className="carousel-view">
          <button id="prev-btn" className="prev-btn" ref={prev} onClick={handlerPrevButton}></button>
          <section className="item-list" ref={list}>
            {/* <div className="item flex-center-column" id="item">
              <h6 className="text-center p1 bold" style={{ height: '70px' }}>
                Presence Conference
              </h6>
              <p className="color-gradient">Apr 19-20-21, 2024</p>
              <Image
                src={PresenceImg}
                alt="Arise background"
                className="mt-2 img-slider img-round"
                width={160}
                height={160}
              />
              <p className="p5 text-center mt-3 events-desc ">
                3-day conference organized by Ignite Church Brussels led by Pastor Maldo Amadar to enable the body of
                Christ to experience and cultivate the presence of God in private and public settings.
              </p>
              <Link
                className="btn-black mt-3"
                href="https://www.eventbrite.com/e/ignite-presence-conference-2024-tickets-778365942487?fbclid=IwAR0MzdYcCfR5u5E3OiX16Rc56pUsezoFL_rQxpjuU8NSxBJt2RPEy0O9m8M"
                target="_blank">
                View more
              </Link>
            </div> */}
            <div className="item flex-center-column" id="item">
              <h6 className="text-center p1 bold" style={{ height: '70px' }}>
                Arise
              </h6>
              <p className="color-gradient">Jul 18-19-20, 2024</p>
              <Image
                src={AriseImg}
                alt="Arise background"
                className="mt-2 img-slider cover img-round"
                width={160}
                height={160}
              />
              <p className="p5 text-center mt-3 events-desc">
                We are living in a time of great potential for the manifestation of God&apos;s glory on Earth, and
                it&apos;s time for the Church to come together in unity to see transformation and reformation.
              </p>
              <Link className="btn-black mt-3" href="https://www.ariseurope.com/" target="_blank">
                View more
              </Link>
            </div>
            {/* <div className="item flex-center-column" id="item">
              <h6 className="text-center p1 bold" style={{ height: '70px' }}>
                Arise Camp
              </h6>
              <p className="color-gradient">Jul 29, 2024</p>
              <Image
                src={EvangelismImg}
                alt="Arise background"
                className="mt-2 img-slider cover img-round"
                width={160}
                height={160}
              />
              <p className="p5 text-center mt-3 events-desc">
                Embark on a transformative journey at Arise Camp—a three-day experience designed to ignite your passion
                for evangelism. This all-inclusive event offers insightful teachings, hands-on training, and engaging
                community activities.
              </p>
              <Link className="btn-black mt-3" href="#">
                View more
              </Link>
            </div> */}
          </section>
          <button id="next-btn" className="next-btn" ref={next} onClick={handlerNextButton}></button>
        </section>
      </section>
    </>
  );
}
