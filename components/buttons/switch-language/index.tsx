import styles from './switch-theme.module.css';
export const OnOffIcon = () => (
  <div className={styles.icon}>
    <svg viewBox="0 0 28 28">
      <path className={styles.line_one} d="M14,8.6v-7" />
      <path
        className={styles.line_two}
        d="M19.1,5.3c3,1.7,5,5,5,8.7c0,5.5-4.5,10-10,10s-10-4.5-10-10C4.1,8.5,8.5,4,14,4v14.8"
      />
    </svg>
  </div>
);
