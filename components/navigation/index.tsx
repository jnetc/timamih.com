import { Logo } from './Logo/Logo';
import { Links } from './links/Links';
import { SwitchLanguageButton } from '@Components/buttons/switch-language';
import { SwitchThemeButton } from '@Components/buttons/switch-theme';

const Navigation = () => {
  return (
    <header className="navigation">
      <Logo />
      <Links />
      <SwitchLanguageButton />
      <SwitchThemeButton />
    </header>
  );
};

export default Navigation;
