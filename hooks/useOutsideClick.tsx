import { useEffect, SetStateAction, MutableRefObject } from 'react';

export const useOutsideClick = (
  ref: MutableRefObject<null>,
  handler: (value: SetStateAction<boolean>) => void
) => {
  useEffect(() => {
    const listener = () => {
      if (!ref.current) return;
      handler(false);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
