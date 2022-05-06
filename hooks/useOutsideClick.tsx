import { useEffect, SetStateAction, RefObject } from 'react';

export const useOutsideClick = (
  ref: RefObject<HTMLElement | null>,
  handler: (value: SetStateAction<boolean>) => void
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const element = event.target as HTMLElement;

      if (ref.current?.contains(element)) return;
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
