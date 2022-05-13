import styles from './message.module.css';
// Component
import { AceptedIcon } from './AceptedIcon';

export const Message = ({
  message,
  firstMessage,
}: {
  message: string;
  firstMessage: boolean;
}) => {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();

  return (
    <div className={styles.module}>
      <p>{message}</p>
      {firstMessage && <span className={styles.smile} />}
      <time>
        {hours}:{minutes}
      </time>
      <AceptedIcon />
    </div>
  );
};
