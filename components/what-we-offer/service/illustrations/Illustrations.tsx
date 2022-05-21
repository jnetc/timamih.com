import { Advertising } from './Advertising';
import { AerialFilming } from './AerialFilming';
import { VideoProduction } from './VideoProduction';
import { Photography } from './Photography';
import { Graphics } from './3dGraphics';
// Type
import { ServiceIllustrationType } from '@Types';

export const Illustrations = ({ name }: { name: ServiceIllustrationType }) => {
  const images = {
    ads: <Advertising />,
    photo: <Photography />,
    video: <VideoProduction />,
    graphic: <Graphics />,
    drone: <AerialFilming />,
  };
  return images[name];
};
