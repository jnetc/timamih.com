import { FC } from 'react';
import Image from 'next/image';
import type { ArticleWithIdType, ProffAndAvatar } from '@Types';

interface Props {
  data: ArticleWithIdType & Partial<ProffAndAvatar>;
  active: boolean;
}

export const Article: FC<Props> = ({ data, active }) => {
  let isExtendedArticle = false;
  // Check is in data 'proff' key to define data
  if ('proff' in data) isExtendedArticle = true;

  return (
    <article className={`slider-article ${active ? 'active' : ''}`}>
      {isExtendedArticle ? (
        <div className="teammate-avatar" itemProp="image">
          <Image src={data.avatar!.url} blurDataURL={data.avatar!.blurUpThumb} alt={data.title} fill={true} sizes="100vw" unoptimized />
        </div>
      ) : null}

      <h1 className="slider-article__title">{data.title}</h1>
      {isExtendedArticle ? <span>{data.proff}</span> : null}
      <p className="description-section">{data.description}</p>
    </article>
  );
};
