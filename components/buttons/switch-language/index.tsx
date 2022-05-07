import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';
// Hooks
import { useStore } from '@Hooks/useStore';
import { useTransitionAnimation } from '@Hooks/useTransitionAnimation';
// Component
import { LanguageButton } from './LanguageButton';
// Styles
import styles from './switch-language.module.css';
// Types
import { LanguagesType } from '@Types';

export const SwitchLanguageButton = () => {
  const { asPath, locale } = useRouter();
  const { languages } = useStore();
  const ref = useRef<HTMLButtonElement>(null);
  const animated = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);

  const toggleLanguageMenu = () => setShowMenu(!showMenu);

  useTransitionAnimation(animated, showMenu, 300);

  // Handle outside click
  // Don't use hook, because need to update
  // translation page after selected language
  useEffect(() => {
    const outsideClick = (event: Event) => {
      const element = event.target as HTMLElement;
      if (ref.current?.contains(element)) return;
      setShowMenu(false);
    };
    document.addEventListener('click', outsideClick);

    return () => document.removeEventListener('click', outsideClick);
  }, [showMenu]);

  const buttonsOrder = languages.map(order => {
    const reType = order as LanguagesType;
    return <LanguageButton key={order} path={asPath} lang={reType} />;
  });

  return (
    <>
      <button
        aria-label="language switcher"
        title="language switcher"
        onClick={toggleLanguageMenu}
        ref={ref}
        className={`${styles.module} ${showMenu ? styles.pressed : ''} click`}
        id="languages"
      >
        <p>{locale}</p>
      </button>
      <div
        className={styles.buttons}
        onClick={toggleLanguageMenu}
        ref={animated}
      >
        {buttonsOrder}
      </div>
    </>
  );
};
