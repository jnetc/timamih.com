import styles from './star.module.css';
export const Star = ({
  color,
  size,
  customClass,
  duration,
  delay,
}: {
  color: 'accent' | 'shade' | 'secondary';
  size: 24 | 32 | 36 | 48 | 56;
  customClass: string;
  duration: 5 | 7 | 9 | 11 | 13;
  delay?: 1 | 2 | 3 | 4 | 5;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.module} ${customClass} duration-${duration} delay-${delay}`}
    >
      <path className={`star-${color}`}>
        <animate
          attributeName="d"
          attributeType="CSS"
          dur={`${duration}s`}
          repeatCount="indefinite"
          values="M32,0L32,0c2.8,16.4,15.6,29.2,32,32l0,0l0,0c-16.4,2.8-29.2,15.6-32,32l0,0l0,0C29.2,47.6,16.4,34.8,0,32l0,0l0,0C16.4,29.2,29.2,16.4,32,0L32,0z;
          M32,0l4.7,27c0,0.2,0.2,0.3,0.3,0.3L64,32l-27,4.7c-0.2,0-0.3,0.2-0.3,0.3L32,64l-4.7-27c0-0.2-0.2-0.3-0.3-0.3L0,32l27-4.7c0.2,0,0.3-0.2,0.3-0.3L32,0z;
         M32,0L32,0c2.8,16.4,15.6,29.2,32,32l0,0l0,0c-16.4,2.8-29.2,15.6-32,32l0,0l0,0C29.2,47.6,16.4,34.8,0,32l0,0l0,0C16.4,29.2,29.2,16.4,32,0L32,0z;"
        ></animate>
      </path>
    </svg>
  );
};
