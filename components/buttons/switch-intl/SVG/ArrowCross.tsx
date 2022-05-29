import styles from '../intl.module.css';

export const ArrowCross = () => (
  <svg className={styles.arrow_cross} viewBox="0 0 18 20">
    <line x1="1.8" y1="2" x2="16.1" y2="18.1" />
    <line x1="1.8" y1="18.1" x2="16.1" y2="1.9" />
  </svg>
);
