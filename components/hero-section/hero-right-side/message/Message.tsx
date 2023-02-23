import { CheckedIcon } from './CheckedIcon';

export const Message = ({ message, firstMessage }: { message: string; firstMessage: boolean }) => {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes() > 9 ? time.getMinutes() : `0${time.getMinutes()}`;

  return (
    <div className="hero-left__message">
      <p>{message}</p>
      {firstMessage && <span className="hero-left__message-smile" />}
      <time>
        {hours}:{minutes}
      </time>
      <CheckedIcon />
    </div>
  );
};
