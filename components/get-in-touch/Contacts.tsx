import { useStore } from '@Hooks/useStore';
// Component
import { ActionContacts } from './action-contacts/ActionContacts';
import { CopyContacts } from './copy-contacts/CopyContacts';

export type ContactIconsType = 'telegram' | 'phone' | 'email' | 'whatsapp';

export const Contacts = () => {
  const { data } = useStore();
  if (!data) return null;

  return (
    <div className="contacts">
      <ActionContacts links={data.getintouch.contacts} />
      <h2>{data?.getintouch.copyText}</h2>
      <CopyContacts links={data.getintouch.contacts} />
    </div>
  );
};
