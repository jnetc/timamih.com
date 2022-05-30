import { Phone } from './Phone';
import { Email } from './Email';
import { Telegram } from './Telegram';
import { WhatsApp } from './WhatsApp';

import { ContactIconsType } from '@Types';

export const Icons = ({ icon }: { icon: ContactIconsType }) => {
  const svg = {
    telephone: <Phone />,
    email: <Email />,
    telegram: <Telegram />,
    whatsapp: <WhatsApp />,
  };
  return svg[icon];
};
