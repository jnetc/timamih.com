import Link from 'next/link';
// Component
import { Avatar } from './Avatar';
import { Star } from '@Components/star';
import { Message } from './message/Message';
import { Handshake } from './HandshakeIcon';
// Style
import styles from './hero-right-side.module.css';

export const HeroRightSide = () => {
  const message = messages.map((message, idx) => {
    return <Message key={idx} message={message} firstMessage={idx === 0} />;
  });
  return (
    <div className={styles.module}>
      <Avatar />
      <section className={styles.messages}>
        {message}
        <Link href="#contact">
          <a className={`${styles.hire_us} hire-button click`}>
            HIRE US <Handshake />
          </a>
        </Link>
      </section>
      <Star
        color="accent"
        size={32}
        duration={7}
        delay={4}
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
      {/* <Star
        color="accent"
        size={32}
        duration={5}
        delay={2}
        customClass={'tima-right-sec-star'}
      /> */}
      {/* <Star
        color="accent"
        size={36}
        duration={9}
        delay={5}
        customClass={'tima-bottom-acc-star'}
      /> */}
      <Star
        color="secondary"
        size={24}
        duration={5}
        delay={2}
        customClass={'tima-bottom-sec-star'}
      />
    </div>
  );
};

const messages = [
  'Hello, I’m Timofei',
  'Can i help you?',
  'All you need is to get in touch',
];
