import { useState } from 'react';
// Component
import { Logo } from './Logo/Logo';
import { Links } from './links/Links';
import { SwitchThemeButton } from '@Components/buttons/switch-theme';
import { SwitchIntlButton } from '@Components/buttons/switch-intl';
import { MobileNavigationButton } from '@Components/buttons/mobile-nav';
import { MobileNavigation } from './mobile-navigation';

const Navigation = () => {
  const [navMenu, setNavMenu] = useState(false);

  const openMenu = () => {
    console.log('open', navMenu);
    setNavMenu(!navMenu);
  };

  return (
    <header className="navigation">
      <Logo />
      <Links />
      <SwitchIntlButton />
      <SwitchThemeButton />
      <MobileNavigation openNavMenu={navMenu} />
      <MobileNavigationButton handler={openMenu} />
    </header>
  );
};

export default Navigation;
