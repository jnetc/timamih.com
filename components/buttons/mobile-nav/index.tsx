import styles from './mobile-nav.module.css';
// Type
import { HandlerType } from '@Types';

export const MobileNavigationButton = ({ handler }: HandlerType) => {
  return (
    <button className={`${styles.module}  click`} onClick={() => handler()}>
      <div className={styles.icon}>
        <svg viewBox="0 0 28 28">
          <line className={styles.icon_menu} x1="5.4" y1="13.9" x2="22.6" y2="13.9" />
          <polyline className={styles.icon_cross} points="7,6.9 21,20.9 21,20.9 7,20.9 " />
          <polyline className={styles.icon_cross} points="7,20.9 21,6.9 21,6.9 7,6.9 " />
        </svg>
      </div>
    </button>
  );
};
