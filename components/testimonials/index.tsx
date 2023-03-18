import { useState } from 'react';
// Hook
import { useStore } from '@Hooks/useStore';
import { useObserverContent } from '@Hooks/useObserverContent';
// Component
import { Articles } from '@Slider/articles/Articles';
import { StepDots } from '@Slider/steps/StepDots';
import { NextButton } from '@Slider/steps/NextButton';
import { PrevButton } from '@Slider/steps/PrevButton';
import { StepNumbers } from '@Slider/steps/StepsNumber';
// Component
// import { ContentSide } from './content-side/ContentSide';

const Testimonial = () => {
  const { data } = useStore();
  const [moveStep, setMoveStep] = useState({ num: 0, size: 0 });
  useObserverContent('show');

  // Check data for destruction
  if (!data) return null;
  const { steps } = data.testimonial;

  const stepsSum = steps.length - 1 || 0;
  const eachStepSize = 100;

  console.log(steps);

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
    <section id="testimonials" className="testimonials">
      <h1 className="section-title animated">{data?.testimonial.title}</h1>
      <div className="section-content content-center animated">
        <StepNumbers currentNumber={moveStep.num} amountNumber={stepsSum} />
        <Articles move={moveStep} name="testimonial" />
        <div className="section-content__actions-column">
          <StepDots activeStep={moveStep.num} name="testimonial" />
          <PrevButton currentStep={moveStep.num} handler={() => stepHandler('prev')} />
          <NextButton amountSteps={stepsSum} currentStep={moveStep.num} handler={() => stepHandler('next')} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
