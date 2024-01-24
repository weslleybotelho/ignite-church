import Image from 'next/image';
import Link from 'next/link';
import { list } from '@vercel/blob';

import BgHero from './img/bg-hero-dark.jpg';
import AboutIgniteImg from './img/about-ignite.jpg';
import MinistriesImg from './img/ministries-img.png';
import AriseImg from './img/arise.jpg';
import PresenceImg from './img/presence-conference.jpeg';
import EvangelismImg from './img/evangelism.jpg';
import IsmImg from './img/ism.jpg';

import Header from './components/Header/page';
import Footer from './components/Footer/page';

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-black relative hidden py-5" style={{ height: '850px' }} id="hero">
        <div className="bg-hero ">
          {/* <Image
            src={BgHero}
            alt="background ignite church service"
            height={1026}
            style={{ objectFit: 'cover' }}
            quality={100}
          /> */}
          {/* src="https://pkhsl2qgjxadjbvi.public.blob.vercel-storage.com/ignitechurch-video-RS12oCEpLOphmRe1qIElaBMCEmRKGu" */}
          <video
            src="IgniteChurch-video2.mp4"
            height={1026}
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}>
            <p>Your browser doesn&apos;t support HTML video.</p>
          </video>
        </div>

        <section className="container hero">
          <div className="row">
            <div className="grid-6 relative" style={{ paddingRight: '28px' }}>
              <h1 className="uppercase color-white" style={{ letterSpacing: '6px' }}>
                igniting a generation for jesus
              </h1>
              <p className="mt-4 color-white p1">Join us this Sunday at 10:00am</p>

              <div className="cta mt-3">
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
            <Link className="btn-orange mt-5" href="#">
              About Ignite
            </Link>
          </div>
          <div className="grid-6">
            <Image src={AboutIgniteImg} alt="about ignite" className="cover" quality={100} width={490} height={410} />
          </div>
        </div>
      </section>
      {/* ----------------------------Ministries------------------------------ */}
      <section className="relative bg-black" id="ministries">
        <div className="container py-3">
          <div className="row">
            <div className="grid-6 grid-ministry-mobile">
              <Image
                src={MinistriesImg}
                alt="about ignite"
                quality={100}
                style={{ objectFit: 'fill' }}
                height={340}
                width={360}
                className="img-ministry"
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
              <Link className="btn-orange mt-5" href="#">
                Check our Ministries
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-3 relative" id="events">
        <div className="row">
          <h3 className="uppercase text-center">events</h3>
          <div className="grid-4 flex-center-column">
            <h4 className="">Presence Conference</h4>
            <p className="">Apr 19-20-21, 2024</p>
            <Image
              src={PresenceImg}
              alt="Arise background"
              className="mt-2"
              width={276}
              height={300}
              style={{ borderRadius: '4px', maxWidth: '276px' }}
              quality={100}
            />
            <p className="p5 text-center mt-3 events-desc">
              3-day conference organized by Ignite Church Brussels led by Pastor Maldo Amadar to enable the body of
              Christ to experience and cultivate the presence of God in private and public settings.
            </p>
            <Link
              className="btn-black mt-3"
              href="https://www.eventbrite.com/e/ignite-presence-conference-2024-tickets-778365942487?fbclid=IwAR0MzdYcCfR5u5E3OiX16Rc56pUsezoFL_rQxpjuU8NSxBJt2RPEy0O9m8M"
              target="_blank">
              View more
            </Link>
          </div>
          <div className="grid-4 flex-center-column">
            <h4 className="">Arise</h4>
            <p className="">Jul 19-20-21, 2024</p>
            <Image
              src={AriseImg}
              alt="Arise background"
              className="mt-2"
              width={276}
              height={300}
              style={{ borderRadius: '4px', maxWidth: '276px' }}
            />
            <p className="p5 text-center mt-3 events-desc">
              We are living in a time of great potential for the manifestation of God&apos;s glory on Earth, and
              it&apos;s time for the Church to come together in unity to see transformation and reformation.
            </p>
            <Link className="btn-black mt-3" href="https://www.ariseurope.com/" target="_blank">
              View more
            </Link>
          </div>
          <div className="grid-4 flex-center-column">
            <h4>Arise Camp</h4>
            <p className="">Jul 29, 2024</p>
            <Image
              src={EvangelismImg}
              alt="Arise background"
              className="mt-2"
              width={276}
              height={300}
              style={{ borderRadius: '4px', maxWidth: '276px', objectFit: 'cover' }}
              quality={100}
            />
            <p className="p5 text-center mt-3 events-desc">
              Embark on a transformative journey at Arise Camp—a three-day experience designed to ignite your passion
              for evangelism. This all-inclusive event offers insightful teachings, hands-on training, and engaging
              community activities.
            </p>
            <Link className="btn-black mt-3" href="#">
              View more
            </Link>
          </div>
        </div>
      </section>
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
              <Link href="#" className="btn-orange mt-5">
                Read more
              </Link>
            </div>
            <div className="grid-6 pt-6">
              <Image
                src={IsmImg}
                alt="Ignite School of Ministry"
                quality={100}
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
      <Footer />
    </>
  );
}
