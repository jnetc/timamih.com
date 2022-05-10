import { useRef } from 'react';
import { createPortal } from 'react-dom';
// Hook
import { usePlayModalStore } from '@Hooks/usePlayModalStore';
import { useHideScrollbar } from '@Hooks/useHideScrollbar';
// Styles
import styles from './play-video.module.css';
// Component
import { Player } from './Player';
import { CloseButton } from '@Components/buttons/close';

export const PlayVideoModal = () => {
  const { modal, openModal } = usePlayModalStore();
  const ref = useRef<HTMLElement>(null);

  const closeButtonHandler = (res: boolean) => {
    openModal({ open: res });
  };
  const closeDialogHandler = () => openModal({ open: false });

  useHideScrollbar(modal.open);

  return modal.open
    ? createPortal(
        <dialog
          className={`${styles.module} modal`}
          open={modal.open}
          ref={ref}
          onClick={closeDialogHandler}
        >
          <CloseButton handler={closeButtonHandler} />
          <div className={styles.video}>
            <Player url={modal.url ?? ''} />
          </div>
        </dialog>,
        document.getElementById('portal-play-video') as HTMLDivElement
      )
    : null;
};
