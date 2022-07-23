import styles from './footer.module.css';

import { useStore } from '@Hooks/useStore';

const Footer = () => {
  const { data } = useStore();
  return (
    <footer className={styles.module}>
      <p>Timamih © 2022 </p>
      <p>{data?.getintouch.tunnus}</p>
      <p>
        Designed by <a href="https://devan.fi">devan.fi</a>
      </p>
    </footer>
  );
};

export default Footer;
