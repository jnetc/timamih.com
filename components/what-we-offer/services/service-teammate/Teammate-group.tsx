import { ServiceTeammate } from './Teammate';
// Types
import { TeammatesGroupType } from '@Types';

export const TeammateGroup = ({ teammates, handler }: TeammatesGroupType<string>) => {
  const teammatesArticles = teammates
    .sort((a, b) => (a.recruit > b.recruit ? -1 : 1))
    .map(t => {
      return <ServiceTeammate key={t.id} data={t} />;
    });
  return (
    <div className="service-teammates" style={{ visibility: 'hidden' }}>
      <button
        className="circle-button circle-m teammates__close-button"
        title="close button"
        aria-labelledby="close button"
        onClick={handler}
      ></button>
      <div className="teammate-group">{teammatesArticles}</div>
    </div>
  );
};
