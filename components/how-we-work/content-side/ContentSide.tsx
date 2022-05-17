import { useState } from 'react';
// Component
import { Articles } from './articles/Articles';
import { StepDots } from './steps/StepDots';
import { NextButton } from './steps/NextButton';
import { PrevButton } from './steps/PrevButton';
import { StepNumbers } from './steps/StepsNumber';

export const ContentSide = () => {
  const [moveStep, setMoveStep] = useState({ num: 0, size: 0 });
  const stepsAmount = work_steps.length - 1;

  const stepHandler = (direction: 'next' | 'prev') => {
    const eachStepSize = 100 / work_steps.length;
    let currentStep = 0;

    if (direction == 'next') {
      if (moveStep.num === stepsAmount) return;
      currentStep = ++moveStep.num;
    }

    if (direction == 'prev') {
      if (moveStep.num === 0) return;
      currentStep = --moveStep.num;
    }

    const calcNextStep = eachStepSize * currentStep;
    setMoveStep({ size: calcNextStep, num: currentStep });
  };

  return (
    <div className="content">
      <Articles move={moveStep} />
      <div className="steps__actions">
        <PrevButton
          currentStep={moveStep.num}
          handler={() => stepHandler('prev')}
        />
        <StepDots activeStep={moveStep.num} />
        <StepNumbers currentNumber={moveStep.num} amountNumber={stepsAmount} />
        <NextButton
          amountSteps={stepsAmount}
          currentStep={moveStep.num}
          handler={() => stepHandler('next')}
        />
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
