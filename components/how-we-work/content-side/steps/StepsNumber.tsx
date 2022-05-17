export const StepNumbers = ({
  currentNumber,
  amountNumber,
}: {
  currentNumber: number;
  amountNumber: number;
}) => {
  return (
    <div className="step-numbers">
      {currentNumber + 1} / {amountNumber + 1}
    </div>
  );
};
