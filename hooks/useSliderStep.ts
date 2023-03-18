import { useState } from 'react';

import type { DataType } from '@Types';

export const useSliderStep = (data: DataType, content: 'testimonial' | 'howwework', direction: 'next' | 'prev') => {
  const [moveStep, setMoveStep] = useState({ num: 0, size: 0 });

  // Check data for destruction
  const { steps } = data[content];

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
  stepHandler(direction);
  return moveStep;
};
