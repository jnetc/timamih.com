import { useStore } from '@Hooks/useStore';
import { useObserverContent } from '@Hooks/useObserverContent';
// Component
import { Services } from './Services';

const WhatWeOffer = () => {
  const { data } = useStore();
  useObserverContent('show');

  return (
    <section id="what-we-offer" className="what-we-offer">
      <h1 className="section-title animated">{data?.whatweoffer.title}</h1>
      <Services />
    </section>
  );
};

export default WhatWeOffer;
