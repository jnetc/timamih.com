import { useRef, useState } from 'react';
// Hook
import { useOutsideClick } from '@Hooks/useOutsideClick';
// Component
import { ServiceTeammate } from './service-teammate/Teammate';
import { ServiceArticle } from './service-article/ServiceArticle';
// Type
import { ServiceContentType } from '@Types';

export const ServiceContent = ({ data }: { data: ServiceContentType }) => {
  const { teammates, order, ...article } = data;
  const [showTeam, setShowTeam] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const teammatesArticles = teammatesArr.map(t => {
    return <ServiceTeammate key={t.title} data={t} />;
  });

  useOutsideClick(ref, setShowTeam);

  return (
    <div
      data-order={data.order}
      ref={ref}
      className={`service-content ${
        showTeam ? 'show-teammates' : 'hide-teammates'
      }`}
    >
      <ServiceArticle data={article} handler={() => setShowTeam(true)} />
      <span className="background-article"></span>
      <div className="service-teammates">{teammatesArticles}</div>
    </div>
  );
};

const teammatesArr = [
  { title: 'Mate 1 ' },
  { title: 'Mate 2 ' },
  { title: 'Mate 3 ' },
  { title: 'Mate 4 ' },
];
