import { Links } from './Links';
// Type
import { HandlerType } from '@Types';
// Hook
import { useStore } from '@Hooks/useStore';

export const MobileLinks = ({ handler }: HandlerType) => {
  const { data } = useStore();

  const links = data?.navigation.headerlinks.map(link => {
    return <Links key={link.id} link={link} nameClass="mobile-link" />;
  });

  return (
    <nav className="mobile-links" onClick={() => handler()}>
      {links}
    </nav>
  );
};
