import { Illustrations } from './service-teammate/Illustrations';
import { ServiceContent } from './ServiceContent';
// Type
import { ServiceType } from '@Types';

export const Service = ({ data }: { data: ServiceType }) => {
  const { id, active, illustration, ...article } = data;

  return (
    <>
      {active ?
      <div className="service">
        <Illustrations name={data.illustration} />
        <ServiceContent data={article} />
      </div> :
        null
      }
    </>
  );
};
