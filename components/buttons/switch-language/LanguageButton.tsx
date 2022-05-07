import { useRouter } from 'next/router';
import styles from './switch-language.module.css';
// Types
import { LanguagesType } from '@Types';

export const LanguageButton = ({
  path,
  lang,
}: {
  path: string;
  lang: LanguagesType;
}) => {
  const { push, locale } = useRouter();
  return (
    <button
      className={`${styles.button} ${lang === locale ? styles.active : ''}`}
      onClick={() => {
        push(`${path}`, `${path}`, { locale: lang });
      }}
    >
      <strong>{lang}</strong> {context[lang]}
    </button>
  );
};

const context = {
  fi: 'Suomi',
  ru: 'Русский',
  en: 'English',
};
