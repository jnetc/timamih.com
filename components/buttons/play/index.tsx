// SVG
import { PlayIcon } from './PlayIcon';
// Hook
import { usePlayModalStore } from '@Hooks/usePlayModalStore';

export const PlayButton = ({ link }: { link: string }) => {
  const { openModal } = usePlayModalStore();
  const modal = () => openModal({ open: true, url: link });

  return (
    <button
      title="play video button"
      aria-labelledby="play video button"
      className="circle-button circle-l click"
      onClick={modal}
    >
      <PlayIcon />
    </button>
  );
};
