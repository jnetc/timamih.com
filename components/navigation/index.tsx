import { useState } from 'react';
// Component
import { Logo } from './Logo/Logo';
import { DesktopLinks } from './links/DesktopLinks';
import { SwitchThemeButton } from '@Components/buttons/switch-theme';
import { SwitchIntlButton } from '@Components/buttons/switch-intl';
import { MobileNavigationButton } from '@Components/buttons/mobile-nav';
import { MobileNavigation } from './mobile-navigation';

const Navigation = () => {
  const [navMenu, setNavMenu] = useState(false);

  const openMenu = () => {
    setNavMenu(!navMenu);
  };
  console.log('open', navMenu);

  return (
    <header className="navigation">
      <Logo />
      <DesktopLinks />
      <SwitchIntlButton />
      <SwitchThemeButton />
      <MobileNavigation openNavMenu={navMenu} handler={openMenu} />
      <MobileNavigationButton handler={openMenu} />
    </header>
  );
};

export default Navigation;
