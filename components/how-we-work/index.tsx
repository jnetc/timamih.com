import Image from "next/image";
import { useStore } from '@Hooks/useStore';
// Component
import { ContentSide } from './content-side/ContentSide';
// import { Illustration } from './HowWeWorkSVG';

const HowWeWork = () => {
  const { data, darkTheme } = useStore();
  const switchTheme = darkTheme ? 'dark' : 'light'
  return (
    <section id="how-we-work" className="how-we-work">
      <h1 className="section-title">{data?.howwework.title}</h1>
      <ContentSide />
      <Image src={`/images/steps ${switchTheme}.svg`} alt='How we work illustration' width={0} height={0} className="illustration" />
    </section>
  );
};

export default HowWeWork;
