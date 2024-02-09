'use client';
import Image from 'next/image';
import aboutHero from '../img/about-hero.jpg';
import aboutImg1 from '../img/about-image1.jpg';
import coreValuesImg from '../img/core-values.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {
  gsap.registerPlugin(ScrollTrigger);
  const tl1 = gsap.timeline();

  useGSAP(() => {
    tl1.from('#hero div', {
      duration: 2,
      opacity: 1,
      y: 200,
      stagger: { each: 0.1 },
      ease: 'power4.out',
    });
  });

  useGSAP(() => {
    gsap.from('#about > div', {
      opacity: 0,
      ease: 'power4.out',
      stagger: { each: 0.2 },
      duration: 2,
      scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
        end: 'top 50%',
      },
    });

    gsap.from('#pastors > div', {
      x: -200,
      opacity: 0,
      ease: 'power4.out',
      stagger: { each: 0.2 },
      duration: 2,
      scrollTrigger: {
        trigger: '#pastors',
        start: 'top 80%',
        end: 'top 50%',
      },
    });

    gsap.from('#core-values > div', {
      x: 200,
      opacity: 0,
      ease: 'power4.out',
      stagger: { each: 0.2 },
      duration: 2,
      scrollTrigger: {
        trigger: '#core-values',
        start: 'top 80%',
        end: 'top 50%',
      },
    });
  });
  return (
    <>
      <div className="bg-black" id="hero">
        <div className="bg-about relative">
          <Image src={aboutHero} alt="About Ignite" className="cover " />
          <h1 className="absolute-center absolut color-white text-center">About Ignite</h1>
        </div>
      </div>

      <section className="bg-black" id="about">
        <div className="container text-center text-about">
          <h3 className="color-white">Ignite is a church that is based in the heart of Europe, Brussels ... </h3>
          <p className="pt-4 p1 color-gray">
            Lorem ipsum dolor sit amet consectetur. Pellentesque at nunc ipsum quis risus rhoncus neque turpis quis.
            Posuere et blandit sit convallis tempus id. Scelerisque vulputate volutpat ac gravida nam consequat
            faucibus. Vulputate ornare cras turpis morbi.
          </p>
          <p className="pt-2 p1 color-gray">
            Lorem ipsum dolor sit amet consectetur. Pellentesque at nunc ipsum quis risus rhoncus neque turpis quis.
            Posuere et blandit sit convallis tempus id. Scelerisque vulputate volutpat ac gravida nam consequat
            faucibus. Vulputate ornare cras turpis morbi.
          </p>
        </div>
      </section>
      <section className="container" id="pastors">
        <h2 className="color-gradient p2 uppercase bold ml-2">about our pastors</h2>
        <div className="row">
          <div className="grid-6 ">
            <Image
              src={aboutImg1}
              alt="Image of Pastor Maldo and his wife Jasmine"
              className=" cover img-mobile img-round"
              width={360}
              height={390}
            />
          </div>
          <div className="grid-6">
            <h3 className="text-center">Pr Maldo & Jasmine</h3>
            <p className="text-center pt-4">
              Lorem ipsum dolor sit amet consectetur. Varius proin odio ut morbi nulla velit fusce. Pulvinar suspendisse
              facilisis et habitant pulvinar pellentesque. Egestas vel dui fermentum risus in. Platea auctor sapien
              mattis vel gravida massa nisl arcu sit.
            </p>
            <p className="text-center pt-1">
              Lorem ipsum dolor sit amet consectetur. Varius proin odio ut morbi nulla velit fusce. Pulvinar suspendisse
              facilisis et habitant pulvinar pellentesque. Egestas vel dui fermentum risus in. Platea auctor sapien
              mattis vel gravida massa nisl arcu sit. Lorem ipsum dolor sit amet consectetur.{' '}
            </p>
            <p className="text-center pt-1">
              Varius proin odio ut morbi nulla velit fusce. Pulvinar suspendisse facilisis et habitant pulvinar
              pellentesque. Egestas vel dui fermentum risus in. Platea auctor sapien mattis vel gravida massa nisl arcu
              sit.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black" id="core-values">
        <div className="container">
          <h2 className="color-gradient p2 uppercase bold ml-2">our mission and values</h2>

          <div className="row">
            <div className="grid-6 flex-center-column">
              <h3 className="uppercase color-white">our vision</h3>
              <p className="p2 mt-2 color-gray text-center">
                Lorem ipsum dolor sit amet consectetur. Varius proin odio ut morbi nulla velit fusce. Pulvinar
                suspendisse facilisis et habitant pulvinar pellentesque. Egestas vel dui fermentum risus in. Platea
                auctor sapien mattis vel gravida massa nisl arcu sit.
              </p>
              <h3 className="uppercase color-white mt-5">our mission</h3>
              <p className="p2 mt-2 color-gray text-center">
                Lorem ipsum dolor sit amet consectetur. Varius proin odio ut morbi nulla velit fusce. Pulvinar
                suspendisse facilisis et habitant pulvinar pellentesque. Egestas vel dui fermentum risus in. Platea
                auctor sapien mattis vel gravida massa nisl arcu sit.
              </p>
            </div>
            <div className="grid-6 flex-center grid-ministry-mobile">
              <Image
                src={coreValuesImg}
                alt="Core valeues Ignite"
                width={360}
                height={350}
                className="img-mobile "
                style={{ maxWidth: '360px' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
