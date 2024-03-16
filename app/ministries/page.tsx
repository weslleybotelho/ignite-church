'use client';
import Image from 'next/image';
import evangelismImg from '../img/evangelism.jpg';
import innerHealingImg from '../img/inner-healing.jpg';
import schoolImg from '../img/school.jpg';
import musicImg from '../img/music.jpg';
import podcastImg from '../img/ignite-podcast.png';
import homeGroupImg from '../img/homegroup.jpg';
import womenImg from '../img/women.jpg';
import menImg from '../img/men.jpg';
import kidsMinistry from '../img/kidsministry.jpg';
import youthMinistry from '../img/hero-youth.webp';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { fadeFromOpacity, slideFromRight } from '../utils/gsapAnimations';

export default function Ministries() {
  useGSAP(() => {
    slideFromRight('#hero');
  });
  useGSAP(() => {
    fadeFromOpacity('#ministries div');
  });
  return (
    <>
      <article>
        <section className="container mt-3" id="ministries">
          <header id="hero">
            <h1>Ministries</h1>
            <h5>Find a place for you in what God is doing here</h5>
          </header>
          <div className="row">
            <div className="grid-3">
              <Image
                src={evangelismImg}
                alt="Image Ignite Evangelism"
                width={260}
                height={190}
                className="img-ministries"
              />
              <h6 className="">Evangelism</h6>
              <Link href="/ministries/evangelism" className="color-gradient bold">
                View More
              </Link>
            </div>
            <div className="grid-3">
              <Image
                src={innerHealingImg}
                alt="Image Ignite Inner Healing"
                width={260}
                height={190}
                className="img-ministries"
              />
              <h6 className="">Inner Healing</h6>
              <Link href={''} className="color-gradient bold">
                View More
              </Link>
            </div>
            <div className="grid-3">
              <Image
                src={schoolImg}
                alt="Image Ignite School of Ministries"
                width={260}
                height={190}
                className="img-ministries"
              />
              <h6 className="">School of Ministry</h6>
              <Link href="/ignite-school-of-ministry" className="color-gradient bold">
                View More
              </Link>
            </div>
            <div className="grid-3">
              <Image src={musicImg} alt="Image Ignite Music" width={260} height={190} className="img-ministries" />
              <h6 className="">Ignite Music</h6>
              <Link href={''} className="color-gradient bold">
                View More
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="grid-3">
              <Image src={podcastImg} alt="Image Ignite Podcast" width={260} height={190} className="img-ministries" />
              <h6 className="">Podcast</h6>
              <Link href={''} className="color-gradient bold">
                View More
              </Link>
            </div>
            <div className="grid-3">
              <Image
                src={homeGroupImg}
                alt="Image Ignite Home Group"
                width={260}
                height={190}
                className="img-ministries"
              />
              <h6 className="">Home Groups</h6>
              <Link href="/ministries/homegroup" className="color-gradient bold">
                View More
              </Link>
            </div>
            <div className="grid-3">
              <Image src={menImg} alt="Men Ministry at Ignite" width={260} height={190} className="img-ministries" />
              <h6 className="">Men Ministry</h6>
              <Link href="/ministries/men" className="color-gradient bold">
                View More
              </Link>
            </div>
            <div className="grid-3">
              <Image src={womenImg} alt="Men Ministry at Ignite" width={260} height={190} className="img-ministries" />
              <h6 className="">Women Ministry</h6>
              <Link href="/ministries/women" className="color-gradient bold">
                View More
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="grid-3">
              <Image
                src={kidsMinistry}
                alt="Image Ignite Podcast"
                width={260}
                height={190}
                className="img-ministries cover"
              />
              <h6 className="">Kid&apos;s Ministry</h6>
              <Link href={'/ministries/kids'} className="color-gradient bold">
                View More
              </Link>
            </div>
            <div className="grid-3">
              <Image
                src={youthMinistry}
                alt="Image Ignite Podcast"
                width={260}
                height={190}
                className="img-ministries cover"
              />
              <h6 className="">Youth Ministry</h6>
              <Link href={'/ministries/youth'} className="color-gradient bold">
                View More
              </Link>
            </div>
            <div className="grid-3"></div>
            <div className="grid-3"></div>
          </div>
        </section>
      </article>
    </>
  );
}
