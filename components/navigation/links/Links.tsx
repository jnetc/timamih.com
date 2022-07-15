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
