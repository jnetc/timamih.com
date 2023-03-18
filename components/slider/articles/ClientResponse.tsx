import Image from 'next/image';
import type { ArticleWithIdType, ProffAndAvatar } from '@Types';

export const ClientResponse = ({ data, active }: { data: ArticleWithIdType & ProffAndAvatar; active: boolean }) => {
  return (
    <article className={`slider-article slider-center ${active ? 'active' : ''}`}>
      <div className="slider-article__user">
        <div className="teammate-avatar" itemProp="image">
          <Image src={data.avatar.url} blurDataURL={data.avatar.blurUpThumb} alt={data.title} fill={true} sizes="100vw" unoptimized />
        </div>
        <h1 className="slider-article__title">{data.title}</h1>
        <span className="slider-article__proff">{data.proff}</span>
      </div>
      <p className="description-section center">{data.description}</p>
    </article>
  );
};
