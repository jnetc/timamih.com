import { useStore } from '@Hooks/useStore';
// Types
import type { SliderNameType } from '@Types';

interface StepDotsPropsType {
  activeStep: number;
  name: SliderNameType;
}

export const StepDots = ({ activeStep, name }: StepDotsPropsType) => {
  const { data } = useStore();

  const getDots = data?.[name].steps.map((_, idx) => {
    return <span key={idx} className={`step-dot ${idx === activeStep ? 'active' : ''}`} />;
  });

  return <div className="step-dots">{getDots}</div>;
};
