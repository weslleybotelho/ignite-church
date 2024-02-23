import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fadeFromBelow = (element: string, duration: number = 2) => {
  const tl = gsap.timeline();
  tl.from(element, {
    duration,
    opacity: 1,
    y: 200,
    stagger: { each: 0.1 },
    ease: 'power4.out',
  });
};
export const fadeFromBelowScroll = (element: string, trigger: string, duration: number = 2) => {
  gsap.from(element, {
    duration,
    opacity: 1,
    y: 200,
    stagger: { each: 0.1 },
    ease: 'power4.out',
    scrollTrigger: {
      trigger,
      start: 'top 80%',
      end: 'top 50%',
    },
  });
};

export const fadeFromOpacity = (element: string, duration: number = 2) => {
  gsap.from(element, {
    opacity: 0,
    ease: 'power4.out',
    stagger: { each: 0.2 },
    duration,
  });
};

export const fadeFromOpacityScroll = (element: string, trigger: string, duration: number = 2) => {
  gsap.from(element, {
    opacity: 0,
    ease: 'power4.out',
    stagger: { each: 0.2 },
    duration,
    scrollTrigger: {
      trigger,
      start: 'top 80%',
      end: 'top 50%',
    },
  });
};

export const slideFromRight = (element: string, duration: number = 2) => {
  const tl = gsap.timeline();

  tl.from(element, {
    opacity: 1,
    x: 200,
    ease: 'power4.out',
    stagger: { each: 0.2 },
    duration,
  });
};

export const slideFromRightScroll = (element: string, trigger: string, duration: number = 2) => {
  gsap.from(element, {
    opacity: 1,
    x: 300,
    ease: 'power4.out',
    stagger: { each: 0.2 },
    duration,
    scrollTrigger: {
      trigger,
      start: 'top 80%',
      end: 'top 50%',
    },
  });
};

export const slideFromLeftScroll = (element: string, trigger: string, duration: number = 2) => {
  gsap.from(element, {
    opacity: 1,
    x: -300,
    ease: 'power4.out',
    stagger: { each: 0.2 },
    duration,
    scrollTrigger: {
      trigger,
      start: 'top 80%',
      end: 'top 50%',
    },
  });
};
