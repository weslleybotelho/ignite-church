import Image from 'next/image';
import homeGroupImg from '../../img/homegroup.jpg';

export default function HomeGroup() {
  return (
    <>
      <section className="bg-ministries">
        <div className="container h-100 flex-center" id="hero">
          <div className="row">
            <div className="grid-6">
              <h1 className="color-white">Home Groups</h1>
              <p>
                Discover authentic community and grow together in our Home Groups—where hearts unite, relationships
                flourish, and the way of Jesus is practiced.
              </p>
            </div>
            <div className="grid-6">
              <Image src={homeGroupImg} alt="Home group background" height={400} className="cover img-mobile" />
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
                <h2>About Home Groups</h2>
                <p className="p3 color-black ">
                  Ignite Church started in the living room of Pastor Maldo and Pastor Jasmine in 2016. Today, in
                  addition to Sundays, we meet one at homes around Brussels and Antwerp with the purpose of building
                  christ-like relationships with each other.
                </p>
                <p className="p3 color-black mt-1">
                  Community was always made to be Jesus&apos; school of love as the world will know we are His disciples
                  by the love we have for each other. This love can only be ignited through authentic interactions of
                  individuals gathering as one heart with one purpose : be a pleasing sacrifice to their Father. For
                  Jesus, his community of disciples was not just another kind of community like a school or a sport
                  club, it actually was his family: He replied to him, “Who is my mother, and who are my brothers?”
                  Pointing to his disciples, he said, “Here are my mother and my brothers. For whoever does the will of
                  my Father in heaven is my brother and sister and mother. - Matthew 12:48-50
                </p>
              </div>
              <div>
                <h6 className="mt-3">Meeting times</h6>
                <div className="ml-2 mt-2">
                  <li className="none-bullet">Every other week</li>
                </div>
                <h6 className="mt-3">Location</h6>
                <div className="ml-2 mt-2">
                  <li className="none-bullet">Brussels</li>
                  <li className="none-bullet">Antwerp</li>
                </div>
                <p className="p5 color-black mt-1">More information about the addresses please contact by email:</p>
                <a href="mailto:ignitechurchbrussels@gmail.com" className="color-gradient">
                  ignitechurchbrussels@gmail.com
                </a>{' '}
              </div>
            </div>
            <div className="grid-2 disappear"></div>
          </div>
        </div>
      </section>
    </>
  );
}
