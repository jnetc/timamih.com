import { useState } from 'react';
import styles from './copy-button.module.css';
// Hook
import { useStore } from '@Hooks/useStore';

export const CopyButton = (text: { value: string }) => {
  const { language } = useStore();
  const [isCopy, setIsCopy] = useState(false);
  const regex = new RegExp('[@ | d{5,}]', 'gm');

  const copyPhoneNumber = () => {
    if (regex.exec(text.value)) {
      navigator.clipboard.writeText(text.value);
    } else {
      // Instagram href
      navigator.clipboard.writeText(`https://www.instagram.com/${text.value}`);
    }
    setIsCopy(true);
    const clean = setTimeout(() => {
      setIsCopy(false);
      clearTimeout(clean);
    }, 1000);
  };

  return (
    <button
      className={isCopy ? `${styles.module} ${styles.is_copy}` : `${styles.module}`}
      onMouseDown={copyPhoneNumber}
      title={title[language]}
      aria-label={title[language]}
      data-copy={dataCopy[language]}
    >
      <span className={`${styles.copied_icon}`} />
      <span className={`${styles.copy_icon}`} />
    </button>
  );
};

const dataCopy = {
  fi: 'kopioitu',
  ru: 'скопирован',
  en: 'copied',
};
const title = {
  fi: 'kopioi ',
  ru: 'скопировать',
  en: 'copy',
};
