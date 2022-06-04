import Link from 'next/link';
// Type
import { NavigationLinkType } from '@Types';

export const Links = ({
  link,
  nameClass,
}: {
  link: NavigationLinkType;
  nameClass: 'mobile-link' | 'desktop-link';
}) => {
  return (
    <Link href={link.navanchor} key={link.id}>
      <a className={`${nameClass} click`}>{link.name}</a>
    </Link>
  );
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
