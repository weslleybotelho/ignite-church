import Image from 'next/image';
import Link from 'next/link';

import logoIgniteFooter from '../../../public/svg/icon-footer.svg';
import iconInstagram from '../../../public/svg/icon-insta.svg';
import iconYoutube from '../../../public/svg/icon-yt.svg';
import iconTikTok from '../../../public/svg/icon-tiktok.svg';
import iconSpotify from '../../../public/svg/icon-spotify.svg';
import iconApple from '../../../public/svg/icon-apple.svg';

export default function Footer() {
  return (
    <>
      <footer className="relative bg-black" id="footer">
        <div className="container py-1">
          <div className="row flex-center">
            <div className="grid-2">
              <Image src={logoIgniteFooter} alt="Ignite Logo" width={140} height={140} />
            </div>
            <div className="grid-7">
              <h3 className="uppercase color-white hbig">ignite church</h3>
            </div>
            <div className="grid-3 disappear"></div>
          </div>
          <div className="row">
            <div className="grid-4">
              <h4 className="color-white">Address</h4>
              <p className="p2 color-gray">Rue des Colonies 56, 1000 Bruxelles</p>
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
          <div className="row flex-space mt-3">
            <Link href="https://www.instagram.com/ignitechurchbrussels/" target="_blank" className="flex-center">
              <Image className="ml-3" src={iconInstagram} alt="Icon Instagram" width={36} height={36} />
              <p className="p2 color-white ml-2 disappear">Instagram</p>
            </Link>
            <Link href="#" className="flex-center">
              <Image src={iconTikTok} alt="Icon TikTok" width={36} height={36} />
              <p className="p2 color-white ml-2 disappear">TikTok</p>
            </Link>
            <Link href="https://www.youtube.com/@ignitechurchbrussels/streams" target="_blank" className="flex-center">
              <Image src={iconYoutube} alt="Icon Youtube" width={36} height={36} />
              <p className="p2 color-white ml-2 disappear">Youtube</p>
            </Link>
            <Link
              href="https://open.spotify.com/show/2szZKZKVqaQhb0z4TFurZD?si=44f10ecc525a4d29"
              target="_blank"
              className="flex-center">
              <Image src={iconSpotify} alt="Icon Spotify" width={36} height={36} />
              <p className="p2 color-white ml-2 disappear">Spotify</p>
            </Link>
            <Link
              href="https://podcasts.apple.com/be/podcast/ignite-church-brussels-messages/id1671893632"
              target="_blank"
              className="flex-center">
              <Image src={iconApple} alt="Icon Apple Music" width={36} height={36} />
              <p className="p2 color-white ml-2 disappear">Apple</p>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
