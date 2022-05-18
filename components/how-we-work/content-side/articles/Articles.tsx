import { useStore } from '@Hooks/useStore';
// Component
import { Article } from './Article';

export const Articles = ({ move }: { move: { num: number; size: number } }) => {
  const { data } = useStore();
  const articles = data?.howwework.steps.map((art, idx) => {
    return <Article key={art.id} data={art} active={idx === move.num} />;
  });
  return (
    <div
      className="hww-articles-wrap"
      style={{ transform: `translate3d(-${move.size}%, 0, 0)` }}
    >
      {articles}
    </div>
  );
};

// const work_steps = [
//   {
//     title: 'Agreement',
//     description:
//       'The pricing is formed on case-by-case basis. Normally price depends on the amount of work, its difficulty, your demands, suggestions and needs.',
//   },
//   {
//     title: 'Start process',
//     description:
//       'The pricing is formed on case-by-case basis. Normally price depends on the amount of work, its difficulty, your demands, suggestions and needs. The pricing is formed on case-by-case basis.',
//   },
//   {
//     title: 'End process',
//     description:
//       'The pricing is formed on case-by-case basis. Normally price depends on the amount of works.',
//   },
//   {
//     title: 'Feedback',
//     description:
//       'The pricing is formed on case-by-case basis. Normally price depends on the amount of work, its difficulty, your demands, suggestions and needs. The pricing is formed on case-by-case basis.',
//   },
//   {
//     title: 'Maintain',
//     description:
//       'The pricing is formed on case-by-case basis. Normally price depends on the amount of work, its difficulty, your demands, suggestions and needs.',
//   },
// ];
