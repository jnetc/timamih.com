import Link from 'next/link';
// Component
import { Icons } from './SVG/Icons';
import { ContactsType, ContactIconsType } from '@Types';

export const ActionContacts = ({ links }: { links: Array<ContactsType> }) => {
  const actionButtons = links.map(button => {
    if (button.url.length === 0) return;
    const href = urlSelect(button.icon, button.url);
    return (
      <Link href={href} key={button.id}className="contact-button" title={`${button.icon}`} aria-label={`${button.icon}`}>
        <Icons icon={button.icon} />
      </Link>
    );
  });
  return <div className="action-contacts">{actionButtons}</div>;
};

// Helper function to separate each links
function urlSelect(icon: ContactIconsType, url: string) {
  const urls = {
    telephone: `tel:+${url}`,
    telegram: `tg://resolve?domain=${url}`,
    whatsapp: `https://wa.me/${url}`,
    email: `mailto:${url}`,
  };
  return urls[icon];
}
