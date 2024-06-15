'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';

import AboutIgniteImg from './img/about-ignite2.png';
import MinistriesImg from './img/ministries-home.jpg';
import IsmImg from './img/ism.jpg';
import BuildingImg from './img/building.jpg';
import SliderEvents from './components/Slider/sliderEvents';
import {
  fadeFromBelow,
  fadeFromBelowScroll,
  fadeFromOpacityScroll,
  slideFromLeftScroll,
  slideFromRightScroll,
} from './utils/gsapAnimations';

export default function Home() {
  useGSAP(() => {
    fadeFromBelow('#hero > section');
  });

  useGSAP(() => {
    slideFromLeftScroll('#about-ignite > section', '#about-ignite');

    slideFromRightScroll('#ministries > div', '#ministries');

    fadeFromBelowScroll('#events > section', '#events');

    slideFromLeftScroll('#ism > section', '#ism');

    slideFromRightScroll('#building > section', '#building');

    fadeFromOpacityScroll('#newsletter > div', '#newsletter');
  });

  return (
    <>
      {/* ----------------Hero-------------------------- */}
      <article>
        <header className="bg-black relative hidden h-100" id="hero">
          <video
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
            poster="bg-hero.png"
            className="bg-hero cover">
            <source src="https://pub-77383fbe3b1e4aa7845b78670fb0f016.r2.dev/IgniteChurch-video3.mp4" />
            <source src="https://pub-77383fbe3b1e4aa7845b78670fb0f016.r2.dev/IgniteChurch-video3.webm" />
            <p>Your browser doesn&apos;t support HTML video.</p>
          </video>

          <section className="container hero row">
            <section className="grid-6 relative p-3">
              <h1 className="uppercase color-gradient p5">ignite church brussels</h1>
              <h2 className="uppercase color-white h1-hero">igniting a generation for jesus</h2>

              <p className="mt-4 color-white p1 bold">Join us this Sunday at 10:00am</p>
              <section className="cta mt-9">
                <Link href="https://maps.app.goo.gl/QrMxLi79z9gTyGBg9" target="_blank" className="btn-address">
                  Save the address
                </Link>
                <Link
                  href="https://www.youtube.com/@ignitechurchbrussels/streams"
                  target="_blank"
                  className="btn-live ml-5">
                  Livestream
                </Link>
              </section>
            </section>
            <section className="grid-6 dissapear"></section>
          </section>
        </header>
        {/* ------------------About------------------------- */}
        <section className="container py-3 relative row" id="about-ignite">
          <section>
            <p className="text-center p1">
              You found more than a church, you found a <span className="color-gradient">family</span>.
            </p>
          </section>
          <section className="grid-6 grid-itens-mobile">
            <h3 className="color-gradient p2 uppercase mt-3">About Ignite Church Brussels</h3>
            <h4 className="mt-3">Welcome to Ignite Church Brussels</h4>
            <p className=" color-black-light mt-4">
              A vibrant Christian church nestled in the heart of Belgium. Our community is rooted in the faith in{' '}
              <span className="color-gradient">Jesus</span>, with a fervent belief in the transformative power of{' '}
              <span className="color-gradient"> revival</span>. At Ignite Church Brussels, we are more than just a
              congregation; we are a family of believers united by our passion for spiritual{' '}
              <span className="color-gradient">awakening</span> and a genuine desire to make a positive impact on the
              world around us.
            </p>
            <Link className="btn-orange mt-5" href="/about-ignite">
              Read more
            </Link>
          </section>
          <section className="grid-6">
            <Image
              src={AboutIgniteImg}
              alt="about ignite "
              className="contain img-mobile img-round"
              width={500}
              height={410}
            />
          </section>
        </section>
        {/* ----------------------------Ministries------------------------- */}
        <section className="relative bg-black hidden-x" id="ministries">
          <div className="container py-3">
            <div className="row">
              {/* <div className="grid-1 disappear"></div> */}
              <div className="grid-8 grid-ministry-mobile">
                <Image
                  src={MinistriesImg}
                  alt="about ignite"
                  style={{}}
                  // height={340}
                  // width={360}
                  className=" img-ministry h-auto"
                  quality={100}
                />
              </div>
              <div className="grid-4">
                <h4 className="color-gradient p2 uppercase">ministries</h4>
                <p className="p2 color-white-dark mt-2 ">
                  At Ignite, our ministries are the heartbeat of our community, each serving as a unique avenue for
                  spiritual growth, fellowship, and service. Whether you&apos;re seeking camaraderie in our vibrant
                  men&apos;s and women&apos;s groups, exploring inner healing and restoration, pursuing deeper insights
                  through our School of Ministries, or engaging with thought-provoking discussions on our insightful
                  podcasts, there&apos;s a place for you to thrive and connect at Ignite.
                </p>
                <Link className="btn-orange mt-5" href="/ministries">
                  Check our Ministries
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* ----------------------Events----------------------------------- */}
        <section className="container py-3 relative" id="events">
          <SliderEvents></SliderEvents>
        </section>
        {/* ----------------------School------------------------------------ */}
        <section className="relative bg-black" id="ism">
          <section className="container row py-3">
            <section className="grid-6 grid-itens-mobile">
              <h5 className="p2 uppercase color-gradient">ignite school of ministry</h5>
              <p className="p1 color-white pt-5">
                Encountered <br /> <span className="color-gradient">Transformed</span> <br /> Empowered
              </p>
              <p className="p3 text-center pt-5 w-75 color-white">
                “Our misson is to see our students be transformed and empowered to reform the world around them and
                release Heaven on earth.”
              </p>
              <Link href="/ignite-school-of-ministry" className="btn-orange mt-5">
                Read more
              </Link>
            </section>
            <section className="grid-6 pt-6">
              <Image
                src={IsmImg}
                className="img-mobile img-round"
                alt="Ignite School of Ministry"
                style={{ objectFit: 'cover' }}
                width={360}
                height={390}></Image>
            </section>
          </section>
        </section>
        {/* ----------------------Building--------------------------------- */}

        <section className="relative hidden-x" id="building">
          <section className="container row py-2">
            <section className="grid-6">
              <Image
                src={BuildingImg}
                alt="Ignite Church Brussels building idea"
                className="cover img-round img-mobile"
              />
            </section>
            <section className="grid-6 grid-itens-mobile">
              <h5 className="p2 uppercase color-gradient">Building dreams, Shaping futures</h5>
              <p className="p1 color-black pt-3">
                Ignite the future with our <span className="color-gradient">new home</span>
              </p>
              <p className="p3 pt-4">
                At Ignite Church, we&apos;re embarking on an exciting journey to secure a permanent home that goes
                beyond bricks and mortar — it&apos;s a sanctuary where dreams are built and futures are shaped. <br />
                We envision a space that caters to the diverse needs of our community. With your support, we aim to
                create a hub that not only serves our attendees but also extends a welcoming hand to the people of
                Brussels, fostering connection and spreading the transformative message of God&apos;s love throughout
                our city.
              </p>
              <Link href="https://donate.stripe.com/dR63d476ucLN41i00a" target="_blank" className="btn-orange mt-5">
                Donate
              </Link>
            </section>
          </section>
        </section>

        {/* ----------------------Newsletter--------------------------------- */}
        <hr className="w-75 m-auto" />
        <section className="relative" id="newsletter">
          <div className="container py-3">
            <div className="row">
              <div className="grid-3 disappear"></div>
              <div className="grid-6">
                <h6 className="p2 uppercase color-black">email newsletter</h6>
                <p className="h1 color-primary mt-3">Keep updated</p>
                <form
                  action="https://formsubmit.co/7aaf31e9c1e59aa2047a15acd2c62b39"
                  method="POST"
                  className="flex-center-column">
                  <div className="row mt-2 flex-space w-100">
                    <input type="text" name="first-name" placeholder="First Name" required />
                    <input type="text" name="last-name" placeholder="Last Name" required className="ml-3" />
                  </div>
                  <div className="row mt-2 w-100">
                    <input type="email" name="email" placeholder="Email Address" required />
                  </div>
                  <button className="btn-black mt-2 px-3" type="submit" style={{ border: 'none', cursor: 'pointer' }}>
                    Subscribe
                  </button>
                </form>
              </div>
              <div className="grid-3 disappear"></div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
