// import { Advertising } from './Advertising';
// import { AerialFilming } from './AerialFilming';
// import { VideoProduction } from './VideoProduction';
// import { Photography } from './Photography';
// import { Graphics } from './3dGraphics';
import { Advertising } from '../SVG/Advertising';
import { AerialFilming } from '../SVG/AerialFilming';
import { VideoProduction } from '../SVG/VideoProduction';
import { Graphics3D } from '../SVG/3DGraphics';
import { Photography } from '../SVG/Photography';
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
