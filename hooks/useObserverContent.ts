import { useEffect } from 'react';

export const useObserverContent = (cssClass: string) => {
  useEffect(() => {
    const options = {
      rootMargin: '0px',
      threshold: 0.3,
    };

    const callback = function (entries: IntersectionObserverEntry[]) {
      entries.forEach(el => {
        // if element out of the top view
        el.target.classList.toggle('top-hide', Math.sign(el.boundingClientRect.top) <= 0);
        // if element is visible
        el.target.classList.toggle(cssClass, el.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(callback, options);

    document.querySelectorAll('.animated').forEach(el => observer.observe(el));
  }, [cssClass]);
};
