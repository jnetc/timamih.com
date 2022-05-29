import { Logo } from './Logo/Logo';
import { Links } from './links/Links';
import { SwitchThemeButton } from '@Components/buttons/switch-theme';
import { SwitchIntlButton } from '@Components/buttons/switch-intl';

const Navigation = () => {
  return (
    <header className="navigation">
      <Logo />
      <Links />
      <SwitchIntlButton />
      <SwitchThemeButton />
    </header>
  );
};

export default Navigation;
