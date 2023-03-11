import { Telephone } from './Telephone';
import { Instagram } from './Instagram';
import { Telegram } from './Telegram';
import { WhatsApp } from './WhatsApp';
import { Email } from './Email';

import type { ContactIconsType } from '@Types';

export const Icons = ({ icon }: { icon: ContactIconsType }) => {
  const svg = {
    telephone: <Telephone />,
    email: <Email />,
    instagram: <Instagram />,
    telegram: <Telegram />,
    whatsapp: <WhatsApp />,
  };
  return svg[icon];
};
