import Image from 'next/image';
import kidsImg from '../../img/kidsministry.jpg';

export default function Kids() {
  return (
    <>
      <article>
        <section className="bg-ministries">
          <div className="container h-100 flex-center" id="hero">
            <div className="row">
              <div className="grid-6">
                <h1 className="color-white">Kid&apos;s Ministry</h1>
                <p>Nurturing Young Hearts, Building a Bright Future.</p>
              </div>
              <div className="grid-6">
                <Image src={kidsImg} alt="Home group background" height={400} className="cover img-mobile" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="grid-2 disappear"></div>
              <div className="grid-8">
                <div>
                  <h2>About Kid&apos;s Ministry</h2>
                  <p className="p3 color-black ">
                    Discover Ignite Kids Ministry, a vibrant ministry launched in 2020. Our goal is clear: to touch the
                    hearts of preschool-aged children. Our dedicated team of volunteers, fluent in French, English, and
                    Dutch, welcomes your children at our office while you enjoy the service.
                  </p>
                  <p className="p3 color-black mt-1">
                    This is more than just babysitting. We believe in Christ&apos;s ability to transform the youngest
                    hearts, preparing them to positively impact the world. Together, we pray, memorize verses, and share
                    stories inspired by Holy Scriptures. Our lessons are carefully tailored for a deep understanding,
                    integrating faith into children&apos;s everyday lives.
                  </p>
                  <p className="p3 color-black mt-1">
                    Join us in this educational and spiritual adventure, where every moment becomes an opportunity for
                    children to grow in faith, shaping future leaders inspired by the love of Christ.
                  </p>
                </div>
                <div>
                  <h6 className="mt-3">Meeting times</h6>
                  <div className="ml-2 mt-2">
                    <li className="none-bullet">Every Sunday from 9:45 AM to 12:30 PM</li>
                  </div>
                  <h6 className="mt-3">Location</h6>
                  <div className="ml-2 mt-2">
                    <li className="none-bullet">Tribes Office</li>
                  </div>
                </div>
              </div>
              <div className="grid-2 disappear"></div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
