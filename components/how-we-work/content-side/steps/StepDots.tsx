import { useStore } from '@Hooks/useStore';
export const StepDots = ({ activeStep }: { activeStep: number }) => {
  const { data } = useStore();

  const dots = data?.howwework.steps.map((_, idx) => {
    return <span key={idx} className={`step-dot ${idx === activeStep ? 'active' : ''}`} />;
  });
  return <div className="step-dots">{dots}</div>;
};
