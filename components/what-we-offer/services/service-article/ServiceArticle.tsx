// Hook
import { useStore } from '@Hooks/useStore';
// Type
import { ServiceArticleType } from '@Types';

export const ServiceArticle = ({ data, handler }: ServiceArticleType) => {
  const { language } = useStore();
  const subPriceTxt = { en: 'from', ru: 'от', fi: 'alkaen' };

  return (
    <article className="service-article">
      <meta itemProp="serviceType" content={data.title} />
      <h1 className="service-title" itemProp="name">
        {data.title}
      </h1>
      <p className="description-section" itemProp="description">
        {data.description}
      </p>
      <button className="rect-button click service-button" onClick={handler}>
        {data.buttonName}
      </button>
      <div className="service-price" itemProp="minimumPaymentDue" itemScope itemType="https://schema.org/PriceSpecification">
        <sub>{subPriceTxt[language]}</sub>
        <span itemProp="price">{data.price}</span>
      </div>
    </article>
  );
};
