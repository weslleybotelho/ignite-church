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
      <header className="header-bar">
        <nav>
          <Link href="/">
            <Image src={logoIgnite} alt="Ignite Church Logo" width={42} height={42}></Image>
          </Link>

          <div className="flex-start-row ">
            <div className="disappear">
              <Link href="/" className="link-menu">
                Home
              </Link>
              <Link href="/about-ignite" className="link-menu ml-3">
                About
              </Link>
              <Link href="/events" className="link-menu ml-3">
                Events
              </Link>
              <Link href="/ministries" className=" link-menu ml-3">
                Ministries
              </Link>
              <Link href="/give" className=" link-menu ml-3">
                Give
              </Link>
              <Link href="/ignite-school-of-ministry" className=" link-menu ml-3 mr-3">
                School
              </Link>
            </div>
            {/* <div className="ml-3">
                <Link href="#" className=" link-menu">
                  Contact
                </Link>
              </div> */}
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
              <Link href="/about-ignite" className="link-menu-mobile" onClick={handlerMenuMobile}>
                About
              </Link>
            </li>
            <li>
              <Link href="/events" className="link-menu-mobile" onClick={handlerMenuMobile}>
                Events
              </Link>
            </li>
            <li>
              <Link href="/ministries" className="link-menu-mobile" onClick={handlerMenuMobile}>
                Ministries
              </Link>
            </li>
            <li>
              <Link href="/give" className="link-menu-mobile" onClick={handlerMenuMobile}>
                Give
              </Link>
            </li>
            <li>
              <Link href="/ignite-school-of-ministry" className="link-menu-mobile" onClick={handlerMenuMobile}>
                School
              </Link>
            </li>
            {/* <li>
              <Link href="" className="link-menu-mobile" onClick={handlerMenuMobile}>
                Contact
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
}
