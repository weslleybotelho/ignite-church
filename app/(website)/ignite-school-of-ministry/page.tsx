'use client';
import Image from 'next/image';
import heroImg from '../../img/heroSchool2.jpeg';
import school1 from '../../img/school-1.png';
import school2 from '../../img/school-4.jpeg';
import school3 from '../../img/school-3.jpg';
import school5 from '../../img/school-5.jpeg';
import school6 from '../../img/school-6.png';
import { useGSAP } from '@gsap/react';
import { fadeFromBelow, fadeFromBelowScroll, fadeFromOpacityScroll, slideFromLeftScroll } from '../../utils/gsapAnimations';
import './school.scss';

export default function School() {
  useGSAP(() => {
    fadeFromBelow('#hero > section');
  });

  useGSAP(() => {
    slideFromLeftScroll('#vision > section', '#vision');
    fadeFromBelowScroll('#mission > section', '#mission');
    fadeFromOpacityScroll('#points > section', '#points');
    fadeFromBelowScroll('#years > section', '#years');
    slideFromLeftScroll('#infos > section', '#infos');
  });
  return (
    <>
      <article>
        <header className="bg-ministries">
          <section className="bg-black h-100" id="hero">
            <section className="bg-about relativexs">
              <Image src={heroImg} alt="About Ignite" className="cover hero-school h-100" />
              <header>
                <h1 className="absolute-center absolut color-white text-center uppercase">
                  Ignite School <br />
                  Of Ministry
                </h1>
              </header>
            </section>
          </section>
        </header>
        <section className="relative bg-black" id="vision">
          <section className="container flex-center p-0">
            <section className="grid-6 p-0">
              <Image src={school1} alt="school 1" className="contain h-auto" />
            </section>
            <section className="grid-6">
              <h2 className="uppercase color-white text-center">vision</h2>
              <p className="text-center p1 color-gray-light mt-2">
                Equip a generation to walk in the Spirit and to experience God&apos;s radical love for them.
              </p>
            </section>
          </section>
        </section>
        <section className="relative container flex-center py-0" id="mission">
          <section className="grid-6">
            <h2 className="uppercase text-center">mission</h2>
            <p className="p1 text-center color-black mt-2">
              See our students be transformed and empowered to reform the world around them and release Heaven on earth.
            </p>
            <p className="mt-3 text-center">
              What you can expect from the first, second and third year is to receive{' '}
              <span className="bold">transformational teachings</span>, from our team but also{' '}
              <span className="bold">local and international</span> speakers. You can expect to be{' '}
              <span className="bold">activated and empowered in ministry</span> and in the gifts that God has given you.
            </p>
            <p className="mt-3 text-center">
              We will also have <span className="bold">moments of worship</span> and where we&apos;ll{' '}
              <span className="bold">pursue God&apos;s presence together</span>. Our goal is not merely to give you information but to help
              facilitate God&apos;s presence to touch and transform you in a deep way.
            </p>
            <p className="mt-3 text-center">
              There will be 1 class a month starting September till the end of June + 5 going deeper sessions on Friday nights. This means a
              total of 15 classes.
            </p>
          </section>
          <section className="grid-6 ">
            <Image src={school6} alt="school 1" className="contain h-auto school2" />
          </section>
        </section>
        <section className="relative bg-black" id="points">
          <section className="relative container flex-center py-0">
            <section className="grid-6 ">
              <Image src={school5} alt="school 1" className="contain h-auto school2" />
            </section>
            <section className="grid-6">
              <h3 className="uppercase text-center color-white">The school is for you if:</h3>
              <div className="ml-2 mt-3 li-white">
                <li>You feel a call towards ministry</li>
                <li>You want to know your identity as a son and daughter of God</li>
                <li>You want to learn how to walk in the gifts of the Spirit</li>
                <li>You want to impact your sphere of influence by learning how to reflect Jesus</li>
                <li>You want to go deeper in your relationship with God</li>
              </div>
            </section>
          </section>
        </section>
        <section className="container row py-0" id="years">
          <section className="grid-4">
            <h5 className="bold uppercase">First year</h5>
            <div className="h7 italic mt-1">Encountered</div>
            <p className="mt-1">
              The first year at ISM is focused on encountering God&apos;s love and breaking free from any lies about His nature or our
              identity. You can expect content such as:
            </p>
            <div className="ml-2 mt-2">
              <ul className="">
                <li>Identity in Christ</li>
                <li>Intimacy with God</li>
                <li>The gifts of the Spirit (prophetic, healing, miracles, etc.)</li>
                <li>The church and the 5-fold ministry (apostle, prophet, teacher, evangelist, pastor)</li>
                <li>Understanding the call of God upon your life</li>
                <li>Revival history</li>
                <li>Ministry trip in Belgium*</li>
                <li>And more ...</li>
              </ul>
            </div>
            <p className="mt-1">*These trips are not included in the tuition costs</p>
          </section>
          <section className="grid-4">
            <h5 className="bold uppercase">Second year</h5>
            <div className="h7 italic mt-1">Transformed</div>
            <p className="mt-1">
              The second year is focused on being transformed character wise and growing in maturity as a christian. But also starting to do
              more practical ministry. Students will take on more responsibility and serve as part of their training. You can expect content
              such as:
            </p>
            <div className="ml-2 mt-2">
              <ul className="">
                <li>Leadership and character</li>
                <li>Culture of Honor</li>
                <li>Spiritual warfare & Deliverance</li>
                <li>Purity, dating & marriage</li>
                <li>Emotional health</li>
                <li>Preaching activation</li>
                <li>Ministry trip in Belgium*</li>
                <li>International mission trips*</li>
                <li>And more ...</li>
              </ul>
            </div>
            <p className="mt-1">*These trips are not included in the tuition costs</p>
          </section>
          <section className="grid-4">
            <h5 className="bold uppercase">Third year</h5>
            <div className="h7 italic mt-1">Empowered</div>
            <p className="mt-1">
              Five classes throughout the year focused on leadership and practical ministry, along with an{' '}
              <span className="bold">internship</span> where you will be part of the ISM team in these different departments:{' '}
            </p>
            <div className="ml-2 mt-2">
              <ul className="">
                <li>Pastoral</li>
                <li>Missions</li>
                <li>Administration</li>
                <li>Worship</li>
                <li>Creativity</li>
                <li>And more...</li>
              </ul>
            </div>
          </section>
        </section>
        <section className="container row py-0" id="infos">
          <section className="grid-2 disappear"></section>
          <section className="grid-8">
            <h5>How to apply ?</h5>
            <p className="p4 my-1">Applications open in April</p>
            <a href="https://forms.gle/ePnwMDS498gHHKn59" className="color-gradient bold " target="_blank">
              click here to apply
            </a>
            <h5 className="mt-3">Contact</h5>
            <p className="p5 mt-1">More information on the school and how to apply via email:</p>
            <a
              href="mailto:ignite.ministryschool@gmail.com?subject = ISM Information&body = Hi, I would like to get more information about the school."
              className="color-gradient mt-1">
              ignite.ministryschool@gmail.com
            </a>
          </section>
          <section className="grid-2 disappear"></section>
        </section>
      </article>
    </>
  );
}
