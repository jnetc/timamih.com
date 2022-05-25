import Image from 'next/image';

export const Photography = () => {
  return (
    <div className="illustration illustration-left">
      <Image
        src="/images/photography.svg"
        alt="illustration, photography"
        layout="fill"
        objectFit="contain"
        priority
      />
    </div>
  );
};
