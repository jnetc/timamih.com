import Image from 'next/image';
import { useCallback } from 'react';
// Hook
import { useStore } from '@Hooks/useStore';
// Types
import { TeammateType } from '@Types';

export const ServiceTeammate = ({ data }: { data: TeammateType }) => {
  const { language } = useStore();

  const generateUrl = useCallback((url: string) => {
    const urlExp = new RegExp(`w{3}[.]+[a-z]+[.]+[a-z]{2,4}`, `gm`);
    const telNumberExp = new RegExp(`[+]+[0-9]+`, `gm`);
    const emailExp = new RegExp(`[a-zA-Z0-9.]+@+[a-z]+[.][a-z]{2,4}`, `gm`);

    switch (true) {
      case telNumberExp.exec(url) !== null:
        return `tel:${url}`;
      case emailExp.exec(url) !== null:
        return `mailto:${url}`;
      case urlExp.exec(url) !== null:
        return `https://${url}`;
      default:
        return url;
    }
  }, []);

  return (
    <article className="service-teammate">
      {data.recruit && <span className="teammate-recruit">{recruit[language]}</span>}
      {data.isactivatedurl ? (
        <a className="teammate-avatar" href={generateUrl(data.url)}>
          <Image
            src={data.avatar.url}
            blurDataURL={data.avatar.blurUpThumb}
            alt={data.title}
            layout="fill"
            objectFit="cover"
          />
        </a>
      ) : (
        <div className="teammate-avatar">
          <Image
            src={data.avatar.url}
            blurDataURL={data.avatar.blurUpThumb}
            alt={data.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}

      {/* <Image
          src={data.avatar.url}
          blurDataURL={data.avatar.blurUpThumb}
          alt={data.title}
          layout="fill"
          objectFit="cover"
        /> */}
      {/* <Link href="#">
          <a>
            <Image
              src={data.avatar.url}
              blurDataURL={data.avatar.blurUpThumb}
              alt={data.title}
              layout="fill"
              objectFit="cover"
            />
          </a>
        </Link> */}

      <h1 className="teammate-name">{data.title}</h1>
      <h2 className="teammate-proff">{data.proff}</h2>
      <p className="teammate-desc">{data.description}</p>
    </article>
  );
};

const recruit = {
  en: 'recruit',
  ru: 'рекрут',
  fi: 'rekryytti',
};
