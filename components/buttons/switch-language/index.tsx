import { useRouter } from 'next/router';
import { useState, useRef } from 'react';
// Hooks
import { useStore } from '@Hooks/useStore';
import { useOutsideClick } from '@Hooks/useOutsideClick';
// Component
import { LanguageButton } from './LanguageButton';
// Styles
import styles from './switch-language.module.css';
// Types
import { LanguagesType } from '@Types';

export const SwitchLanguageButton = () => {
  const { asPath, locale } = useRouter();
  const { languages } = useStore();
  const ref = useRef(null);
  const [showLangMenu, setShowLangMenu] = useState(false);

  const langMenuHandler = () => setShowLangMenu(true);
  useOutsideClick(ref, setShowLangMenu);

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
        className={styles.module}
      >
        {locale}
      </div>
      {showLangMenu && (
        <div className={styles.buttons} ref={ref}>
          {buttonsOrder}
        </div>
      )}
      {/* <div className={styles.buttons}>{buttonsOrder}</div> */}
    </>
  );
};
