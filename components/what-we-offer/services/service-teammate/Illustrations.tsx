import Image from "next/image";
import { useStore } from '@Hooks/useStore';
// Type
import { ServiceIllustrationType } from '@Types';

export const Illustrations = ({ name }: { name: ServiceIllustrationType }) => {
  const {darkTheme} = useStore()
  const switchTheme = darkTheme ? 'dark' : 'light'
  const images = {
    ads: <Image src={`/images/ads ${switchTheme}.svg`} alt='Advertising illustration' width={0} height={0} className="illustration" />,
    photo: <Image src={`/images/photo ${switchTheme}.svg`} alt='Photographer illustration' width={0} height={0} className="illustration"/>,
    video: <Image src={`/images/video ${switchTheme}.svg`} alt='Video Production illustration' width={0} height={0} className="illustration"/>,
    graphic: <Image src={`/images/3d ${switchTheme}.svg`} alt='3D Graphics illustration' width={0} height={0} className="illustration"/>,
    drone: <Image src={`/images/drone ${switchTheme}.svg`} alt='Aerial Filming illustration' width={0} height={0} className="illustration"/>,
    it: <Image src={`/images/it ${switchTheme}.svg`} alt='Development illustration' width={0} height={0} className="illustration"/>,
    consult: <Image src={`/images/consult ${switchTheme}.svg`} alt='Consultations illustration' width={0} height={0} className="illustration"/>,
    sound: <Image src={`/images/sound ${switchTheme}.svg`} alt='Audition illustration' width={0} height={0} className="illustration"/>,
  };
  return images[name];
};
