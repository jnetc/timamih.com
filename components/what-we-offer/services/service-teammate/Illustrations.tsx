import Image from 'next/image';
import { useStore } from '@Hooks/useStore';
// Type
import { ServiceIllustrationType } from '@Types';

export const Illustrations = ({ name }: { name: ServiceIllustrationType }) => {
  const { darkTheme } = useStore();
  const switchTheme = darkTheme ? 'dark' : 'light';
  const images = {
    ads: (
      <Image
        src={`/images/ads ${switchTheme}.svg`}
        alt="Advertising illustration"
        width={0}
        height={0}
        className="illustration animated"
        itemProp="image"
      />
    ),
    photo: (
      <Image
        src={`/images/photo ${switchTheme}.svg`}
        alt="Photographer illustration"
        width={0}
        height={0}
        className="illustration animated"
        itemProp="image"
      />
    ),
    video: (
      <Image
        src={`/images/video ${switchTheme}.svg`}
        alt="Video Production illustration"
        width={0}
        height={0}
        className="illustration animated"
        itemProp="image"
      />
    ),
    graphic: (
      <Image
        src={`/images/3d ${switchTheme}.svg`}
        alt="3D Graphics illustration"
        width={0}
        height={0}
        className="illustration animated"
        itemProp="image"
      />
    ),
    drone: (
      <Image
        src={`/images/drone ${switchTheme}.svg`}
        alt="Aerial Filming illustration"
        width={0}
        height={0}
        className="illustration animated"
        itemProp="image"
      />
    ),
    it: (
      <Image
        src={`/images/it ${switchTheme}.svg`}
        alt="Development illustration"
        width={0}
        height={0}
        className="illustration animated"
        itemProp="image"
      />
    ),
    consult: (
      <Image
        src={`/images/consult ${switchTheme}.svg`}
        alt="Consultations illustration"
        width={0}
        height={0}
        className="illustration animated"
        itemProp="image"
      />
    ),
    sound: (
      <Image
        src={`/images/sound ${switchTheme}.svg`}
        alt="Audition illustration"
        width={0}
        height={0}
        className="illustration animated"
        itemProp="image"
      />
    ),
  };
  return images[name];
};
