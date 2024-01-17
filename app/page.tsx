import Image from 'next/image';
import Link from 'next/link';

import BgHero from './img/bg-hero-dark.jpg';
import AboutIgniteImg from './img/about-ignite.jpg';
import MinistriesImg from './img/ministries-img.png';
import AriseImg from './img/arise.jpg';
import PresenceImg from './img/presence-conference.jpeg';
import EvangelismImg from './img/evangelism.jpg';
import IsmImg from './img/ism.jpg';

import logoIgnite from '../public/svg/logo-ignite.svg';
import logoIgniteFooter from '../public/svg/icon-footer.svg';
import iconInstagram from '../public/svg/icon-insta.svg';
import iconYoutube from '../public/svg/icon-yt.svg';
import iconTikTok from '../public/svg/icon-tiktok.svg';
import iconSpotify from '../public/svg/icon-spotify.svg';
import iconApple from '../public/svg/icon-apple.svg';

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <div>
            <Image src={logoIgnite} alt="Ignite Church"></Image>
          </div>

          <div>
            <div className="flex-start-row">
              <div>
                <a href="#" className="disappear link-menu">
                  Home
                </a>
              </div>
              <div className="ml-3">
                <a href="#" className="disappear link-menu">
                  About
                </a>
              </div>
              <div className="ml-3">
                <a href="#" className="disappear link-menu">
                  Events
                </a>
              </div>
              <div className="ml-3">
                <a href="#" className="disappear link-menu">
                  School
                </a>
              </div>
              <div className="ml-3">
                <a href="#" className="disappear link-menu">
                  Ministries
                </a>
              </div>
              <div className="ml-3">
                <a href="#" className="disappear link-menu">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="bg-black relative hidden py-5" style={{ height: '850px' }} id="hero">
        <div className="bg-hero ">
          <Image
            src={BgHero}
            alt="background ignite church service"
            height={1026}
            style={{ objectFit: 'cover' }}
            quality={100}
          />
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
      <section className="relative bg-black" id="ministries">
        <div className="container py-3">
          <div className="row">
            <div className="grid-6 pt-6">
              <Image
                src={MinistriesImg}
                alt="about ignite"
                quality={100}
                style={{ objectFit: 'fill' }}
                height={340}
                width={360}
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
      <footer className="relative bg-black" id="footer">
        <div className="container py-3">
          <div className="row flex-center">
            <div className="grid-2">
              <Image src={logoIgniteFooter} alt="Ignite Logo" quality={100} width={168} height={168} />
            </div>
            <div className="grid-7">
              <h3 className="uppercase color-white hbig">ignite church</h3>
            </div>
            <div className="grid-3 disappear"></div>
          </div>
          <div className="row mt-4">
            <div className="grid-4">
              <h4 className="color-white">Address</h4>
              <p className="p2 color-gray">Rue de Ligne 8, 1000 Bruxelles</p>
            </div>
            <div className="grid-4">
              <h4 className="color-white">Contact</h4>
              <p className="p2 color-gray">ignitechurchbrussels@gmail.com</p>
            </div>
            <div className="grid-4">
              <h4 className="color-white">Schedule</h4>
              <p className="p2 color-gray">Service every Sunday at 10:00am</p>
            </div>
          </div>
          <div className="row flex-space mt-7">
            <Link href="https://www.instagram.com/ignitechurchbrussels/" target="_blank" className="flex-center">
              <Image className="ml-3" src={iconInstagram} alt="Icon Instagram" quality={100} width={36} height={36} />
              <p className="p2 color-white ml-2 disappear">Instagram</p>
            </Link>
            <Link href="#" className="flex-center">
              <Image src={iconTikTok} alt="Icon TikTok" quality={100} width={36} height={36} />
              <p className="p2 color-white ml-2 disappear">TikTok</p>
            </Link>
            <Link href="https://www.youtube.com/@ignitechurchbrussels/streams" target="_blank" className="flex-center">
              <Image src={iconYoutube} alt="Icon Youtube" quality={100} width={36} height={36} />
              <p className="p2 color-white ml-2 disappear">Youtube</p>
            </Link>
            <Link
              href="https://open.spotify.com/show/2szZKZKVqaQhb0z4TFurZD?si=44f10ecc525a4d29"
              target="_blank"
              className="flex-center">
              <Image src={iconSpotify} alt="Icon Spotify" quality={100} width={36} height={36} />
              <p className="p2 color-white ml-2 disappear">Spotify</p>
            </Link>
            <Link
              href="https://podcasts.apple.com/be/podcast/ignite-church-brussels-messages/id1671893632"
              target="_blank"
              className="flex-center">
              <Image src={iconApple} alt="Icon Apple Music" quality={100} width={36} height={36} />
              <p className="p2 color-white ml-2 disappear">Apple</p>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
