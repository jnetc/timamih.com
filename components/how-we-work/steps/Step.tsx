import { ArticleType } from '@Types';
export const Step = ({
  data,
  active,
}: {
  data: ArticleType<string>;
  active: boolean;
}) => {
  return (
    <article className={`step ${active ? 'active' : ''}`}>
      <h1 className="step__title">{data.title}</h1>
      <p className="description-section">{data.description}</p>
    </article>
  );
};
