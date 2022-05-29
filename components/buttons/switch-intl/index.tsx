import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';
// Hooks
import { useStore } from '@Hooks/useStore';
import { useTransitionAnimation } from '@Hooks/useTransitionAnimation';
// Component
import { IntlButton } from './IntlButton';
import { Flags } from './SVG/Flags';
import { ArrowCross } from './SVG/ArrowCross';
// Styles
import styles from './intl.module.css';
// Types
import { LanguagesType } from '@Types';

export const SwitchIntlButton = () => {
  const { asPath } = useRouter();
  const { languages, language } = useStore();
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
    return <IntlButton key={order} path={asPath} lang={reType} />;
  });

  return (
    <>
      <button
        aria-label="language switcher"
        title="language switcher"
        onClick={toggleLanguageMenu}
        ref={ref}
        className={`click intl_button  ${showMenu ? styles.pressed : ''}`}
      >
        <Flags country={language} />
        <p className={styles.text}>{langs[language]}</p>
        <ArrowCross />
      </button>
      <div className={styles.buttons} onClick={toggleLanguageMenu} ref={animated}>
        {buttonsOrder}
      </div>
    </>
  );
};

export const langs = {
  fi: 'Suomi',
  ru: 'Русский',
  en: 'English',
};
