// Component
import { Avatar } from './Avatar';
import { Star } from '@Components/star';
// Style
import styles from './hero-right-side.module.css';

export const HeroRightSide = () => {
  return (
    <div className={styles.module}>
      <Avatar />
      <Star
        color="accent"
        size={32}
        duration={7}
        customClass={'tima-left-acc-star'}
      />
      <Star
        color="secondary"
        size={24}
        duration={5}
        delay={3}
        customClass={'tima-left-sec-star'}
      />
      <Star
        color="accent"
        size={24}
        duration={11}
        customClass={'tima-right-acc-star'}
      />
      <Star
        color="secondary"
        size={32}
        duration={5}
        delay={2}
        customClass={'tima-right-sec-star'}
      />
      <Star
        color="accent"
        size={36}
        duration={5}
        delay={1}
        customClass={'tima-bottom-acc-star'}
      />
      <Star
        color="secondary"
        size={56}
        duration={13}
        delay={5}
        customClass={'tima-bottom-sec-star'}
      />
    </div>
  );
};
