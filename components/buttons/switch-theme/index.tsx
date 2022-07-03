import { useEffect, useState } from 'react';
// Hook
import { useStore } from '@Hooks/useStore';

import styles from './switch-theme.module.css';
import { OnOffIcon } from './on-off-icon';

const DARK_SCHEME = 'dark';
const LIGHT_SCHEME = 'light';

export const SwitchThemeButton = () => {
  const { switchTheme } = useStore();
  const [themeState, setThemeState] = useState(LIGHT_SCHEME);
  const toggleTheme = () => {
    const hasSameValue = themeState === DARK_SCHEME ? LIGHT_SCHEME : DARK_SCHEME;
    setThemeState(hasSameValue);
    // Changing avatar image
    const avatar = document.querySelector('.hero-right__avatar');
    switchingAvatar(avatar);
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
    // Changing avatar image
    switchTheme(themeState === DARK_SCHEME);
  }, [themeState, switchTheme]);

  return (
    <button
      aria-label="theme switch button"
      title="theme switch button"
      className={`${styles.module} click`}
      onClick={toggleTheme}
    >
      <OnOffIcon />
    </button>
  );
};

const switchingAvatar = (node: Element | null) => {
  if (!node) return;
  node.classList.add('reverse');
  const setClass = setTimeout(() => {
    node.classList.remove('reverse');
    clearTimeout(setClass);
  }, 700);
};
