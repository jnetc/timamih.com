import { useRef, useState, useEffect } from 'react';
// Hook
import { useOutsideClick } from '@Hooks/useOutsideClick';
// import { useTransitionAnimation } from '@Hooks/useTransitionAnimation';
// Component
import { TeammateGroup } from './service-teammate/Teammate-group';
import { ServiceArticle } from './service-article/ServiceArticle';
// Type
import { ServiceContentType } from '@Types';

export const ServiceContent = ({ data }: { data: ServiceContentType }) => {
  const { teammates, order, ...article } = data;
  const [showTeam, setShowTeam] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const refBG = useRef<HTMLDivElement>(null);

  const openTeammates = () => {
    if (!teammates || teammates.length === 0) return;
    setShowTeam(true);
    setTimeout(() => {
      refBG.current?.classList.remove('hidden');
    }, 100);
    console.log('start', visible);
  };

  const closeTeammates = () => {
    setShowTeam(false);
    setTimeout(() => {
      refBG.current?.classList.remove('hidden');
    }, 100);
    console.log('start', visible);
  };

  useOutsideClick(ref, setShowTeam);

  useEffect(() => {
    const preventOnLoadAnimation = setTimeout(() => {
      ref.current?.querySelector('.background-article')?.removeAttribute('style');
      ref.current?.querySelector('.service-teammates')?.removeAttribute('style');
      clearTimeout(preventOnLoadAnimation);
    }, 700);
  }, []);

  useEffect(() => {
    refBG.current;
  }, []);

  const animationEnd = () => {
    setTimeout(() => {
      // setVisible(false);
      refBG.current?.classList.add('hidden');
    }, 100);
    console.log('end', visible);
  };

  return (
    <div ref={ref} className={`service-content ${showTeam ? 'show-teammates' : 'hide-teammates'}`}>
      <ServiceArticle data={article} handler={openTeammates} />
      <TeammateGroup teammates={teammates} handler={closeTeammates} />

      <span
        ref={refBG}
        onAnimationEnd={animationEnd}
        className={`background-article`}
        style={{ visibility: 'hidden', animationDuration: '0s' }}
      />
    </div>
  );
};
