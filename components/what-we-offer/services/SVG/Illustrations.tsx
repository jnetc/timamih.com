import { Advertising } from './Advertising';
import { AerialFilming } from './AerialFilming';
import { VideoProduction } from './VideoProduction';
import { Graphics3D } from './Graphics3D';
import { Photography } from './Photography';
// Type
import { ServiceIllustrationType } from '@Types';

export const Illustrations = ({ name }: { name: ServiceIllustrationType }) => {
  const images = {
    ads: <Advertising />,
    photo: <Photography />,
    video: <VideoProduction />,
    graphic: <Graphics3D />,
    drone: <AerialFilming />,
  };
  return images[name];
};
