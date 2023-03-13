import Image from 'next/image';
// Hook
import { useStore } from '@Hooks/useStore';
import { useObserverContent } from '@Hooks/useObserverContent';
// Component
import { ContentSide } from './content-side/ContentSide';

const HowWeWork = () => {
  const { data, darkTheme } = useStore();
  const switchTheme = darkTheme ? 'dark' : 'light';

  useObserverContent('show');

  return (
    <section id="how-we-work" className="how-we-work">
      <h1 className="section-title animated">{data?.howwework.title}</h1>
      <ContentSide />
      <Image
        src={`/images/steps ${switchTheme}.svg`}
        alt="How we work illustration"
        width={0}
        height={0}
        className="illustration animated"
      />
    </section>
  );
};

export default HowWeWork;
