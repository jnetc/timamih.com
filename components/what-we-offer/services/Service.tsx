import { Illustrations } from './illustrations/Illustrations';
import { ServiceContent } from './ServiceContent';
// Type
import { ServiceType } from '@Types';

export const Service = ({ data }: { data: ServiceType<string> }) => {
  const { id, illustration, ...article } = data;

  return (
    <div className="service">
      <Illustrations name={data.illustration} />
      <ServiceContent data={article} />
    </div>
  );
};
