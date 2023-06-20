import Image from 'next/image';
import { useCallback } from 'react';
// Hook
import { useStore } from '@Hooks/useStore';
// Types
import { TeammateType } from '@Types';

export const ServiceTeammate = ({ data }: { data: TeammateType }) => {
  const { language } = useStore();

  const generateUrl = useCallback((url: string) => {
    const httpUrlExp = new RegExp(`https:\/\/+[a-z]+[.]+[a-z]{2,5}`, `gm`);
    const wwwUrlExp = new RegExp(`^www[.]+[a-z]+[.]+[a-z]{2,5}`, `gm`);
    const telNumberExp = new RegExp(`[+]+[0-9]+`, `gm`);
    const emailExp = new RegExp(`[a-zA-Z0-9.]+@+[a-z]+[.][a-z]{2,4}`, `gm`);

    switch (url !== '') {
      case telNumberExp.exec(url) !== null:
        return `tel:${url}`;
      case emailExp.exec(url) !== null:
        return `mailto:${url}`;
      case wwwUrlExp.exec(url) !== null:
        return `https://${url}`;
      case httpUrlExp.exec(url) !== null:
        return url;
      default:
        break;
    }
  }, []);

  return (
    <article className="service-teammate" itemScope itemType="https://schema.org/Person">
      {data.recruit && <span className="teammate-recruit">{recruit[language]}</span>}
      {data.isactivatedurl ? (
        <a className="teammate-avatar" href={generateUrl(data.url)} itemProp="image">
          <Image
            src={data.avatar.url}
            blurDataURL={data.avatar.blurUpThumb}
            alt={data.title}
            fill={true}
            sizes="100vw"
            unoptimized
          />
        </a>
      ) : (
        <div className="teammate-avatar" itemProp="image">
          <Image
            src={data.avatar.url}
            blurDataURL={data.avatar.blurUpThumb}
            alt={data.title}
            fill={true}
            sizes="100vw"
            unoptimized
          />
        </div>
      )}
      <h3 className="teammate-name" itemProp="name">
        {data.title}
      </h3>
      <h4 className="teammate-proff" itemProp="jobTitle">
        {data.proff}
      </h4>
      <p className="teammate-desc" itemProp="description">
        {data.description}
      </p>
    </article>
  );
};

const recruit = {
  en: 'active',
  ru: 'активный',
  fi: 'aktiivinen',
};
