import { useRouter } from 'next/router';
// Component
import { MobileLinks } from '../links/MobileLinks';
import { IntlButton } from '@Components/buttons/switch-intl/IntlButton';
// Hook
import { useStore } from '@Hooks/useStore';
// Type
import { MobileNavigationButtonProps, LanguagesType } from '@Types';

export const MobileNavigation = ({ openNavMenu, handler }: MobileNavigationButtonProps) => {
  const { languages } = useStore();
  const { asPath } = useRouter();

  const buttonsOrder = languages.map(order => {
    const reType = order as LanguagesType;
    return <IntlButton key={order} path={asPath} lang={reType} />;
  });
  return (
    <div className={`mobile-menu ${openNavMenu ? 'show-menu' : ''}`}>
      <MobileLinks handler={handler} />
      <div className="mobile-languages">{buttonsOrder}</div>
    </div>
  );
};
