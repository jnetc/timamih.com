import { HeroLeftSide } from './hero-left-side/HeroLeftSide';
import { HeroRightSide } from './hero-right-side/HeroRightSide';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <HeroLeftSide />
      <HeroRightSide />
    </section>
  );
};

export default HeroSection;
