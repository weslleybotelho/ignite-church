import Image from 'next/image';
import womenImg from '../../img/women.jpg';

export default function Evangelism() {
  return (
    <>
      <section className="bg-ministries">
        <div className="container h-100 flex-center" id="hero">
          <div className="row">
            <div className="grid-6">
              <h1 className="color-white">Women Ministry</h1>
              <p>
                Empowering Women. Join our community of strength, support, and spiritual growth in the Women&apos;s
                Ministry at Ignite Church.
              </p>
            </div>
            <div className="grid-6">
              <Image src={womenImg} alt="Women Ministry" height={400} className="cover img-mobile" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="grid-2 disappear"></div>
            <div className="grid-8">
              <h2>About Women Ministry</h2>
              <h6>Vision</h6>
              <div className="ml-3">
                <ul className="none-bullet">
                  <li>Empower each other</li>
                  <li>Expand our capabilities on a personnel and professional level</li>
                  <li>
                    Know ourselves, our inner strengths, and confidence in order to conquer life and its challenges
                  </li>
                  <li>Support each other by encouraging and praying for each other</li>
                  <li>Fully embrace and walk in the new identity that we have in Christ</li>
                  <li>Create a place where you can be transparent and vulnerable</li>
                </ul>
              </div>
              <h6 className="mt-3">Meeting times</h6>
              <div className="ml-2 mt-2">
                <li className="none-bullet">3rd Sunday of the month after service</li>
              </div>
              <h6 className="mt-3">Location</h6>
              <div className="ml-2 mt-2">
                <li className="none-bullet">Tribes Office</li>
              </div>
            </div>
            <div className="grid-2 disappear"></div>
          </div>
        </div>
      </section>
    </>
  );
}
