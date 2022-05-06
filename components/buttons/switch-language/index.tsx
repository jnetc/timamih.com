import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';
// Hooks
import { useStore } from '@Hooks/useStore';
// Component
import { LanguageButton } from './LanguageButton';
// Styles
import styles from './switch-language.module.css';
// Types
import { LanguagesType } from '@Types';

export const SwitchLanguageButton = () => {
  const { asPath, locale } = useRouter();
  const { languages } = useStore();
  const ref = useRef<HTMLDivElement>(null);
  const [showLangMenu, setShowLangMenu] = useState(false);

  const langMenuHandler = () => setShowLangMenu(!showLangMenu);
  const selectLanguage = () => setShowLangMenu(false);

  // Handle outside click
  useEffect(() => {
    const outsideClick = (event: Event) => {
      const element = event.target as HTMLElement;
      if (ref.current?.contains(element)) return;
      setShowLangMenu(false);
    };
    document.addEventListener('click', outsideClick);

    return () => document.removeEventListener('click', outsideClick);
  }, [showLangMenu]);

  const buttonsOrder = languages.map(order => {
    const reType = order as LanguagesType;
    return <LanguageButton key={order} path={asPath} lang={reType} />;
  });

  return (
    <>
      <div
        role="button"
        aria-label="language switcher"
        title="language switcher"
        onClick={langMenuHandler}
        ref={ref}
        className={styles.module}
        id="languages"
      >
        {locale}
      </div>
      {showLangMenu && (
        <div className={styles.buttons} onClick={selectLanguage}>
          {buttonsOrder}
        </div>
      )}
      {/* <div
        className={`${styles.buttons} ${
          showLangMenu ? styles.show_languages : ''
        }`}
        // ref={ref}
        onClick={selectLanguage}
      >
        {buttonsOrder}
      </div> */}
      {/* <div className={styles.buttons}>{buttonsOrder}</div> */}
    </>
  );
};
