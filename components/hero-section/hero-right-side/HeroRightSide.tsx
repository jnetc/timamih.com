// import Link from 'next/link';
import { useRef } from 'react';
// Hook
import { useObserver } from '@Hooks/useObserver';
import { useStore } from '@Hooks/useStore';
// Component
import { Avatar } from './Avatar';
import { Star } from '@Components/star';
import { Message } from './message/Message';
// import { HandShakeIcon } from './HandShakeIcon';

export const HeroRightSide = () => {
  const { data } = useStore();
  const targetMessages = useRef(null);

  useObserver({
    ref: targetMessages,
    selectorClass: 'hero-right__messages',
    cssClass: 'transition',
    delayClass: { class: 'delay', time: 1.6 },
  });
  const message = data?.heroSection.chat.map((msg, idx) => {
    return (
      <Message key={msg.id} message={msg.message} firstMessage={idx === 0} />
    );
  });
  return (
    <div className="hero-right">
      <Avatar />
      <section
        className="hero-right__messages transition delay"
        ref={targetMessages}
      >
        {message}
        {/* <Link href="#contact">
          <a
            className="hero-right__hire_us hire-button click"
            title={data?.heroSection.hireButton}
            aria-labelledby={data?.heroSection.hireButton}
          >
            {data?.heroSection.hireButton} <HandShakeIcon />
          </a>
        </Link> */}
      </section>
      <Star
        color="accent"
        size={32}
        duration={14}
        delay={4}
        customClass={'tima-left-acc-star'}
      />
      <Star
        color="secondary"
        size={24}
        duration={18}
        delay={3}
        customClass={'tima-left-sec-star'}
      />
      {/* <Star
        color="accent"
        size={24}
        duration={22}
        customClass={'tima-right-acc-star'}
      /> */}
      {/* <Star
        color="secondary"
        size={24}
        duration={10}
        delay={2}
        customClass={'tima-bottom-sec-star'}
      /> */}
    </div>
  );
};

// const messages = [
//   'Hello, I’m Timofei',
//   'Can i help you?',
//   'All you need is to get in touch, maybe in monday at 7',
// ];
