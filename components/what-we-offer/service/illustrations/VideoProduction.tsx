import Image from 'next/image';

export const VideoProduction = () => {
  return (
    <div className="illustration illustration-left">
      <Image
        src="/images/video_production.svg"
        alt="illustration, Video production"
        layout="fill"
        objectFit="contain"
        priority
      />
    </div>
  );
};
