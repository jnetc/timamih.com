export const MobileNavigation = ({ openNavMenu }: { openNavMenu: boolean }) => {
  return <div className={`mobile-menu ${openNavMenu ? 'show-menu' : ''}`}>Navmenu</div>;
};
