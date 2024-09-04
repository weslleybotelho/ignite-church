import Image from 'next/image';
import kidsImg from '../../img/kidsministry.jpg';

export default function Kids() {
  return (
    <>
      <article>
        <header className="bg-ministries">
          <section className="bg-black h-100" id="hero">
            <section className="bg-about relativexs">
              <Image src={kidsImg} alt="About Ignite" className="cover h-100 filter-black50" />
              <header>
                <h1 className="absolute-center absolut color-white text-center uppercase">Ignite Kid&apos;s</h1>
              </header>
            </section>
          </section>
        </header>

        <section className="bg-black">
          <div className="container" id="vision">
            <div className="row flex-center-revert-mobile">
              <div className="grid-6">
                <h2 className="uppercase text-center color-white">mission</h2>
              </div>
              <div className="grid-6 pb-0">
                <div>
                  <p className="p3 color-gray-light">
                    Discover Ignite Kids Ministry, a vibrant ministry launched in 2020. Our goal is clear: to touch the
                    hearts of preschool-aged children. Our dedicated team of volunteers, fluent in French, English, and
                    Dutch, welcomes your children at our office while you enjoy the service.
                  </p>
                  <p className="p3 mt-2 color-gray-light">
                    This is more than just babysitting. We believe in Christ&apos;s ability to transform the youngest
                    hearts, preparing them to positively impact the world. Together, we pray, memorize verses, and share
                    stories inspired by Holy Scriptures. Our lessons are carefully tailored for a deep understanding,
                    integrating faith into children&apos;s everyday lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="" id="infos">
          <div className="container">
            <h6 className="mt-3 ">Meeting times</h6>
            <div className="ml-2 mt-2">
              <li className="none-bullet">Every Sunday from 9:45 AM to 12:30 PM</li>
            </div>
            <h6 className="mt-3">Location</h6>
            <div className="ml-2 mt-2">
              <li className="none-bullet">Tribes Office</li>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
