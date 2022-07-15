import { useStore } from '@Hooks/useStore';
// Component
import { Article } from './Article';

export const Articles = ({ move }: { move: { num: number; size: number } }) => {
  const { data } = useStore();
  const articles = data?.howwework.steps.map((art, idx) => {
    return <Article key={art.id} data={art} active={idx === move.num} />;
  });
  return (
    <div className="limited-area">
      <div className="hww-articles" style={{ transform: `translate3d(-${move.size}%, 0, 0)` }}>
        {articles}
      </div>
    </div>
  );
};
