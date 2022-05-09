import styles from './diamond.module.css';
export const Diamond = ({
  color,
  size,
  customClass,
}: {
  color: 'accent' | 'accent-shade' | 'secondary';
  size: number;
  customClass: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.module} ${customClass}`}
    >
      <path className={`diamond-${color}`}>
        <animate
          attributeName="d"
          attributeType="CSS"
          dur="10s"
          repeatCount="indefinite"
          values="M32,0l4.7,27c0,0.2,0.2,0.3,0.3,0.3L64,32l-27,4.7c-0.2,0-0.3,0.2-0.3,0.3L32,64l-4.7-27c0-0.2-0.2-0.3-0.3-0.3L0,32l27-4.7c0.2,0,0.3-0.2,0.3-0.3L32,0z;

         M32,0L32,0c2.8,16.4,15.6,29.2,32,32l0,0l0,0c-16.4,2.8-29.2,15.6-32,32l0,0l0,0C29.2,47.6,16.4,34.8,0,32l0,0l0,0C16.4,29.2,29.2,16.4,32,0L32,0z;

         M32,0l4.7,27c0,0.2,0.2,0.3,0.3,0.3L64,32l-27,4.7c-0.2,0-0.3,0.2-0.3,0.3L32,64l-4.7-27c0-0.2-0.2-0.3-0.3-0.3L0,32l27-4.7c0.2,0,0.3-0.2,0.3-0.3L32,0z;
  "
        ></animate>
      </path>
    </svg>
  );
};
