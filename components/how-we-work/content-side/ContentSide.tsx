import { useState } from 'react';
// Hook
import { useStore } from '@Hooks/useStore';
// Component
import { Articles } from '@Slider/articles/Articles';
import { StepDots } from '@Slider/steps/StepDots';
import { NextButton } from '@Slider/steps/NextButton';
import { PrevButton } from '@Slider/steps/PrevButton';
import { StepNumbers } from '@Slider/steps/StepsNumber';

export const ContentSide = () => {
  const { data } = useStore();
  const [moveStep, setMoveStep] = useState({ num: 0, size: 0 });

  // Check data for destruction
  if (!data) return null;
  const { steps } = data.howwework;

  const stepsSum = steps.length - 1 || 0;
  const eachStepSize = 100;

  const stepHandler = (direction: 'next' | 'prev') => {
    let currentStep = 0;

    if (direction == 'next') {
      if (moveStep.num === stepsSum) return;
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
    <div className="section-content content-left animated">
      <StepNumbers currentNumber={moveStep.num} amountNumber={stepsSum} />
      <Articles move={moveStep} name="howwework" />
      <div className="section-content__actions-row">
        <StepDots activeStep={moveStep.num} name="howwework" />
        <PrevButton currentStep={moveStep.num} handler={() => stepHandler('prev')} />
        <NextButton amountSteps={stepsSum} currentStep={moveStep.num} handler={() => stepHandler('next')} />
      </div>
    </div>
  );
};
