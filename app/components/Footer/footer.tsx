import Image from 'next/image';
import Link from 'next/link';

import logoIgniteFooter from '../../../public/svg/icon-footer.svg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Image src={logoIgniteFooter} alt="Ignite Logo" width={48} height={48} />
              <span className="footer-logo-text">Ignite Church</span>
            </div>
            <p className="footer-tagline">
              A vibrant Christian community in the heart of Brussels, igniting a generation for Jesus through powerful worship,
              transformative ministry, and authentic fellowship.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h5>Quick Links</h5>
            <div className="footer-links">
              <Link href="/" className="footer-link">
                Home
              </Link>
              <Link href="/about-ignite" className="footer-link">
                About Us
              </Link>
              <Link href="/ministries" className="footer-link">
                Ministries
              </Link>
              <Link href="/events" className="footer-link">
                Events
              </Link>
              <Link href="/give" className="footer-link">
                Give
              </Link>
            </div>
          </div>

          {/* Get Involved */}
          <div className="footer-column">
            <h5>Get Involved</h5>
            <div className="footer-links">
              <a href="https://www.igniteschoolofministry.com/" className="footer-link" target="_self" rel="noopener">
                School of Ministry
              </a>
              <Link href="/ministries/homegroup" className="footer-link">
                Home Groups
              </Link>
              <Link href="/ministries/youth" className="footer-link">
                Youth Ministry
              </Link>
              <Link href="/ministries/worship" className="footer-link">
                Worship Team
              </Link>
              <Link href="/supporters" className="footer-link">
                Our Supporters
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h5>Contact Us</h5>
            <div className="footer-contact-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>
                Rue des Colonies 56,
                <br />
                1000 Brussels, Belgium
              </span>
            </div>
            <div className="footer-contact-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>
                ignitechurchbrussels
                <br />
                @gmail.com
              </span>
            </div>
            <div className="footer-contact-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Sundays at 10:00 AM</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© {currentYear} Ignite Church Brussels. All rights reserved.</p>
          <div className="footer-socials">
            <Link
              href="https://www.instagram.com/ignitechurchbrussels/"
              target="_blank"
              className="footer-social-link"
              aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>
            <Link
              href="https://www.youtube.com/@ignitechurchbrussels/streams"
              target="_blank"
              className="footer-social-link"
              aria-label="YouTube">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </Link>
            <Link
              href="https://open.spotify.com/show/2szZKZKVqaQhb0z4TFurZD"
              target="_blank"
              className="footer-social-link"
              aria-label="Spotify">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </Link>
            <Link
              href="https://podcasts.apple.com/be/podcast/ignite-church-brussels-messages/id1671893632"
              target="_blank"
              className="footer-social-link"
              aria-label="Apple Podcasts">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6c4.636 0 8.4 3.764 8.4 8.4 0 2.033-.719 3.897-1.916 5.356l-.003-.004c-.226.282-.578.444-.946.444-.68 0-1.232-.552-1.232-1.232 0-.346.142-.658.372-.882C17.55 14.716 18 13.416 18 12c0-3.309-2.691-6-6-6s-6 2.691-6 6c0 1.416.45 2.716 1.325 3.682.23.224.372.536.372.882 0 .68-.552 1.232-1.232 1.232-.368 0-.72-.162-.946-.444l-.003.004C4.319 15.897 3.6 14.033 3.6 12c0-4.636 3.764-8.4 8.4-8.4zm0 4.8c1.988 0 3.6 1.612 3.6 3.6 0 .997-.408 1.898-1.065 2.548l-.001-.001c-.22.209-.51.323-.814.323-.68 0-1.232-.552-1.232-1.232 0-.374.167-.708.431-.934.169-.145.281-.357.281-.604 0-.434-.365-.8-.8-.8s-.8.366-.8.8c0 .247.112.459.281.604.264.226.431.56.431.934 0 .68-.552 1.232-1.232 1.232-.304 0-.594-.114-.814-.323l-.001.001C8.608 13.498 8.2 12.597 8.2 11.6c0-1.988 1.612-3.6 3.6-3.6v4.8h-.8v-.8c0-.434-.366-.8-.8-.8s-.8.366-.8.8v3.2c0 1.324 1.076 2.4 2.4 2.4s2.4-1.076 2.4-2.4v-3.2c0-.434-.366-.8-.8-.8s-.8.366-.8.8v.8H12z" />
              </svg>
            </Link>
            <Link href="https://www.tiktok.com/@ignitechurchbrussels" target="_blank" className="footer-social-link" aria-label="TikTok">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
