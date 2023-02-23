export const NextIcon = ({ direction }: { direction: 'left' | 'right' }) => {
  return (
    <svg viewBox="0 0 28 28" className={`arrow-svg ${direction === 'left' ? 'left' : 'right'}`}>
      {direction === 'right' && (
        <>
          <line className={`arrow-icon line1-right`} x1="25.8" y1="13.5" x2="1.9" y2="13.5" />
          <line className={`arrow-icon line2-right`} x1="26.2" y1="13.5" x2="16.2" y2="22.4" />
          <line className={`arrow-icon line3-right`} x1="26.2" y1="13.5" x2="16.2" y2="4.6" />
          <polyline className={`arrow-icon polyline-right`} points="1.9,13.5 9.6,22.4 24.5,3 	" />
        </>
      )}
      {direction === 'left' && <path className="arrow-icon" d="M26.1,13.5l-24.3,0 M16.2,22.4l9.9-8.9l-9.9-8.9" />}
    </svg>
  );
};
