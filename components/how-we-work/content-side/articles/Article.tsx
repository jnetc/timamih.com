import { ArticleType } from '@Types';
export const Article = ({ data, active }: { data: ArticleType; active: boolean }) => {
  return (
    <article className={`hww-article ${active ? 'active' : ''}`}>
      <h1 className="hww-article__title">{data.title}</h1>
      <p className="description-section">{data.description}</p>
    </article>
  );
};
