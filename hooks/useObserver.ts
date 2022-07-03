import { useEffect, RefObject } from 'react';

interface ObserverType {
  ref: RefObject<HTMLElement>;
  selectorClass: string;
  cssClass: string;
  delayClass?: { class: string; time: number };
}

export const useObserver = ({ ref, selectorClass, cssClass, delayClass }: ObserverType) => {
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
      entries.forEach(el => {
        const animatedNode = el.target;

        if (el.isIntersecting) {
          animatedNode.classList.remove(`${cssClass}`);
          if (!delayClass) return;
          const delay = setTimeout(() => {
            animatedNode.classList.remove(`${delayClass.class}`);
            clearTimeout(delay);
          }, 1000 * delayClass.time);
        }

        // if (el.isIntersecting) {
        //   console.log(animatedNode, cssClass);
        //   animatedNode.classList.remove(`${cssClass}`);
        //   observer.unobserve(el.target);
        //   return;
        // }

        //? REMOVE OBSERVER IF ELEMENT INVISIBLE
        // if (!el.isIntersecting) {
        //   observer.unobserve(el.target);
        // }
      });
    };
    const observer = new IntersectionObserver(callback, options);

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [ref, selectorClass, cssClass, delayClass]);
};
