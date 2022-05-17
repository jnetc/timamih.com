// Component
import { ContentSide } from './content-side/ContentSide';
import { Illustration } from './Illustration';

const HowWeWork = () => {
  return (
    <section id="howwework" className="how-we-work">
      <h1 className="section-title">How we work</h1>
      <ContentSide />
      <Illustration />
    </section>
  );
};

export default HowWeWork;
