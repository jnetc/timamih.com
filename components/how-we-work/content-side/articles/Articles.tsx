import { Article } from './Article';

export const Articles = ({ move }: { move: { num: number; size: number } }) => {
  const articles = work_steps.map((a, idx) => {
    return <Article key={a.title} data={a} active={idx === move.num} />;
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

const work_steps = [
  {
    title: 'Agreement',
    description:
      'The pricing is formed on case-by-case basis. Normally price depends on the amount of work, its difficulty, your demands, suggestions and needs.',
  },
  {
    title: 'Start process',
    description:
      'The pricing is formed on case-by-case basis. Normally price depends on the amount of work, its difficulty, your demands, suggestions and needs. The pricing is formed on case-by-case basis.',
  },
  {
    title: 'End process',
    description:
      'The pricing is formed on case-by-case basis. Normally price depends on the amount of works.',
  },
  {
    title: 'Feedback',
    description:
      'The pricing is formed on case-by-case basis. Normally price depends on the amount of work, its difficulty, your demands, suggestions and needs. The pricing is formed on case-by-case basis.',
  },
  {
    title: 'Maintain',
    description:
      'The pricing is formed on case-by-case basis. Normally price depends on the amount of work, its difficulty, your demands, suggestions and needs.',
  },
];
