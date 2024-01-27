'use client';
import IconLoading from '../../../public/svg/icon-loading.svg';

import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Loading() {
  //   const loadingRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    gsap.to('.screen-loading', {
      duration: 1.2,
      opacity: 0,
      delay: 3.3,
      ease: 'power4.out',
    });
  });
  //   useLayoutEffect(() => {
  //     gsap.to('.screen-loading', {
  //       duration: 1.2,
  //       opacity: 0,
  //       delay: 3.3,
  //       ease: 'power4.out',
  //     }); // <-- automatically reverted
  //   });
  return (
    <>
      <div className="screen-loading flex-column">
        <div className="logo-ignite">
          {/* <img src={IconLoading} alt="loading icon ignite church" /> */}
          <IconLoading />
        </div>

        <div className="bar-loader mt-1"></div>
      </div>
    </>
  );
}
