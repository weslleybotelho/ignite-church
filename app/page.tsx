'use client';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import AboutIgniteImg from './img/about-ignite.jpg';
import MinistriesImg from './img/ministries-img.png';
import IsmImg from './img/ism.jpg';
import SliderEvents from './components/Slider/sliderEvents';

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const tl1 = gsap.timeline();

  useGSAP(() => {
    tl1.from('.hero div', {
      duration: 3,
      opacity: 1,
      y: 200,
      stagger: { each: 0.1 },
      ease: 'power4.out',
    });
  });

  useGSAP(() => {
    gsap.from('#about-ignite > div', {
      opacity: 0,
      ease: 'power4.out',
      stagger: { each: 0.2 },
      duration: 3,
      scrollTrigger: {
        trigger: '#about-ignite',
        start: 'top 80%',
        end: 'top 50%',
      },
    });

    gsap.from('#ministries > div', {
      x: 100,
      opacity: 0,
      ease: 'power4.out',
      stagger: { each: 0.2 },
      duration: 3,
      scrollTrigger: {
        trigger: '#ministries',
        start: 'top bottom',
        end: 'top 50%',
      },
    });

    gsap.from('#events > div', {
      y: 100,
      opacity: 0,
      ease: 'power4.out',
      stagger: { each: 0.2 },
      duration: 3,
      scrollTrigger: {
        trigger: '#events',
        start: 'top 80%',
        end: 'top 50%',
      },
    });

    gsap.from('#ism > div', {
      x: -100,
      opacity: 0,
      ease: 'power4.out',
      stagger: { each: 0.2 },
      duration: 3,
      scrollTrigger: {
        trigger: '#ism',
        start: 'top 80%',
        end: 'top 50%',
      },
    });

    gsap.from('#newsletter > div', {
      opacity: 0,
      ease: 'power4.out',
      stagger: { each: 0.2 },
      duration: 3,
      scrollTrigger: {
        trigger: '#newsletter',
        start: 'top 80%',
        end: 'top 50%',
      },
    });
  });

  return (
    <>
      {/* ----------------Hero-------------------------- */}
      <div className="bg-black relative hidden py-5" style={{ height: '850px' }} id="hero">
        <div className="bg-hero ">
          <video
            height={1026}
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
            style={{ width: '100%', objectFit: 'cover' }}
            poster="bg-hero.png">
            <source src="https://pub-77383fbe3b1e4aa7845b78670fb0f016.r2.dev/IgniteChurch-video3.mp4" />
            <source src="https://pub-77383fbe3b1e4aa7845b78670fb0f016.r2.dev/IgniteChurch-video3.webm" />
            <p>Your browser doesn&apos;t support HTML video.</p>
          </video>
        </div>

        <section className="container hero">
          <div className="row">
            <div className="grid-6 relative" style={{ paddingRight: '28px' }}>
              <h1 className="uppercase color-white h1-hero">igniting a generation for jesus</h1>

              <p className="mt-4 color-white p1 bold">Join us this Sunday at 10:00am</p>
              <div className="cta mt-9">
                <Link href="https://maps.app.goo.gl/QrMxLi79z9gTyGBg9" target="_blank" className="btn-address">
                  Save the address
                </Link>
                <Link
                  href="https://www.youtube.com/@ignitechurchbrussels/streams"
                  target="_blank"
                  className="btn-live ml-5">
                  Livestream
                </Link>
              </div>
            </div>
            <div className="grid-6 dissapear"></div>
          </div>
        </section>
      </div>
      {/* ------------------About------------------------- */}
      <section className="container py-3 relative" id="about-ignite">
        <div className="row">
          <div className="grid-6 grid-itens-mobile">
            <h2 className="color-gradient p2 uppercase">Ignite Church</h2>
            <p className="p1 color-gray mt-4">
              Welcome to Ignite, a vibrant Christian church nestled in the heart of Belgium, Brussels. Our community is
              rooted in the Protestant faith, with a fervent belief in the transformative power of revival. At Ignite,
              we are more than just a congregation; we are a family of believers united by our passion for spiritual
              awakening and a genuine desire to make a positive impact on the world around us.
            </p>
            <Link className="btn-orange mt-5" href="/about">
              About Ignite
            </Link>
          </div>
          <div className="grid-6">
            <Image src={AboutIgniteImg} alt="about ignite" className="cover img-mobile" width={490} height={410} />
          </div>
        </div>
      </section>
      {/* ----------------------------Ministries------------------------------ */}
      <section className="relative bg-black hidden-x" id="ministries">
        <div className="container py-3">
          <div className="row">
            <div className="grid-6 grid-ministry-mobile">
              <Image
                src={MinistriesImg}
                alt="about ignite"
                style={{ objectFit: 'fill' }}
                height={340}
                width={360}
                className=" img-ministry"
              />
            </div>
            <div className="grid-6 grid-itens-mobile">
              <h2 className="color-gradient p2 uppercase">ministries</h2>
              <p className="p1 color-gray mt-4 ">
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
      {/* ------------------------Events-------------------------------- */}
      <section className="container py-3 relative" id="events">
        <SliderEvents></SliderEvents>
      </section>
      {/* -----------------School---------------------- */}
      <section className="relative bg-black" id="ism">
        <div className="container py-3">
          <div className="row">
            <div className="grid-6 grid-itens-mobile">
              <h2 className="p2 uppercase color-gradient">ignite school of ministry</h2>
              <h3 className="h1 color-white pt-5">
                Encountered <br /> <span className="color-gradient">Transformed</span> <br /> Empowered
              </h3>
              <p className="p3 text-center pt-5 w-75">
                “Our misson is to see our students be transformed and empowered to reform the world around them and
                release Heaven on earth.”
              </p>
              <Link href="/ministries/school" className="btn-orange mt-5">
                Read more
              </Link>
            </div>
            <div className="grid-6 pt-6">
              <Image
                src={IsmImg}
                className="img-mobile"
                alt="Ignite School of Ministry"
                style={{ objectFit: 'cover' }}
                width={360}
                height={390}></Image>
            </div>
          </div>
        </div>
      </section>
      <section className="relative" id="newsletter">
        <div className="container py-3">
          <div className="row">
            <div className="grid-3 disappear"></div>
            <div className="grid-6">
              <h2 className="p2 uppercase color-black">email newsletter</h2>
              <h3 className="h1 color-primary mt-3">Keep updated</h3>
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
    </>
  );
}
