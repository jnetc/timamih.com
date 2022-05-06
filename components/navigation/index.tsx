import Link from 'next/link';
import styles from './navigation.module.css';
// Hook
import { useStore } from '@Hooks/useStore';

// Components
import { SwitchLanguageButton } from '@Components/buttons/switch-language';
import { SwitchThemeButton } from '@Components/buttons/switch-theme';

const Navigation = () => {
  const { language } = useStore();

  const links = nav_urls.map(link => {
    return (
      <Link href={link.anchor} key={link.anchor}>
        <a>{link[language]}</a>
      </Link>
    );
  });

  return (
    <header className={styles.module}>
      <div className={styles.logo}>Logo</div>
      <nav>{links}</nav>
      <SwitchLanguageButton />
      <SwitchThemeButton />
    </header>
  );
};

export default Navigation;

export const nav_urls = [
  // {
  //   fi: 'Etusivu',
  //   ru: 'Начальная',
  //   en: 'Home',
  //   anchor: '/',
  // },
  {
    fi: 'Mita ja Miten',
    ru: 'Как и Что',
    en: '',
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
