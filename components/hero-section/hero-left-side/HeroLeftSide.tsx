import { useStore } from '@Hooks/useStore';
// SVG
import { Underline } from './svg/Underline';
import styles from './hero-left-side.module.css';
import { Diamond } from '@Components/diamond';

export const HeroLeftSide = () => {
  const { language } = useStore();
  const splittingTitle = content.title[language].split(',').map((titl, idx) => {
    if (idx === 2)
      return (
        <span key={idx}>
          {titl.trim()}
          <Underline />
        </span>
      );
    return <span key={idx}>{titl.trim()}</span>;
  });
  return (
    <div className={styles.module}>
      <p className={styles.label}>
        {content.label[language]}
        <Diamond
          color="accent"
          size={36}
          dur={25}
          customClass={'label-diamond'}
        />
      </p>
      <h1 className={styles.title}>{splittingTitle}</h1>
      <p className="description-main">{content.description}</p>
      <button className={styles.playBtn}></button>
    </div>
  );
};

const content = {
  label: {
    en: 'Advertising agency',
    ru: 'Рекламное агенство',
    fi: 'Maions toimisto',
  },
  title: {
    en: 'We make, media products, for you',
    ru: 'Мы делаем, медиа продукты, для вас',
    fi: 'Teemme, mediatuotteita, sinulle',
  },
  description:
    'Our team create high-quality content for advertising using the latest, modern technologies and proficient professionals.',
  videoUrl:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZeNyjnneq_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
};
