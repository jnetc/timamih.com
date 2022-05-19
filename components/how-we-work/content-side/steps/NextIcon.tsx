export const NextIcon = ({
  done,
  direction,
}: {
  done?: boolean;
  direction: 'left' | 'right';
}) => {
  return (
    <svg
      viewBox="0 0 28 28"
      className={`arrow-svg ${direction === 'left' ? 'left' : 'right'}`}
    >
      <polyline
        className={`arrow-icon ${done ? 'done' : ''}`}
        points="1.9,13.5 9.6,22.4 24.5,3 16.2,4.6 26.1,13.5 1.9,13.5 26.1,13.5 16.2,22.4"
      />
    </svg>
  );
};
