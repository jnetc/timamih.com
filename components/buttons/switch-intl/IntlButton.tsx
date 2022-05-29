import { useRouter } from 'next/router';
// Types
import { LanguagesType } from '@Types';
// Component
import { Flags } from './SVG/Flags';
// lang constant
import { langs } from '.';
// Styles
import styles from './intl.module.css';

export const IntlButton = ({ path, lang }: { path: string; lang: LanguagesType }) => {
  const { push, locale } = useRouter();
  return (
    <button
      className={`${styles.button} ${lang === locale ? styles.active : ''}`}
      onClick={() => {
        push(`${path}`, `${path}`, { locale: lang });
      }}
    >
      <Flags country={lang} />
      <strong>{lang}</strong> {langs[lang]}
      <span />
    </button>
  );
};
