import { useStore } from '@Hooks/useStore';
import { NextIcon } from './NextIcon';
// Type
import { PrevButtonProps } from '@Types';

export const PrevButton = ({ currentStep, handler }: PrevButtonProps) => {
  const { language } = useStore();
  return (
    <button
      className={`rect-button click ${currentStep === 0 ? 'move' : ''}`}
      onClick={() => handler()}
      role="button"
      title={data[language]}
      aria-labelledby={data[language]}
    >
      <NextIcon direction="left" />
    </button>
  );
};

const data = {
  en: 'previous step',
  ru: 'предыдущий шаг',
  fi: 'edellinen',
};
