import { useStore } from '@Hooks/useStore';
import { NextIcon } from './NextIcon';
// Type
import { NextButtonProps } from '@Types';

export const NextButton = ({ currentStep, amountSteps, handler }: NextButtonProps) => {
  const { language } = useStore();
  return (
    <button
      className={`rect-button click ${currentStep === amountSteps ? 'complete' : ''}`}
      onClick={() => handler()}
      role="button"
      title={data[language]}
      aria-labelledby={data[language]}
    >
      <NextIcon direction="right" />
    </button>
  );
};

const data = {
  en: 'next step',
  ru: 'следующий шаг',
  fi: 'seuraava',
};
