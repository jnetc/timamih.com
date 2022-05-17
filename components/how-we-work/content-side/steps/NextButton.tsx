import { NextButtonProps } from '@Types';

export const NextButton = ({
  currentStep,
  amountSteps,
  handler,
}: NextButtonProps) => {
  return (
    <button
      className={`rect-button click ${
        currentStep === amountSteps && 'disable'
      }`}
      onClick={() => handler()}
      title="next step"
      aria-labelledby="next step"
    >
      NEXT
    </button>
  );
};
