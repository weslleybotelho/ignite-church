'use client';
import Image from 'next/image';
import logoIgnite from '../../../public/svg/logo-ignite.svg';
import { useRef } from 'react';
import Link from 'next/link';

export default function Header() {
  const bxRef = useRef<HTMLDivElement>(null);
  const menuMobileRef = useRef<HTMLDivElement>(null);

  function handlerMenuMobile() {
    if (bxRef.current && menuMobileRef.current) {
      bxRef.current.classList.toggle('activebx');
      menuMobileRef.current.classList.toggle('showmenu');
    }
  }

  return (
    <>
      <header>
        <nav>
          <div>
            <Link href="/">
              <Image src={logoIgnite} alt="Ignite Church Logo" width={42} height={42}></Image>
            </Link>
          </div>

          <div className="disappear">
            <div className="flex-start-row">
              <div>
                <Link href="/" className="link-menu">
                  Home
                </Link>
              </div>
              <div className="ml-3">
                <Link href="/about" className=" link-menu">
                  About
                </Link>
              </div>
              <div className="ml-3">
                <Link href="/ministries/school" className=" link-menu">
                  School
                </Link>
              </div>
              <div className="ml-3">
                <Link href="/ministries" className=" link-menu">
                  Ministries
                </Link>
              </div>
              <div className="ml-3">
                <Link href="#" className=" link-menu">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="bx" ref={bxRef} onClick={handlerMenuMobile}></div>
        </nav>
      </header>

      <div className="relative">
        <div className="menu-mobile" ref={menuMobileRef}>
          <ul className="nav-mobile">
            <li>
              <Link href="/" className="link-menu-mobile" onClick={handlerMenuMobile}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="link-menu-mobile" onClick={handlerMenuMobile}>
                About
              </Link>
            </li>
            <li>
              <Link href="/ministries/school" className="link-menu-mobile" onClick={handlerMenuMobile}>
                School
              </Link>
            </li>
            <li>
              <Link href="/ministries" className="link-menu-mobile" onClick={handlerMenuMobile}>
                Ministries
              </Link>
            </li>
            <li>
              <Link href="" className="link-menu-mobile" onClick={handlerMenuMobile}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
