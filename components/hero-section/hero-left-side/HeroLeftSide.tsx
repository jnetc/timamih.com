import { useState } from 'react';
// Hook
import { useStore } from '@Hooks/useStore';
import { PlayModalStore, usePlayModalStore } from '@Hooks/usePlayModalStore';
// SVG
import { Underline } from './svg/Underline';
import { Diamond } from '@Components/diamond';
import { Arrow } from './svg/Arrow';
// Styles
import styles from './hero-left-side.module.css';
// Componenent
import { PlayButton } from '@Components/buttons/play';
import { PlayVideoModal } from '@Components/modals/play-video/PlayVideoModal';

export const HeroLeftSide = () => {
  const { language } = useStore();
  const { modal } = usePlayModalStore();
  const [modalState, setModalState] = useState(modal);

  const splittingTitle = content.title[language].split(',').map((titl, idx) => {
    if (idx === 0) {
      const two = titl.split(' ');
      return (
        <span key={idx}>
          <strong>{two[0]} </strong>
          {two[1]} {two[2]} {two[3]} {two[4]} {two[5]}
        </span>
      );
    }
    if (idx === 2) {
      return (
        <span key={idx}>
          {titl}
          <Underline />
        </span>
      );
    }
    return <span key={idx}>{titl}</span>;
  });

  return (
    <div className={styles.module}>
      <p className={styles.label}>
        {content.label[language]}
        <Diamond
          color="accent"
          size={36}
          duration={7}
          customClass={'label-diamond'}
        />
      </p>
      <h1 className={styles.title}>{splittingTitle}</h1>
      <p className={`${styles.desc} description-main`}>{content.description}</p>
      <div className={styles.actions}>
        <PlayModalStore.Provider
          value={{
            modal: modalState,
            openModal: setModalState,
          }}
        >
          <PlayButton link={'https://www.youtube.com/embed/liW6bDLnuuk'} />
          <PlayVideoModal />
        </PlayModalStore.Provider>

        <p>Watch video</p>
        <Diamond
          color="secondary"
          size={24}
          duration={5}
          customClass={'action-diamond'}
          delay={1}
        />
        <Arrow />
      </div>
    </div>
  );
};

const content = {
  label: {
    en: 'Marketing agency',
    ru: 'Маркетинговое агентство',
    fi: 'Markkinointitoimisto',
  },
  title: {
    en: 'We make, video and media, advertising',
    ru: 'Мы делаем, видео и медиа, рекламу',
    fi: 'Me teemme, video ja media, mainonta',
  },
  description:
    'Our team create high-quality content for advertising using the latest, modern technologies and proficient professionals.',
  videoUrl:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZeNyjnneq_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
};

//  en: 'We make, video and media, advertising',
//  ru: 'Мы делаем, видео и медиа, рекламу',
//  fi: 'Me teemme, video ja media, mainonta',
