// Component
import { Steps } from './steps/Steps';
import { Illustration } from './Illustration';

const HowWeWork = () => {
  return (
    <section id="howwework" className="how-we-work">
      <h1 className="section-title">How we work</h1>
      <Steps />
      <Illustration />
    </section>
  );
};

export default HowWeWork;
