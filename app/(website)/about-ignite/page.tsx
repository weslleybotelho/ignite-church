'use client';
import Image from 'next/image';
import aboutHero from '../../img/about-hero3.jpg';
import aboutImg1 from '../../img/about-image1.jpg';
import coreValuesImg from '../../img/core-values.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  fadeFromBelow,
  fadeFromOpacityScroll,
  slideFromLeftScroll,
  slideFromRightScroll,
} from '../../utils/gsapAnimations';

export default function About() {
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
            <h2 className="p1">Ignite Church Brussels: A Journey of Faith and Vision</h2>
            <p className="pt-4 p2">
              Maldo&apos;s journey to founding Ignite Church in Brussels, Belgium, is a testament to unwavering faith
              and dedication. Born in Dolores Eastern Samar, Philippines, he relocated to Belgium at a young age, where
              he encountered the transformative power of Christ. Influenced profoundly by his mother&apos;s prayers,
              Maldo&apos;s spiritual journey took root amidst the Flemish-speaking landscape of Brussels.
            </p>
            {/* <p className="pt-2 p2 color-gray">
              Lorem ipsum dolor sit amet consectetur. Pellentesque at nunc ipsum quis risus rhoncus neque turpis quis.
              Posuere et blandit sit convallis tempus id. Scelerisque vulputate volutpat ac gravida nam consequat
              faucibus. Vulputate ornare cras turpis morbi.
            </p> */}
          </section>
        </section>
        <section className="container py-3" id="pastors">
          <h3 className="color-gradient p2 uppercase bold ml-2">about our church</h3>
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
              <h5 className="text-center">Pr Maldo</h5>
              <p className="text-center pt-4">
                Growing up in the vibrant Filipino community of &quot;Christian Center Anderlecht,&quot; Maldo&apos;s
                calling to ministry became increasingly evident. Following years of faithful service within the church,
                Maldo and his wife, Jasmine, were released in 2016 to establish Ignite Church—an endeavor rooted in the
                belief that every heart ignited with God&apos;s love has the power to transform communities. With a
                steadfast commitment to leading others into a deeper encounter with Christ, Maldo&apos;s vision for
                Ignite Church in Brussels is one fueled by the desire for revival and the relentless passion for Jesus.
              </p>
              {/* <p className="text-center pt-1">
                Lorem ipsum dolor sit amet consectetur. Varius proin odio ut morbi nulla velit fusce. Pulvinar
                suspendisse facilisis et habitant pulvinar pellentesque. Egestas vel dui fermentum risus in. Platea
                auctor sapien mattis vel gravida massa nisl arcu sit. Lorem ipsum dolor sit amet consectetur.{' '}
              </p>
              <p className="text-center pt-1">
                Varius proin odio ut morbi nulla velit fusce. Pulvinar suspendisse facilisis et habitant pulvinar
                pellentesque. Egestas vel dui fermentum risus in. Platea auctor sapien mattis vel gravida massa nisl
                arcu sit.
              </p> */}
            </div>
          </div>
        </section>

        <section className="hidden-x" id="core-values">
          <div className="container py-3">
            <h6 className="color-gradient p2 uppercase bold ml-2">our vision and mission</h6>

            <div className="row">
              <div className="grid-6 flex-center-column">
                <h3 className="uppercase p1 bold">vision</h3>
                <p className="p2 mt-2 text-center">
                  Igniting a generation on fire for Jesus and for the presence of God.
                </p>
                <h3 className="uppercase p1 bold mt-5">mission</h3>
                <p className="p2 mt-2 text-center">
                  At Ignite Church Brussels, our mission is deeply rooted in five foundational pillars: Presence, Power,
                  Purity, People, and Purpose. These pillars guide our every endeavor, shaping our collective vision and
                  driving our commitment to impacting lives and communities with the love and truth of Jesus Christ.
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
                  <div className="flex-start-row ">
                    <h5>Presense</h5>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-auto pl-1">
                      <path
                        d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"
                        fill="#FC935B"
                      />
                    </svg>
                  </div>
                  <p className="">
                    At Ignite Church Brussels, we prioritize cultivating the presence of God in every aspect of our
                    community. Through vibrant worship, fervent prayer, and intentional fellowship, we create an
                    atmosphere where His presence is palpable, leading to transformative encounters and deepening our
                    connection with Him.
                  </p>
                </div>

                <div className="mt-1">
                  <div className="flex-start-row">
                    <h5>Purpose</h5>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-auto pl-1">
                      <path
                        d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"
                        fill="#FC935B"
                      />
                    </svg>
                  </div>
                  <p className="">
                    Driven by our passion for Jesus and His kingdom, we embrace our purpose to impact our world for His
                    glory. With clarity of vision and unwavering determination, we pursue God&apos;s purposes with
                    boldness and purpose, seeking to fulfill His plans for our lives and our church.
                  </p>
                </div>

                <div className="mt-1">
                  <div className="flex-start-row">
                    <h5>Purity</h5>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-auto pl-1">
                      <path
                        d="M9.97308 18H11V13H13V18H14.0269C14.1589 16.7984 14.7721 15.8065 15.7676 14.7226C15.8797 14.6006 16.5988 13.8564 16.6841 13.7501C17.5318 12.6931 18 11.385 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 11.3843 6.46774 12.6917 7.31462 13.7484C7.40004 13.855 8.12081 14.6012 8.23154 14.7218C9.22766 15.8064 9.84103 16.7984 9.97308 18ZM10 20V21H14V20H10ZM5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.624 15.7748 16 17 16 18.5V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V18.5C8 17 6.37458 15.7736 5.75395 14.9992Z"
                        fill="#FC935B"
                      />
                    </svg>
                  </div>

                  <p className="">
                    Integrity and purity are the cornerstones of our walk with God at Ignite Church Brussels. We are
                    committed to upholding biblical standards of righteousness and holiness in all areas of our lives,
                    striving to live blamelessly before God and one another, with hearts surrendered to His will.
                  </p>
                </div>
              </div>
              <div className="grid-6">
                <div>
                  <div className="flex-start-row">
                    <h5>Power</h5>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-auto pl-1">
                      <path
                        d="M3.92887 4.92871L5.34315 6.34298C3.89543 7.7907 3 9.7907 3 11.9999C3 14.209 3.89543 16.209 5.34315 17.6567L3.92887 19.071C2.11925 17.2614 1 14.7614 1 11.9999C1 9.23834 2.11925 6.73834 3.92887 4.92871ZM20.0711 4.92871C21.8808 6.73834 23 9.23834 23 11.9999C23 14.7614 21.8808 17.2614 20.0711 19.071L18.6569 17.6567C20.1046 16.209 21 14.209 21 11.9999C21 9.79121 20.105 7.79162 18.6579 6.34398L20.0711 4.92871ZM13 4.99984V10.9999H16L11 18.9999V12.9999H8L13 4.99984ZM6.75736 7.7572L8.17157 9.17141C7.44771 9.89527 7 10.8953 7 11.9999C7 13.1044 7.44771 14.1044 8.17157 14.8283L6.75736 16.2425C5.67157 15.1567 5 13.6567 5 11.9999C5 10.343 5.67157 8.84298 6.75736 7.7572ZM17.2436 7.75818C18.3288 8.84389 19 10.3435 19 11.9999C19 13.6567 18.3284 15.1567 17.2426 16.2425L15.8284 14.8283C16.5523 14.1044 17 13.1044 17 11.9999C17 10.8958 16.5527 9.89619 15.8294 9.17241L17.2436 7.75818Z"
                        fill="#FC935B"
                      />
                    </svg>
                  </div>
                  <p className="">
                    Empowered by the Holy Spirit, we embrace the power of God to bring about lasting change in our lives
                    and the world around us. Through the demonstration of God&apos;s power in signs, wonders, and
                    miracles, we boldly proclaim the gospel and advance His kingdom with confidence and authority.
                  </p>
                </div>
                <div className="mt-1">
                  <div className="flex-start-row">
                    <h5>People</h5>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-auto pl-1">
                      <path
                        d="M12 11C14.7614 11 17 13.2386 17 16V22H15V16C15 14.4023 13.7511 13.0963 12.1763 13.0051L12 13C10.4023 13 9.09634 14.2489 9.00509 15.8237L9 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5.5 14C5.77885 14 6.05009 14.0326 6.3101 14.0942C6.14202 14.594 6.03873 15.122 6.00896 15.6693L6 16L6.0007 16.0856C5.88757 16.0456 5.76821 16.0187 5.64446 16.0069L5.5 16C4.7203 16 4.07955 16.5949 4.00687 17.3555L4 17.5V22H2V17.5C2 15.567 3.567 14 5.5 14ZM18.5 14C20.433 14 22 15.567 22 17.5V22H20V17.5C20 16.7203 19.4051 16.0796 18.6445 16.0069L18.5 16C18.3248 16 18.1566 16.03 18.0003 16.0852L18 16C18 15.3343 17.8916 14.694 17.6915 14.0956C17.9499 14.0326 18.2211 14 18.5 14ZM5.5 8C6.88071 8 8 9.11929 8 10.5C8 11.8807 6.88071 13 5.5 13C4.11929 13 3 11.8807 3 10.5C3 9.11929 4.11929 8 5.5 8ZM18.5 8C19.8807 8 21 9.11929 21 10.5C21 11.8807 19.8807 13 18.5 13C17.1193 13 16 11.8807 16 10.5C16 9.11929 17.1193 8 18.5 8ZM5.5 10C5.22386 10 5 10.2239 5 10.5C5 10.7761 5.22386 11 5.5 11C5.77614 11 6 10.7761 6 10.5C6 10.2239 5.77614 10 5.5 10ZM18.5 10C18.2239 10 18 10.2239 18 10.5C18 10.7761 18.2239 11 18.5 11C18.7761 11 19 10.7761 19 10.5C19 10.2239 18.7761 10 18.5 10ZM12 2C14.2091 2 16 3.79086 16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2ZM12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4Z"
                        fill="#FC935B"
                      />
                    </svg>
                  </div>
                  <p className="">
                    At the heart of Ignite Church Brussels is a deep love for people. We believe in the value and
                    dignity of every individual, and we are dedicated to creating a welcoming and inclusive community
                    where everyone feels loved, accepted, and valued, regardless of background or circumstance.
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
