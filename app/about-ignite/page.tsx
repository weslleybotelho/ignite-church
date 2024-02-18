'use client';
import Image from 'next/image';
import aboutHero from '../img/about-hero3.jpg';
import aboutImg1 from '../img/about-image1.jpg';
import coreValuesImg from '../img/core-values.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  fadeFromBelow,
  fadeFromOpacityScroll,
  slideFromLeftScroll,
  slideFromRightScroll,
} from '../utils/gsapAnimations';

export default function About() {
  gsap.registerPlugin(ScrollTrigger);
  const tl1 = gsap.timeline();

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
        <section className="bg-black h-100" id="hero">
          <section className="bg-about relativexs">
            <Image src={aboutHero} alt="About Ignite" className="cover h-100" />
            <header>
              <h1 className="absolute-center absolut color-white text-center">About Ignite</h1>
            </header>
          </section>
        </section>

        <section id="about">
          <section className="container text-center text-about">
            <h2 className="p1">Ignite is a church that is based in the heart of Europe, Brussels ... </h2>
            <p className="pt-4 p2 color-gray">
              Lorem ipsum dolor sit amet consectetur. Pellentesque at nunc ipsum quis risus rhoncus neque turpis quis.
              Posuere et blandit sit convallis tempus id. Scelerisque vulputate volutpat ac gravida nam consequat
              faucibus. Vulputate ornare cras turpis morbi.
            </p>
            <p className="pt-2 p2 color-gray">
              Lorem ipsum dolor sit amet consectetur. Pellentesque at nunc ipsum quis risus rhoncus neque turpis quis.
              Posuere et blandit sit convallis tempus id. Scelerisque vulputate volutpat ac gravida nam consequat
              faucibus. Vulputate ornare cras turpis morbi.
            </p>
          </section>
        </section>
        <section className="container py-3" id="pastors">
          <h3 className="color-gradient p2 uppercase bold ml-2">about our pastors</h3>
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
              <h5 className="text-center">Pr Maldo & Jasmine</h5>
              <p className="text-center pt-4">
                Lorem ipsum dolor sit amet consectetur. Varius proin odio ut morbi nulla velit fusce. Pulvinar
                suspendisse facilisis et habitant pulvinar pellentesque. Egestas vel dui fermentum risus in. Platea
                auctor sapien mattis vel gravida massa nisl arcu sit.
              </p>
              <p className="text-center pt-1">
                Lorem ipsum dolor sit amet consectetur. Varius proin odio ut morbi nulla velit fusce. Pulvinar
                suspendisse facilisis et habitant pulvinar pellentesque. Egestas vel dui fermentum risus in. Platea
                auctor sapien mattis vel gravida massa nisl arcu sit. Lorem ipsum dolor sit amet consectetur.{' '}
              </p>
              <p className="text-center pt-1">
                Varius proin odio ut morbi nulla velit fusce. Pulvinar suspendisse facilisis et habitant pulvinar
                pellentesque. Egestas vel dui fermentum risus in. Platea auctor sapien mattis vel gravida massa nisl
                arcu sit.
              </p>
            </div>
          </div>
        </section>

        <section className="hidden-x" id="core-values">
          <div className="container py-3">
            <h6 className="color-gradient p2 uppercase bold ml-2">our mission and values</h6>

            <div className="row">
              <div className="grid-6 flex-center-column">
                <h3 className="uppercase p1 bold">vision</h3>
                <p className="p2 mt-2 color-gray text-center">
                  Lorem ipsum dolor sit amet consectetur. Varius proin odio ut morbi nulla velit fusce. Pulvinar
                  suspendisse facilisis et habitant pulvinar pellentesque. Egestas vel dui fermentum risus in. Platea
                  auctor sapien mattis vel gravida massa nisl arcu sit.
                </p>
                <h3 className="uppercase p1 bold mt-5">mission</h3>
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
            <div className="row">
              <div className="grid-6">
                <div>
                  <h5>Presense</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iure fuga maxime est ipsum cumque
                    consequuntur numquam, obcaecati assumenda molestias at magnam mollitia incidunt necessitatibus,
                    eaque labore sed! Aperiam, laborum.
                  </p>
                </div>

                <div className="mt-1">
                  <h5>Purpose</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iure fuga maxime est ipsum cumque
                    consequuntur numquam, obcaecati assumenda molestias at magnam mollitia incidunt necessitatibus,
                    eaque labore sed! Aperiam, laborum.
                  </p>
                </div>

                <div className="mt-1">
                  <h5>Purity</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iure fuga maxime est ipsum cumque
                    consequuntur numquam, obcaecati assumenda molestias at magnam mollitia incidunt necessitatibus,
                    eaque labore sed! Aperiam, laborum.
                  </p>
                </div>
              </div>
              <div className="grid-6">
                <div>
                  <h5>Power</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iure fuga maxime est ipsum cumque
                    consequuntur numquam, obcaecati assumenda molestias at magnam mollitia incidunt necessitatibus,
                    eaque labore sed! Aperiam, laborum.
                  </p>
                </div>
                <div className="mt-1">
                  <h5>People</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iure fuga maxime est ipsum cumque
                    consequuntur numquam, obcaecati assumenda molestias at magnam mollitia incidunt necessitatibus,
                    eaque labore sed! Aperiam, laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
