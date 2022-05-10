import { createPortal } from 'react-dom';
// Hook
import { usePlayModalStore } from '@Hooks/usePlayModalStore';
import { useHideScrollbar } from '@Hooks/useHideScrollbar';
// Styles
import styles from './play-video.module.css';

export const PlayVideoModal = () => {
  const { modal, openModal } = usePlayModalStore();

  const close = () => {
    openModal({ open: false });
  };
  useHideScrollbar(modal.open);
  return modal.open
    ? createPortal(
        <dialog className={`${styles.module} modal`} open={modal.open}>
          <button onClick={close}>close</button>
          hello
          {modal.url}
        </dialog>,
        document.getElementById('portal-play-video') as HTMLDivElement
      )
    : null;
};
