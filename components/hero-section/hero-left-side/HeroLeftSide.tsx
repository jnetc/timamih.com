import { useState } from 'react';
// Hook
import { useStore } from '@Hooks/useStore';
import { PlayModalStore, usePlayModalStore } from '@Hooks/usePlayModalStore';
// SVG
import { Underline } from './svg/Underline';
import { Star } from '@Components/star';
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
        <Star
          color="accent"
          size={36}
          duration={7}
          customClass={'label-star'}
        />
      </p>
      <h1 className={styles.title}>{splittingTitle}</h1>
      <p className={`${styles.desc} description-main`}>
        {content.description[language]}
      </p>
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
        <Star
          color="secondary"
          size={24}
          duration={5}
          customClass={'action-star'}
          delay={1}
        />
        <Arrow />
      </div>
    </div>
  );
};

const content = {
  label: {
    en: 'Advertising agency',
    ru: 'Рекламное агенство',
    fi: 'Mainostoimisto',
  },
  title: {
    en: 'we will make, a media product, for you',
    ru: 'мы сделаем, медиа продукт, для вас',
    fi: 'Me teemme, mediatuotteen, sinulle',
  },
  description: {
    en: 'Our team create high-quality content for advertising using the latest, modern technologies and proficient professionals.',
    ru: 'Наша команда создает качественный контент для рекламы, используя новейшие, современные технологии и опытных специалистов.',
    fi: 'Tiimimme luo korkealaatuista sisältöä mainontaan käyttämällä uusinta, nykyaikaista teknologiaa ja ammattitaitoisia ammattilaisia.',
  },

  videoUrl:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZeNyjnneq_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
};

//  en: 'We make, video and media, advertising',
//  ru: 'Мы делаем, видео и медиа, рекламу',
//  fi: 'Me teemme, video ja media, mainonta',
