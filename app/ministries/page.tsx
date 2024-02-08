import Image from 'next/image';
import evangelismImg from '../img/evangelism.jpg';
import innerHealingImg from '../img/inner-healing.jpg';
import schoolImg from '../img/school.jpg';
import musicImg from '../img/music.jpg';
import podcastImg from '../img/ignite-podcast.png';
import homeGroupImg from '../img/homegroup.jpg';
import Link from 'next/link';

export default function Ministries() {
  return (
    <>
      <div className="container">
        <h1>Ministries</h1>
        <h5>Find a place for you in what God is doing here</h5>
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
            <Link href={''} className="color-gradient bold">
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
            <h6 className="">School of Ministries</h6>
            <Link href="/ministries/school" className="color-gradient bold">
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
            <Link href={''} className="color-gradient bold">
              View More
            </Link>
          </div>
          <div className="grid-3"></div>
          <div className="grid-3"></div>
        </div>
      </div>
    </>
  );
}
