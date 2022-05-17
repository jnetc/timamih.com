import { PrevButtonProps } from '@Types';

export const PrevButton = ({ currentStep, handler }: PrevButtonProps) => {
  return (
    <button
      className={`rect-button click ${currentStep === 0 && 'move'}`}
      onClick={() => handler()}
      title="previous step"
      aria-labelledby="previous step"
    >
      PREV
    </button>
  );
};
