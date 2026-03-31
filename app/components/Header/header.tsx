'use client';
import Image from 'next/image';
import logoIgnite from '../../../public/svg/logo-ignite.svg';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation, useLocale } from '../../i18n/useTranslation';
import { locales, localeLabels, Locale } from '../../i18n/config';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslation();
  const locale = useLocale();

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

  const switchLocale = (newLocale: Locale) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  const localePath = (href: string) => `/${locale}${href}`;

  const navLinks = [
    { href: '/', label: t.common.navHome, external: false },
    { href: '/about-ignite', label: t.common.navAbout, external: false },
    { href: '/events', label: t.common.navEvents, external: false },
    { href: '/ministries', label: t.common.navMinistries, external: false },
    { href: '/locations', label: t.common.navLocations, external: false },
    { href: '/give', label: t.common.navGive, external: false },
    { href: 'https://www.igniteschoolofministry.com/', label: t.common.navSchool, external: true },
  ];

  return (
    <>
      <header className={`header header-transparent ${isScrolled ? 'header-scrolled' : ''}`}>
        <nav className="nav">
          <Link href={localePath('/')} className="nav-logo" onClick={closeMenu}>
            <Image src={logoIgnite} alt="Ignite Church Logo" width={44} height={44} priority />
            <span className="nav-logo-text">{t.common.navLogo}</span>
          </Link>

          <div className="nav-menu">
            {navLinks.map((link) =>
              link.external ? (
                <a key={link.href} href={link.href} className="nav-link" target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} href={localePath(link.href)} className={`nav-link ${pathname === localePath(link.href) ? 'active' : ''}`}>
                  {link.label}
                </Link>
              ),
            )}
            <div className="nav-locale-switcher" style={{ display: 'flex', gap: '0.25rem', marginLeft: '0.75rem', alignItems: 'center' }}>
              {locales.map((l) => (
                <button
                  key={l}
                  onClick={() => switchLocale(l)}
                  style={{
                    background: l === locale ? 'var(--color-brand, #E85A24)' : 'transparent',
                    color: l === locale ? 'white' : 'rgba(255,255,255,0.6)',
                    border: l === locale ? 'none' : '1px solid rgba(255,255,255,0.2)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    lineHeight: 1,
                  }}
                >
                  {localeLabels[l]}
                </button>
              ))}
            </div>
          </div>

          <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label={t.common.toggleMenu}>
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
            <a key={link.href} href={link.href} className="nav-mobile-link" onClick={closeMenu} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ) : (
            <Link key={link.href} href={localePath(link.href)} className="nav-mobile-link" onClick={closeMenu}>
              {link.label}
            </Link>
          ),
        )}
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', padding: '1rem 0' }}>
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => { switchLocale(l); closeMenu(); }}
              style={{
                background: l === locale ? 'var(--color-brand, #E85A24)' : 'transparent',
                color: l === locale ? 'white' : 'rgba(255,255,255,0.6)',
                border: l === locale ? 'none' : '1px solid rgba(255,255,255,0.3)',
                padding: '0.4rem 0.8rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: 600,
              }}
            >
              {localeLabels[l]}
            </button>
          ))}
        </div>
        <div className="nav-mobile-cta">
          <Link href="https://maps.app.goo.gl/QrMxLi79z9gTyGBg9" target="_blank" className="btn-primary btn-lg" onClick={closeMenu}>
            {t.common.visitUsSunday}
          </Link>
        </div>
      </div>
    </>
  );
}
