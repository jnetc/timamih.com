import { Illustrations } from './illustrations/Illustrations';
// Type
import { ServiceType } from '@Types';
export const Service = ({ data }: { data: ServiceType<string> }) => {
  console.log(data.illustration);

  return (
    <div className="service">
      <Illustrations name={data.illustration} />
      <article className="service-content">
        <h1 className="service-title">{data.title}</h1>
        <p className="service-description">{data.description}</p>
        <button>{data.buttonName}</button>
        <span className="service-price">
          <sub>from</sub>
          {data.price}
          <sup>€</sup>
        </span>
      </article>
    </div>
  );
};
