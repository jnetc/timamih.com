// Hook
import { useStore } from '@Hooks/useStore';
// Type
import { ServiceArticleType } from '@Types';

export const ServiceArticle = ({ data, handler }: ServiceArticleType) => {
  const { language } = useStore();
  const subPriceTxt = { en: 'from', ru: 'от', fi: 'alkaa' };

  return (
    <article className="service-article">
      <h1 className="service-title">{data.title}</h1>
      <p className="description-section">{data.description}</p>
      <button className="rect-button click service-button" onClick={handler}>
        {data.buttonName}
      </button>
      <div className="service-price">
        <sub>{subPriceTxt[language]}</sub>
        <span>{data.price}</span>
      </div>
    </article>
  );
};
