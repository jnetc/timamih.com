import { useState } from 'react';
// Hook
import { useStore } from '@Hooks/useStore';
// Component
import { Articles } from './articles/Articles';
import { StepDots } from './steps/StepDots';
import { NextButton } from './steps/NextButton';
import { PrevButton } from './steps/PrevButton';
import { StepNumbers } from './steps/StepsNumber';

export const ContentSide = () => {
  const { data } = useStore();
  const [moveStep, setMoveStep] = useState({ num: 0, size: 0 });

  // Check data for destruction
  if (!data) return null;
  const { steps } = data.howwework;

  const stepsAmount = steps.length - 1 || 0;

  const stepHandler = (direction: 'next' | 'prev') => {
    const eachStepSize = 100 / steps.length;
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
    <div className="section-content content-left">
      <Articles move={moveStep} />
      <div className="section-content__actions">
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

// const work_steps = [
//   {
//     title: 'Agreement',
//     description:
//       'The pricing is formed on case-by-case basis. Normally price depends on the amount of work, its difficulty, your demands, suggestions and needs.',
//   },
//   {
//     title: 'Start process',
//     description:
//       'The pricing is formed on case-by-case basis. Normally price depends on the amount of work, its difficulty, your demands, suggestions and needs. The pricing is formed on case-by-case basis. Normally price depends on the amount of work, its difficulty, your demands, suggestions and needs.',
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
