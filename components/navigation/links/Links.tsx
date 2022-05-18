import Link from 'next/link';
// Hook
import { useStore } from '@Hooks/useStore';

export const Links = () => {
  const { data } = useStore();

  const links = data?.navigation.headerlinks.map(link => {
    return (
      <Link href={link.navanchor} key={link.id}>
        <a className="desktop-link click">{link.name}</a>
      </Link>
    );
  });

  return <nav className="desktop-links">{links}</nav>;
};

// export const nav_urls = [
//   {
//     fi: 'Mitä ja Miten',
//     ru: 'Что и Как',
//     en: 'What and How',
//     anchor: '#how',
//   },
//   {
//     fi: 'Palvelut',
//     ru: 'Услуги',
//     en: 'Services',
//     anchor: '#services',
//   },
//   {
//     fi: 'Keitä olemme',
//     ru: 'Кто мы',
//     en: 'Who we are',
//     anchor: '#about',
//   },
//   {
//     fi: 'Yhteystiedot',
//     ru: 'Связаться',
//     en: 'Contact',
//     anchor: '#contact',
//   },
// ];
