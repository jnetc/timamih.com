import { ReactChild, Dispatch, SetStateAction } from 'react';

export type LanguagesType = 'ru' | 'fi' | 'en';

export interface ArticleType<T> {
  title: T;
  description: T;
}
interface ArticleWithIdType<T> {
  id: T;
  title: T;
  description: T;
}

interface SEO<T> {
  globalSeo: {
    fallbackSeo: ArticleType<T>;
  };
}
interface PosterType<T> {
  url: T;
  blurUpThumb: T;
}

interface NavigationLinkType<T> {
  id: T;
  name: T;
  navanchor: T;
}
interface HeaderLinksType<T> {
  headerlinks: Array<NavigationLinkType<T>>;
}

export interface ChatMessageType<T> {
  id: T;
  message: T;
}
interface HeroSectionType<T> extends ArticleType<T> {
  label: T;
  playButton: T;
  hireButton: T;
  mainVideoUrl: T;
  chat: Array<ChatMessageType<T>>;
}

export interface HowWeWorkType<T> extends ArticleType<T> {
  steps: Array<ArticleWithIdType<string>>;
  nextButton: T;
  prevButton: T;
}

export type ServiceIllustrationType =
  | 'ads'
  | 'photo'
  | 'video'
  | 'graphic'
  | 'drone';

export interface ServiceType<T> extends ArticleWithIdType<T> {
  price: T;
  buttonName: T;
  illustration: ServiceIllustrationType;
  order: number;
}
export interface WhatWeOfferType<T> extends ArticleType<T> {
  services: Array<ServiceType<string>>;
}

export interface DataType {
  _site: SEO<string>;
  navigation: HeaderLinksType<string>;
  heroSection: HeroSectionType<string>;
  howwework: HowWeWorkType<string>;
  whatweoffer: WhatWeOfferType<string>;
  // project: ProjectsType<string>;
  // service: ServiceType<string>;
  // about: AboutType<string>;
}

export interface NavMobLinksProps {
  children: ReactChild;
  open: boolean;
  handler: Dispatch<SetStateAction<boolean>>;
}

/**
 * Button Types Props
 */
export interface ButtonProps {
  handler: () => void;
}
export interface PrevButtonProps extends ButtonProps {
  currentStep: number;
}
export interface NextButtonProps extends PrevButtonProps {
  amountSteps: number;
  lastStep: boolean;
}
