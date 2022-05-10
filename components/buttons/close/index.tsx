import styles from './close.module.css';

interface HandlerCloseButtonType {
  handler: (res: boolean) => void;
}

export const CloseButton = ({ handler }: HandlerCloseButtonType) => {
  const closeMe = () => handler(false);

  return (
    <button
      className={`${styles.module} circle-button circle-m`}
      title="close button"
      aria-labelledby="close button"
      onClick={closeMe}
    ></button>
  );
};
