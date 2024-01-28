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
            <Image src={logoIgnite} alt="Ignite Church" width={42} height={42}></Image>
          </div>

          <div className="disappear">
            <div className="flex-start-row">
              <div>
                <a href="/" className="link-menu">
                  Home
                </a>
              </div>
              <div className="ml-3">
                <a href="/about" className=" link-menu">
                  About
                </a>
              </div>
              <div className="ml-3">
                <a href="#" className=" link-menu">
                  Events
                </a>
              </div>
              <div className="ml-3">
                <a href="#" className=" link-menu">
                  School
                </a>
              </div>
              <div className="ml-3">
                <a href="#" className=" link-menu">
                  Ministries
                </a>
              </div>
              <div className="ml-3">
                <a href="#" className=" link-menu">
                  Contact
                </a>
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
              <Link href="/" className="link-menu-mobile">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="link-menu-mobile">
                About
              </Link>
            </li>
            <li>
              <Link href="" className="link-menu-mobile">
                Events
              </Link>
            </li>
            <li>
              <Link href="" className="link-menu-mobile">
                School
              </Link>
            </li>
            <li>
              <Link href="" className="link-menu-mobile">
                Ministries
              </Link>
            </li>
            <li>
              <Link href="" className="link-menu-mobile">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
