// import Link from 'next/link';
import { useRef, useEffect } from 'react';
// Hook
import { useObserver } from '@Hooks/useObserver';
import { useStore } from '@Hooks/useStore';

const FOR_DARK_THEME = '/images/dark_theme_tima.png';
const FOR_LIGHT_THEME = '/images/light_theme_tima.png';

export const Avatar = () => {
  const targetAvatar = useRef<HTMLDivElement>(null);
  const { darkTheme } = useStore();

  useEffect(() => {
    const el = targetAvatar.current;
    const avatar = el?.querySelector('.hero-right__image');
    console.log('avatar load', darkTheme ? FOR_DARK_THEME : FOR_LIGHT_THEME);
    const setClass = setTimeout(() => {
      if (darkTheme) {
        avatar?.setAttribute('href', '/images/dark_theme_tima.png');
      } else {
        avatar?.setAttribute('href', '/images/light_theme_tima.png');
      }
      clearTimeout(setClass);
    }, 700);
  }, [darkTheme]);

  useObserver({
    ref: targetAvatar,
    selectorClass: 'hero-right',
    cssClass: 'transition',
  });

  return (
    <div className="hero-right__avatar" ref={targetAvatar}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 645 755"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="ellipse-gradient"
            x1="185"
            y1="600"
            x2="185"
            y2="700"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".1" className="hero-right__gradient" />
            <stop offset="1" className="hero-right__gradient" />
          </linearGradient>
          <mask id="avatar-mask">
            <path
              d="M644.896 702.519C644.896 731.227 500.746 754.5 322.927 754.5C145.108 754.5 0.957031 731.227 0.957031 702.519C0.957031 194.515 129.369 0.5 307.188 0.5C485.007 0.5 644.896 141.057 644.896 702.519Z"
              fill="#fff"
            />
          </mask>
        </defs>
        <ellipse
          cx="322.239"
          cy="702"
          rx="0"
          ry="0"
          fill="url(#ellipse-gradient)"
          className="hero-right__hole"
        />
        <image
          mask="url(#avatar-mask)"
          width="550"
          height="800"
          x={45}
          // href="/images/dark_theme_tima.png"
          className="hero-right__image"
        />
      </svg>
    </div>
  );
};
