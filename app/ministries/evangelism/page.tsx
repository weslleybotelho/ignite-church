import Image from 'next/image';
import evangelismImg from '../../img/evangelism.jpg';

export default function Evangelism() {
  return (
    <>
      <section className="bg-ministries">
        <div className="container h-100 flex-center" id="hero">
          <div className="row">
            <div className="grid-6">
              <h1 className="color-white">Evangelism</h1>
              <p>
                “Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son
                and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with
                you always, to the very end of the age.” - Matthew 28:19-20
              </p>
            </div>
            <div className="grid-6">
              <Image
                src={evangelismImg}
                alt="Ignite School of Ministries background"
                height={400}
                className="cover img-mobile"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="grid-2 disappear"></div>
            <div className="grid-8">
              <h2>About Evangelism</h2>
              <p className="p3 color-black ">
                The mission of Ignite Evangelism is to passionately share the Gospel of Jesus Christ throughout the city
                of Brussels, facilitating transformative encounters with God through Jesus. To fulfill this mission, we
                organize a variety of impactful activities aimed at reaching and connecting with people in our
                community.
              </p>
              <div className="ml-2 mt-3">
                <li>A mini-training session to prepare, equip and empower people.</li>
                <li>Distribution of food, clothing and accessories for people in need during the Christmas period.</li>
                <li>Gift distribution for Valentine&apos;s Day.</li>
              </div>
              <h6 className="mt-3">Meeting times</h6>
              <div className="ml-2 mt-2">
                <li className="none-bullet">First Sunday of every month after service</li>
              </div>
              <h6 className="mt-3">Location</h6>
              <div className="ml-2 mt-2">
                <li className="none-bullet">Ignite Brussels</li>
              </div>
            </div>
            <div className="grid-2 disappear"></div>
          </div>
        </div>
      </section>
    </>
  );
}
