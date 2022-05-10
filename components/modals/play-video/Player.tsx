import styles from './play-video.module.css';
export const Player = ({ url }: { url: string }) => (
  <iframe
    className={styles.frame}
    src={url ?? ''}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);
