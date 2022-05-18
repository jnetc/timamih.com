import { useStore } from '@Hooks/useStore';
// Type
import { NextButtonProps } from '@Types';
export const NextButton = ({
  currentStep,
  amountSteps,
  handler,
}: NextButtonProps) => {
  const { data } = useStore();
  return (
    <button
      className={`rect-button click ${
        currentStep === amountSteps && 'disable'
      }`}
      onClick={() => handler()}
      role="button"
      title={data?.howwework.nextButton}
      aria-labelledby={data?.howwework.nextButton}
    >
      {data?.howwework.nextButton}
    </button>
  );
};
