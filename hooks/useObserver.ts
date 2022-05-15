import { useEffect, RefObject } from 'react';

interface ObserverType {
  ref: RefObject<HTMLElement>;
  selectorClass: string;
  cssClass: string;
}

export const useObserver = ({ ref, selectorClass, cssClass }: ObserverType) => {
  useEffect(() => {
    const element = ref.current;

    const options = {
      root: null,
      rootMarign: '0px',
      threshold: 0,
    };
    if (!element) return;

    const callback = (
      entries: IntersectionObserverEntry[]
      // observer: IntersectionObserver
    ) => {
      // console.log(observer, element);
      entries.forEach(el => {
        const animatedNode = el.target;
        console.log(el, animatedNode);
        animatedNode.classList.toggle(`${cssClass}`);

        //? REMOVE OBSERVER IF ELEMENT INVISIBLE
        // if (!el.isIntersecting) {
        //   observer.unobserve(el.target);
        // }
      });
    };
    const observer = new IntersectionObserver(callback, options);

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [ref, selectorClass, cssClass]);
};
