export const StepDots = ({ activeStep }: { activeStep: number }) => {
  const dots = work_steps.map((_, idx) => {
    return (
      <span
        key={idx}
        className={`step-dot ${idx === activeStep ? 'active' : ''}`}
      />
    );
  });
  return <div className="step-dots">{dots}</div>;
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
      'The pricing is formed on case-by-case basis. Normally price depends on the amount of work, its difficulty, your demands, suggestions and needs. The pricing is formed on case-by-case basis. Normally price depends on the amount of work, its difficulty, your demands, suggestions and needs.',
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
