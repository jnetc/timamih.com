import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.module}>
      <p>Timamih © 2022</p>
      <p>
        Designed and developed by <a href="https://devan.fi">devan.fi</a>
      </p>
    </footer>
  );
};

export default Footer;
