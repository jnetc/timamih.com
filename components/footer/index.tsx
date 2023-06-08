import styles from './footer.module.css';

import { useStore } from '@Hooks/useStore';

const Footer = () => {
  const { data } = useStore();
  const year = new Date().getFullYear();
  return (
    <footer className={styles.module}>
      <p>TimaMih Tmi © {year} </p>
      <p>{data?.getintouch.tunnus}</p>
      <p>
        Designed by <a href="https://www.devan.fi">devan.fi</a>
      </p>
    </footer>
  );
};

export default Footer;
