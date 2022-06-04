import { Links } from './Links';
// Hook
import { useStore } from '@Hooks/useStore';

export const DesktopLinks = () => {
  const { data } = useStore();

  const links = data?.navigation.headerlinks.map(link => {
    return <Links key={link.id} link={link} nameClass="desktop-link" />;
  });
  return <nav className="desktop-links">{links}</nav>;
};
