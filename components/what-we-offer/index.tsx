import { useStore } from '@Hooks/useStore';
// Component
import { Services } from './Services';

const WhatWeOffer = () => {
  const { data } = useStore();
  return (
    <section id="what-we-offer" className="what-we-offer">
      <h1 className="section-title">{data?.whatweoffer.title}</h1>
      <Services />
    </section>
  );
};

export default WhatWeOffer;
