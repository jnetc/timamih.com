import styles from './hero-right-side.module.css';

export const HeroRightSide = () => {
  return (
    <div className={styles.module}>
      <div className={`${styles.avatar} ${styles.transition}`}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 645 656"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="ellipse-gradient"
              x1="183.073"
              y1="537.048"
              x2="182.286"
              y2="625.883"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".1" />
              <stop offset="1" />
            </linearGradient>
            <mask id="avatar-mask">
              <path
                d="M644.208 604.019C644.208 632.727 500.058 656 322.239 656C144.42 656 0.269165 632.727 0.269165 604.019C0.269165 96.0152 130.252 0.104368 308.071 0.104368C485.89 0.104368 644.208 42.5568 644.208 604.019Z"
                fill="#fff"
              />
            </mask>
          </defs>
          <ellipse
            cx="322.239"
            cy="604.018"
            rx="321.97"
            ry="51.9814"
            fill="url(#ellipse-gradient)"
          />
          <image
            mask="url(#avatar-mask)"
            width="560"
            height="744"
            x={45}
            // y={45}
            href="/images/timamih.png"
          />
        </svg>
      </div>
    </div>
  );
};
