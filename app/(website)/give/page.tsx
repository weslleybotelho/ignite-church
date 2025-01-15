'use client';
import Image from 'next/image';
import giveHero from '../../img/give-background.png';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  fadeFromBelow,
  fadeFromOpacityScroll,
  slideFromLeftScroll,
  slideFromRightScroll,
} from '../../utils/gsapAnimations';
import Link from 'next/link';

export default function Give() {
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
        <section className="bg-black" id="hero">
          <section className=" relative">
            <Image src={giveHero} alt="Give Background" className="img-hero" />
            <header>
              <h1 className="absolute-center absolut color-white text-center w-100">TITHE AND OFFERING</h1>
            </header>
          </section>
        </section>
        <section className="container">
          <div className="row flex-center-revert-mobile">
            <div className="grid-6">
              <h2>
                Worship through <span className="bold">tithe</span> and <span className="bold">offering</span>
              </h2>
            </div>
            <div className="grid-6">
              <p>
                The concept of tithing and giving offerings is deeply rooted in biblical teachings and serves as an
                expression of worship, gratitude, and trust in God. The first mention of tithing in the Bible is found
                in Genesis 14, where Abram (later Abraham) honored God after a victorious battle by giving a tithe to
                Melchizedek, a priest who represented God. Through this act, Abram recognized God’s provision and
                sovereignty in his life.
              </p>
              <p className="mt-1">
                Offerings, on the other hand, are a voluntary act of worship and devotion. The Bible encourages
                believers to give cheerfully, as stated in 2 Corinthians 9:7, where it says, "God loves a cheerful
                giver."
              </p>
              <p className="mt-1">
                Giving tithes and offerings is a way to honor God with the resources He has entrusted to us, supporting
                His work on earth and reflecting our trust in His provision. At its core, this practice is not just
                about finances—it is about the heart, demonstrating love and gratitude toward God while advancing His
                kingdom.
              </p>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="row">
            <div className="grid-3 disappear"></div>
            <div className="grid-6">
              <p className="text-center">
                &quot;Honor the Lord with your wealth, with the firstfruits of all your crops; then your barns will be
                filled to overflowing, and your vats will brim over with new wine.&quot;
              </p>
              <p className="text-center mt-2 bold">Proverbs 3:9-10</p>
            </div>
            <div className="grid-3 disappear"></div>
          </div>
        </section>
        <section className="container">
          <div className="row">
            <div className="grid-4">
              <h3>
                Ways to <span className="bold">contribute</span>
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="grid-3 disappear"></div>
            <div className="grid-6 flex-center-column">
              <h4 className="bold">Through bank transfer</h4>
              <p>Ignite Church Ministries</p>
              <p className="black">IBAN | BE22 0689 4526 7047</p>
              <div className="row flex-center">
                <div className="grid-6 flex-center-column">
                  <h5 className="bold">Site</h5>
                  <p className="text-center" style={{ minHeight: '152px' }}>
                    Give your tithe or offering though a online platform totaly safe using Apple pay, Google Pay or
                    Credit Card
                  </p>
                  <a href="https://donate.stripe.com/28oeVM4Ym27969q006">
                    <button className="button-secondary mt-2">Click to give</button>
                  </a>
                </div>
                <div className="grid-6 flex-center-column">
                  <h5 className="bold">Paypal</h5>
                  <p className="text-center" style={{ minHeight: '152px' }}>
                    Give your tithe or your offering using our email on Paypal{' '}
                    <span className="bold">email@gmail.com</span>
                  </p>
                  <button className="button-secondary mt-2">Click to give</button>
                </div>
              </div>
              <div className="row flex-center">
                <section className="grid-itens-mobile">
                  <h5 className="p2 uppercase color-gradient">Building dreams, Shaping futures</h5>
                  <p className="p1 color-black pt-3">
                    Ignite the future with our <span className="color-gradient">new home</span>
                  </p>
                  <p className="p3 pt-4">
                    At Ignite Church, we&apos;re on a heartfelt journey to create a lasting home — not just a building,
                    but a place where dreams can grow and lives can be transformed. <br />
                    We envision a space that meets the diverse needs of our community. With your support, we aim to
                    create a hub that not only serves our attendees but also extends a welcoming hand to the people of
                    Brussels, spreading the transformative message of God&apos;s love throughout our city.
                  </p>
                  <Link href="https://donate.stripe.com/dR63d476ucLN41i00a" target="_blank" className="btn-orange mt-5">
                    Donate
                  </Link>
                </section>
              </div>
            </div>
            <div className="grid-3 disappear"></div>
          </div>
          <div className="row">
            <p>
              Check the business that support us{' '}
              <a href="/supporters" className="color-gradient bold underline">
                click here
              </a>
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
