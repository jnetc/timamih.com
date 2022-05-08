// Components
import { HeroLeftSide } from './hero-left-side/HeroLeftSide';
import { HeroRightSide } from './hero-right-side/HeroRightSide';

import styles from './hero.module.css';

const HeroSection = () => {
  return (
    <section className={styles.module}>
      <HeroLeftSide />
      <HeroRightSide />
    </section>
  );
};

export default HeroSection;
