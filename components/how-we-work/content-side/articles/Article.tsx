import { ArticleType } from '@Types';
export const Article = ({ data, active }: { data: ArticleType; active: boolean }) => {
  return (
    <article className={`hww-article ${active ? 'active' : ''}`}>
      <h3 className="hww-article__title">{data.title}</h3>
      <p className="description-section">{data.description}</p>
    </article>
  );
};
