import Link from 'next/link';
import styles from './links.module.css';
// Hook
import { useStore } from '@Hooks/useStore';

export const Links = () => {
  const { language } = useStore();

  const links = nav_urls.map(link => {
    return (
      <Link href={link.anchor} key={link.anchor}>
        <a className={`${styles.link} click`}>{link[language]}</a>
      </Link>
    );
  });

  return <nav className={styles.module}>{links}</nav>;
};

export const nav_urls = [
  {
    fi: 'Mitä ja Miten',
    ru: 'Что и Как',
    en: 'What and How',
    anchor: '#how',
  },
  {
    fi: 'Palvelut',
    ru: 'Услуги',
    en: 'Services',
    anchor: '#services',
  },
  {
    fi: 'Keitä olemme',
    ru: 'Кто мы',
    en: 'Who we are',
    anchor: '#about',
  },
  {
    fi: 'Yhteystiedot',
    ru: 'Связаться',
    en: 'Contact',
    anchor: '#contact',
  },
];
