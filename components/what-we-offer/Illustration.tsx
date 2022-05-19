import Image from 'next/image';

export const Illustration = () => {
  return (
    <div className="illustration illustration-left">
      <Image
        src="/images/advertising.svg"
        alt="illustration, advertising"
        layout="fill"
        objectFit="contain"
        priority
      />
    </div>
  );
};
