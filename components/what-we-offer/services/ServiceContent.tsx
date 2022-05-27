import { useRef, useState, useEffect } from 'react';
// Hook
import { useOutsideClick } from '@Hooks/useOutsideClick';
// Component
import { TeammateGroup } from './service-teammate/Teammate-group';
import { ServiceArticle } from './service-article/ServiceArticle';
// Type
import { ServiceContentType } from '@Types';

export const ServiceContent = ({ data }: { data: ServiceContentType }) => {
  const { teammates, order, ...article } = data;
  const [showTeam, setShowTeam] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const openTeammates = () => {
    if (!teammates || teammates.length === 0) return;
    setShowTeam(true);
  };

  useOutsideClick(ref, setShowTeam);
  console.log(teammates);

  useEffect(() => {
    const preventOnLoadAnimation = setTimeout(() => {
      ref.current?.querySelector('.background-article')?.removeAttribute('style');
      ref.current?.querySelector('.service-teammates')?.removeAttribute('style');
      clearTimeout(preventOnLoadAnimation);
    }, 700);
  }, []);

  return (
    <div ref={ref} className={`service-content ${showTeam ? 'show-teammates' : 'hide-teammates'}`}>
      <ServiceArticle data={article} handler={openTeammates} />
      <span
        className="background-article"
        style={{ visibility: 'hidden', animationDuration: '0s' }}
      />
      <TeammateGroup teammates={teammates} handler={() => setShowTeam(false)} />
    </div>
  );
};
