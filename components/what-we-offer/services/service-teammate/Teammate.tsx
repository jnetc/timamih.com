import Image from 'next/image';
// Types
import { TeammateType } from '@Types';

export const ServiceTeammate = ({ data }: { data: TeammateType<string> }) => {
  return (
    <article className="service-teammate">
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
      {/* <div className="service-data"></div> */}
    </article>
  );
};
