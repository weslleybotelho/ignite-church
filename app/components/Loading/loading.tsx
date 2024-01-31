'use client';
import gsap from 'gsap';
import { useEffect, useLayoutEffect } from 'react';
import React from 'react';

interface LoadingProps {
  onLoadingComplete: () => void;
}

export default function Loading({ onLoadingComplete }: LoadingProps) {
  const tl1 = gsap.timeline();
  useLayoutEffect(() => {
    tl1.to('.screen-loading', {
      duration: 1.2,
      opacity: 0,
      delay: 3.3,
      ease: 'power4.out',
      onStart: () => {
        // Notify the parent component that loading is complete
        onLoadingComplete();
      },
    });
  });

  return (
    <>
      <div className="screen-loading flex-column">
        <div className="logo-ignite">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="icon-loading">
              <path
                id="column_14"
                d="M53.6735 9.3519L52.3174 8.33179L70.6267 66.7315L71.2961 64.7274L53.6735 9.3519Z"
                fill="#EF702D"
              />
              <path
                id="column_12"
                d="M42.5774 1.21844L40.7476 0L66.2761 79.9308L67.0795 77.7194L42.5774 1.21844Z"
                fill="#EF702D"
              />
              <path
                id="column_8"
                d="M27.8765 9.6167L25.9467 11.062L47.6642 80H50.0073L27.8765 9.6167Z"
                fill="#EF702D"
              />
              <path
                id="column_7"
                d="M24.275 12.3041L22.1787 13.8587L43.0457 80H45.5896L24.275 12.3041Z"
                fill="#EF702D"
              />
              <path
                id="column_6"
                d="M20.6585 14.9993L18.5547 16.5773L38.4274 80H41.3061L20.6585 14.9993Z"
                fill="#EF702D"
              />
              <path
                id="column_5"
                d="M17.1849 17.5616L14.748 19.3584L34.009 80H36.9546L17.1849 17.5616Z"
                fill="#EF702D"
              />
              <path
                id="column_2"
                d="M6.49487 25.5441L3.61621 27.6864L20.2187 80H23.7668L6.49487 25.5441Z"
                fill="#EF702D"
              />
              <path id="column_1" d="M2.94561 28.1701L0 30.3124L15.7322 80H19.4812L2.94561 28.1701Z" fill="#EF702D" />
              <path
                id="column_3"
                d="M10.0412 22.918L7.23191 24.9596L24.7692 79.9999H27.9826L10.0412 22.918Z"
                fill="#EF702D"
              />
              <path
                id="column_4"
                d="M13.6729 20.1552L11.0469 22.116L29.3223 80H32.6026L13.6729 20.1552Z"
                fill="#EF702D"
              />
              <path
                id="column_9"
                d="M31.3138 7.06219L29.6338 8.31994L52.218 79.9999H54.4272L31.3138 7.06219Z"
                fill="#EF702D"
              />
              <path
                id="column_10"
                d="M34.9166 4.39044L33.3047 5.58569L56.9047 80H58.7792L34.9166 4.39044Z"
                fill="#EF702D"
              />
              <path
                id="column_11"
                d="M38.4865 1.74207L37.0561 2.82015L61.3879 79.9999H63.1285L38.4865 1.74207Z"
                fill="#EF702D"
              />
              <path
                id="column_13"
                d="M48.2251 5.28756L46.6226 4.12278L68.4181 73.6422L69.2215 71.2235L48.2251 5.28756Z"
                fill="#EF702D"
              />
              <path
                id="column_15"
                d="M59.5019 13.6781L58.2251 12.725L72.9028 59.5444L73.5723 57.5403L59.5019 13.6781Z"
                fill="#EF702D"
              />
              <path
                id="column_16"
                d="M65.3159 17.9821L64.3638 17.2896L75.3128 52.081L75.7814 50.6297L65.3159 17.9821Z"
                fill="#EF702D"
              />
              <path
                id="column_17"
                d="M70.8168 22.1743L70.0811 21.6307L77.3893 45.2394L77.7909 43.9264L70.8168 22.1743Z"
                fill="#EF702D"
              />
              <path
                id="column_18"
                d="M76.4284 26.3442L75.707 25.8007L79.7319 37.9832L79.9997 37.154L76.4284 26.3442Z"
                fill="#EF702D"
              />
            </g>
          </svg>
        </div>

        <div className="bar-loader mt-1"></div>
      </div>
    </>
  );
}
