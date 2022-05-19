import { useStore } from '@Hooks/useStore';
import { NextIcon } from './NextIcon';
// Type
import { NextButtonProps } from '@Types';
export const NextButton = ({
  currentStep,
  amountSteps,
  lastStep,
  handler,
}: NextButtonProps) => {
  const { data } = useStore();
  return (
    <button
      className={`rect-button click ${
        currentStep === amountSteps ? 'complete' : ''
      }`}
      onClick={() => handler()}
      role="button"
      title={data?.howwework.nextButton}
      aria-labelledby={data?.howwework.nextButton}
    >
      {/* {lastStep ? 'valmis' : data?.howwework.nextButton} */}
      <NextIcon done={lastStep} direction="left" />
    </button>
  );
};
