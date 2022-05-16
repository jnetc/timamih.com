import { useState, useRef } from 'react';
import { Step } from './Step';

export const Steps = () => {
  const [moveStep, setMoveStep] = useState({ num: 0, size: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const stepHandler = (direction: 'next' | 'prev') => {
    const eachStepSize = 100 / work_steps.length;
    let currentStep = 0;

    if (direction == 'next') {
      if (moveStep.num === work_steps.length - 1) return;
      currentStep = ++moveStep.num;
    }

    if (direction == 'prev') {
      if (moveStep.num === 0) return;
      currentStep = --moveStep.num;
    }

    const calcNextStep = eachStepSize * currentStep;
    setMoveStep({ size: calcNextStep, num: currentStep });
  };

  const steps = work_steps.map((step, idx) => {
    return <Step key={step.title} data={step} active={idx === moveStep.num} />;
  });
  return (
    <div className="steps">
      <div
        className="steps__articles"
        style={{ transform: `translate3d(-${moveStep.size}%, 0, 0)` }}
        ref={ref}
      >
        {steps}
      </div>
      <div className="steps__actions">
        <button
          className="rect-button click"
          onClick={() => stepHandler('prev')}
        >
          PREV
        </button>
        <button
          className="rect-button click"
          onClick={() => stepHandler('next')}
        >
          NEXT STEP
        </button>
      </div>
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
      'The pricing is formed on case-by-case basis. Normally price depends on the amount of work, its difficulty, your demands, suggestions and needs.',
  },
  {
    title: 'End process',
    description:
      'The pricing is formed on case-by-case basis. Normally price depends on the amount of work, its difficulty, your demands, suggestions and needs.',
  },
  {
    title: 'Feedback',
    description:
      'The pricing is formed on case-by-case basis. Normally price depends on the amount of work, its difficulty, your demands, suggestions and needs.',
  },
  // {
  //   title: 'Maintain',
  //   description:
  //     'The pricing is formed on case-by-case basis. Normally price depends on the amount of work, its difficulty, your demands, suggestions and needs.',
  // },
];
