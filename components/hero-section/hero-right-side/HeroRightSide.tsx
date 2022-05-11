import Image from 'next/image';
import styles from './hero-right-side.module.css';

export const HeroRightSide = () => {
  return (
    <div className={styles.module}>
      <div className={styles.avatar}>
        <Image
          src="/images/timamih.png"
          alt="timamih"
          height={630}
          width={560}
          layout="responsive"
          objectFit="contain"
          quality={80}
          className={styles.pic}
          priority
        />
      </div>
    </div>
  );
};
