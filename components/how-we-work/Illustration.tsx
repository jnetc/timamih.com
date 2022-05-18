import Image from 'next/image';

export const Illustration = () => {
  return (
    <div className="illustration illustration-right">
      <Image
        src="/images/how_we_work.svg"
        alt="illustration, how we work"
        layout="fill"
        objectFit="contain"
        priority
      />
    </div>
  );
};
