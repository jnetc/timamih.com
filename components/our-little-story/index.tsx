import { useStore } from '@Hooks/useStore';
import { useObserverContent } from '@Hooks/useObserverContent';

const OurLittleStory = () => {
  const { data } = useStore();

  useObserverContent('show');

  const story = data?.ourlittlestory.description.split('\n\n').map((sentence, idx) => {
    return (
      <p key={idx} className="description-section story-description">
        {sentence}
      </p>
    );
  });

  return (
    <section id="who-we-are" className="our-little-story">
      <h2 className="section-title animated">{data?.ourlittlestory.title}</h2>
      <div className="story animated">{story}</div>
    </section>
  );
};

export default OurLittleStory;
