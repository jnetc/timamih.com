import { ServiceTeammate } from './Teammate';
// Types
import { TeammatesGroupType } from '@Types';

export const TeammateGroup = ({ teammates, handler }: TeammatesGroupType<string>) => {
  console.log(teammates);

  const teammatesArticles = teammatesArr.map(t => {
    return <ServiceTeammate key={t.title} data={t} />;
  });
  return (
    <div className="service-teammates">
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

const teammatesArr = [
  { title: 'Mate 1 ' },
  { title: 'Mate 2 ' },
  { title: 'Mate 3 ' },
  { title: 'Mate 4 ' },
];
