import { ServiceTeammate } from './Teammate';
// Types
import { TeammatesGroupType } from '@Types';

export const TeammateGroup = ({ teammates, handler }: TeammatesGroupType) => {
  const teammatesArticles = teammates
    .sort((a, b) => (a.recruit > b.recruit ? -1 : 1))
    .map(t => {
      return <ServiceTeammate key={t.id} data={t} />;
    });
  return (
    <div className="service-teammates" style={{ visibility: 'hidden' }}>
      <button
        className="circle-button circle-m teammates__close-button click"
        title="close button"
        aria-labelledby="close teammates"
        onClick={handler}
      ></button>
      <div className="teammate-group">{teammatesArticles}</div>
    </div>
  );
};
