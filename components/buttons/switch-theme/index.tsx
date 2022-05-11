import { useEffect, useState } from 'react';

import styles from './switch-theme.module.css';
import { OnOffIcon } from './on-off-icon';

const DARK_SCHEME = 'dark';
const LIGHT_SCHEME = 'light';

export const SwitchThemeButton = () => {
  const [themeState, setThemeState] = useState(LIGHT_SCHEME);
  const toggleTheme = () => {
    const hasSameValue =
      themeState === DARK_SCHEME ? LIGHT_SCHEME : DARK_SCHEME;
    setThemeState(hasSameValue);
  };

  useEffect(() => {
    const lS = localStorage.getItem('theme') as string;

    if (lS !== LIGHT_SCHEME) {
      document.documentElement.dataset.theme = lS;
      setThemeState(lS);
      return;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', themeState);
    document.documentElement.dataset.theme = themeState;
  }, [themeState]);

  return (
    <button
      aria-label="theme switch button"
      title="theme switch button"
      className={`${styles.module} click`}
      onClick={toggleTheme}
    >
      <OnOffIcon />
      <span className={styles.background} />
    </button>
  );
};
