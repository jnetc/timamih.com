import { useEffect, RefObject } from 'react';
export const useTransitionAnimation = (
  ref: RefObject<HTMLElement>,
  state: boolean,
  duration: number
) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Entering transition
    if (state) {
      el.classList.add('mountOnEnter');

      const entering = setTimeout(() => {
        el.classList.add('enterActive');
        clearTimeout(entering);
      }, 10);

      return;
    }

    // Exiting transition
    if (!state) {
      el.classList.add('exitActive');
      el.classList.remove('enterActive');

      const exited = setTimeout(() => {
        el.classList.remove('exitActive');
        el.classList.remove('mountOnEnter');
        clearTimeout(exited);
      }, duration);
    }
  }, [state, ref, duration]);
};
