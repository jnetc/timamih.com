import { useStore } from '@Hooks/useStore';

const OurLittleStory = () => {
  const { data } = useStore();
  const story = data?.ourlittlestory.description
    .split('\n\n')
    .map((sentence, idx) => {
      return (
        <p key={idx} className="description-section story-description">
          {sentence}
        </p>
      );
    });

  return (
    <section id="our-little-story" className="our-little-story">
      <h1 className="section-title">{data?.ourlittlestory.title}</h1>
      <div className="story">{story}</div>
    </section>
  );
};

export default OurLittleStory;
