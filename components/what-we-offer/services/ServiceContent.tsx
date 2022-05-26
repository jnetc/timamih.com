import { useRef, useState } from 'react';
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

  useOutsideClick(ref, setShowTeam);

  return (
    <div ref={ref} className={`service-content ${showTeam ? 'show-teammates' : 'hide-teammates'}`}>
      <ServiceArticle data={article} handler={() => setShowTeam(true)} />
      <span className="background-article" />
      <TeammateGroup teammates={teammates} handler={() => setShowTeam(false)} />
    </div>
  );
};
