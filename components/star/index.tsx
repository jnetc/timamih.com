import styles from './star.module.css';
export const Star = ({
  color,
  size,
  customClass,
  duration,
}: {
  color: 'accent' | 'shade' | 'secondary';
  size: 16 | 24 | 32 | 36 | 48 | 56;
  customClass: string;
  duration: 10 | 14 | 18 | 22 | 13;
}) => {
  return (
    <svg
      width={size}
      height={size}
      style={{ height: `${size}px`, width: `${size}px` }}
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.module} ${customClass} duration-${duration}`}
    >
      <path
        className={`star-${color}`}
        d="M32,0l4.7,27c0,0.2,0.2,0.3,0.3,0.3L64,32l-27,4.7c-0.2,0-0.3,0.2-0.3,0.3L32,64l-4.7-27c0-0.2-0.2-0.3-0.3-0.3L0,32l27-4.7
	c0.2,0,0.3-0.2,0.3-0.3L32,0z"
      />
    </svg>
  );
};
