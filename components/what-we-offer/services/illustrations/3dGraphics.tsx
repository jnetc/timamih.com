import Image from 'next/image';

export const Graphics = () => {
  return (
    <div className="illustration illustration-left">
      <Image
        src="/images/3d_graphics.svg"
        alt="illustration, 3D graphics"
        layout="fill"
        objectFit="contain"
        priority
      />
    </div>
  );
};
