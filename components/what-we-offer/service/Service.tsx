import { useStore } from '@Hooks/useStore';
import { Illustrations } from './illustrations/Illustrations';
// Type
import { ServiceType } from '@Types';

export const Service = ({ data }: { data: ServiceType<string> }) => {
  const { language } = useStore();
  const subPriceTxt = {
    en: 'from',
    ru: 'от',
    fi: 'alkaa',
  };
  return (
    <div className="service">
      <Illustrations name={data.illustration} />
      <article className="service-content">
        <h1 className="service-title">{data.title}</h1>
        <p className="description-section">{data.description}</p>
        <button className="rect-button click service-button">
          {data.buttonName}
        </button>
        <div className="service-price">
          <sub>{subPriceTxt[language]}</sub>
          <span>{data.price}</span>
        </div>
      </article>
    </div>
  );
};
