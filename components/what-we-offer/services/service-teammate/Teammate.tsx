import Image from 'next/image';
// Hook
import { useStore } from '@Hooks/useStore';
// Types
import { TeammateType } from '@Types';

export const ServiceTeammate = ({ data }: { data: TeammateType }) => {
  const { language } = useStore();
  return (
    <article className="service-teammate">
      {data.recruit && <span className="teammate-recruit">{recruit[language]}</span>}

      <div className="teammate-avatar">
        <Image
          src={data.avatar.url}
          blurDataURL={data.avatar.blurUpThumb}
          alt={data.title}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
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
