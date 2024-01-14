// import { useState } from 'react';
// Hook
import { useStore } from '@Hooks/useStore';
// import { PlayModalStore, usePlayModalStore } from '@Hooks/usePlayModalStore';
// SVG
import { Underline } from './svg/Underline';
import { Star } from '@Components/star';
// import { Arrow } from './svg/Arrow';
// Componenent
// import { PlayButton } from '@Components/buttons/play';
// import { PlayVideoModal } from '@Components/modals/play-video/PlayVideoModal';

export const HeroLeftSide = () => {
  const { data } = useStore();
  // const { modal } = usePlayModalStore();
  // const [modalState, setModalState] = useState(modal);

  // Check data for destruction
  if (!data) return null;
  const { description, label, title } = data.heroSection;

  const splittingTitle = title.split(',').map((titl, idx) => {
    if (idx === 0) {
      const two = titl.split(' ');
      return (
        <span key={idx}>
          <strong>{two[0]} </strong>
          {two[1]} {two[2]} {two[3]} {two[4]} {two[5]}
        </span>
      );
    }
    return <span key={idx}>{titl}</span>;
  });

  return (
    <div className="hero-left">
      <p className="hero-left__label">
        {label}
        <Star color="accent" size={36} duration={14} customClass={'label-star'} />
      </p>
      <h1 className="hero-left__title">
        {splittingTitle}
        <Underline />
      </h1>
      <p className="hero-left__desc">{description}</p>
      {/* <div className="hero-left__action-buttons">
        <PlayModalStore.Provider
          value={{
            modal: modalState,
            openModal: setModalState,
          }}
        >
          <PlayButton link={mainVideoUrl} />
          <PlayVideoModal />
        </PlayModalStore.Provider>

        <p>{playButton}</p>
        <Star color="secondary" size={24} duration={10} customClass={'action-star'} />
        <Arrow />
      </div> */}
    </div>
  );
};
