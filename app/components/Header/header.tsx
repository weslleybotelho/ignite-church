'use client';
import Image from 'next/image';
import logoIgnite from '../../../public/svg/logo-ignite.svg';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const navLinks = [
    { href: '/', label: 'Home', external: false },
    { href: '/about-ignite', label: 'About', external: false },
    { href: '/events', label: 'Events', external: false },
    { href: '/ministries', label: 'Ministries', external: false },
    { href: '/give', label: 'Give', external: false },
    { href: 'https://www.igniteschoolofministry.com/', label: 'School', external: true },
  ];

  return (
    <>
      <header className={`header header-transparent ${isScrolled ? 'header-scrolled' : ''}`}>
        <nav className="nav">
          <Link href="/" className="nav-logo" onClick={closeMenu}>
            <Image src={logoIgnite} alt="Ignite Church Logo" width={44} height={44} priority />
            <span className="nav-logo-text">Ignite Church</span>
          </Link>

          <div className="nav-menu">
            {navLinks.map((link) =>
              link.external ? (
                <a key={link.href} href={link.href} className="nav-link" target="_self" rel="noopener">
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} href={link.href} className={`nav-link ${pathname === link.href ? 'active' : ''}`}>
                  {link.label}
                </Link>
              ),
            )}
          </div>

          <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
            <span className="nav-toggle-line"></span>
            <span className="nav-toggle-line"></span>
            <span className="nav-toggle-line"></span>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <div className={`nav-mobile ${isMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link) =>
          link.external ? (
            <a key={link.href} href={link.href} className="nav-mobile-link" onClick={closeMenu} target="_self" rel="noopener">
              {link.label}
            </a>
          ) : (
            <Link key={link.href} href={link.href} className="nav-mobile-link" onClick={closeMenu}>
              {link.label}
            </Link>
          ),
        )}
        <div className="nav-mobile-cta">
          <Link href="https://maps.app.goo.gl/QrMxLi79z9gTyGBg9" target="_blank" className="btn-primary btn-lg" onClick={closeMenu}>
            Visit Us Sunday
          </Link>
        </div>
      </div>
    </>
  );
}
