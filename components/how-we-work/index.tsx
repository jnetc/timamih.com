import { useStore } from '@Hooks/useStore';
// Component
import { ContentSide } from './content-side/ContentSide';
import { Illustration } from './Illustration';

const HowWeWork = () => {
  const { data } = useStore();
  return (
    <section id="howwework" className="how-we-work">
      <h1 className="section-title">{data?.howwework.title}</h1>
      <ContentSide />
      <Illustration />
    </section>
  );
};

export default HowWeWork;
