import type { ArticleWithIdType } from '@Types';

export const WorkSteps = ({ data, active }: { data: ArticleWithIdType; active: boolean }) => {
  return (
    <article className={`slider-article ${active ? 'active' : ''}`}>
      <h1 className="slider-article__title">{data.title}</h1>
      <p className="description-section">{data.description}</p>
    </article>
  );
};
