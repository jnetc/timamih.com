import { useStore } from '@Hooks/useStore';
// Component
import { ActionContacts } from './ActionContacts';
import { CopyContacts } from './CopyContacts';

export type ContactIconsType = 'telegram' | 'phone' | 'email' | 'whatsapp';

export const Contacts = () => {
  const { data } = useStore();
  if (!data) return null;

  return (
    <div className="contacts">
      <ActionContacts links={data.getintouch.contacts} />
      <h2>{data?.getintouch.copyText}</h2>
      <CopyContacts />
    </div>
  );
};
