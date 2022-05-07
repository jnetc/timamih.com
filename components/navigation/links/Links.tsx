import Link from 'next/link';
import styles from '../navigation.module.css';
// Hook
import { useStore } from '@Hooks/useStore';

// Components

export const Links = () => {
  const { language } = useStore();

  const links = nav_urls.map(link => {
    return (
      <Link href={link.anchor} key={link.anchor}>
        <a className={`${styles.link} click`}>{link[language]}</a>
      </Link>
    );
  });

  return <nav className={styles.links}>{links}</nav>;
};

export const nav_urls = [
  {
    fi: 'Mita ja Miten',
    ru: 'Как и Что',
    en: 'How and What',
    anchor: '#how',
  },
  {
    fi: 'Palvelut',
    ru: 'Услуги',
    en: 'Services',
    anchor: '#services',
  },
  {
    fi: 'Meista',
    ru: 'О нас',
    en: 'About',
    anchor: '#about',
  },
  {
    fi: 'Yhteystiedot',
    ru: 'Связаться',
    en: 'Contact',
    anchor: '#contact',
  },
];
