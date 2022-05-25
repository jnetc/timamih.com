import Image from 'next/image';

export const AerialFilming = () => {
  return (
    <div className="illustration illustration-left">
      <Image
        src="/images/aerial_filming.svg"
        alt="illustration, Aerial filming"
        layout="fill"
        objectFit="contain"
        priority
      />
    </div>
  );
};
