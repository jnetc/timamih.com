import { useStore } from '@Hooks/useStore';
import { NextIcon } from './NextIcon';
// Type
import { PrevButtonProps } from '@Types';

export const PrevButton = ({ currentStep, handler }: PrevButtonProps) => {
  const { data } = useStore();
  return (
    <button
      className={`rect-button click ${currentStep === 0 ? 'move' : ''}`}
      onClick={() => handler()}
      role="button"
      title={data?.howwework.prevButton}
      aria-labelledby={data?.howwework.prevButton}
    >
      {/* {data?.howwework.prevButton} */}
      <NextIcon direction="right" />
    </button>
  );
};
