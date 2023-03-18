import { useStore } from '@Hooks/useStore';
// Component
import { WorkSteps } from './WorkSteps';
import { ClientResponse } from './ClientResponse';
// Types
import type { SliderNameType } from '@Types';

interface ArticlesPropsType {
  move: { num: number; size: number };
  name: SliderNameType;
}

export const Articles = ({ move, name }: ArticlesPropsType) => {
  const { data } = useStore();
  const articles = data?.[name].steps.map((art, idx) => {
    if ('proff' in art) {
      return <ClientResponse key={art.id} data={art} active={idx === move.num} />;
    }

    return <WorkSteps key={art.id} data={art} active={idx === move.num} />;
  });

  return (
    <div className="limited-area">
      <div className="slider-articles" style={{ transform: `translate3d(-${move.size}%, 0, 0)` }}>
        {articles}
      </div>
    </div>
  );
};
