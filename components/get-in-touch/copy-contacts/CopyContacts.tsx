import { useStore } from '@Hooks/useStore';
// Component
import { CopyButton } from '@Components/buttons/clipboard';
// Type
import { ContactsType, ContactIconsType } from '@Types';

export const CopyContacts = ({ links }: { links: Array<ContactsType> }) => {
  const { language } = useStore();
  const copyButtons = links.map(button => {
    if (button.url.length === 0) return;
    const data = urlSelect(button.icon, button.url);
    return (
      <div key={button.id} className="copy-contact">
        <CopyButton value={data.url.replaceAll(' ', '')} />
        <p className="copy-data" data-label={data.label[language]}>
          {data.url}
        </p>
      </div>
    );
  });
  return <div className="copy-contacts">{copyButtons}</div>;
};

// Helper function to separate each links
function urlSelect(icon: ContactIconsType, url: string) {
  let phone = '';
  if (icon === 'telephone') {
    const country = url.substring(0, 3);
    const firstNum = url.substring(3, 5);
    const SecondNum = url.substring(5, 8);
    const ThirdNum = url.substring(8, 12);
    phone = `${country} ${firstNum} ${SecondNum} ${ThirdNum}`;
  }
  const urls = {
    telephone: { label: { en: 'Phone', ru: 'Телефон', fi: 'Puhelin' }, url: `+${phone}` },
    telegram: { label: { en: 'Telegram', ru: 'Телеграм', fi: 'Telegram' }, url: `@${url}` },
    whatsapp: { label: { en: 'WhatsApp', ru: 'WhatsApp', fi: 'WhatsApp' }, url },
    email: { label: { en: 'Email', ru: 'Эл. адрес', fi: 'Sähköposti' }, url },
    instagram: { label: { en: 'Instagram', ru: 'Инстаграм', fi: 'Instagram' }, url },
  };
  return urls[icon];
}
