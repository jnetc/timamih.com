import { ReactChild, Dispatch, SetStateAction } from 'react';

// COMPONENTS TIPE
export type LanguagesType = 'ru' | 'fi' | 'en';

export type ServiceIllustrationType = 'ads' | 'photo' | 'video' | 'graphic' | 'drone';

export type HandlerType = { handler: () => void };

export interface ArticleType<T> {
  title: T;
  description: T;
}

interface ArticleWithIdType<T> {
  id: T;
  title: T;
  description: T;
}

interface AvatarType<T> {
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

// SECTION TYPES
interface SEO<T> {
  globalSeo: {
    fallbackSeo: ArticleType<T>;
  };
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

export interface TeammateType<T> extends ArticleWithIdType<T> {
  recruit: boolean;
  proff: T;
  avatar: AvatarType<T>;
}

export interface ServiceType<T> extends ArticleWithIdType<T> {
  price: T;
  buttonName: T;
  illustration: ServiceIllustrationType;
  order: number;
  teammates: Array<TeammateType<T>>;
}

export type ServiceContentType = Omit<ServiceType<string>, 'illustration' | 'id'>;
export type ServiceArticleType = {
  data: Omit<ServiceContentType, 'teammates' | 'order'>;
} & HandlerType;
export type TeammatesGroupType<T> = Pick<ServiceType<T>, 'teammates'> & HandlerType;

export interface WhatWeOfferType<T> extends ArticleType<T> {
  services: Array<ServiceType<string>>;
}

export interface DataType {
  _site: SEO<string>;
  navigation: HeaderLinksType<string>;
  heroSection: HeroSectionType<string>;
  howwework: HowWeWorkType<string>;
  whatweoffer: WhatWeOfferType<string>;
  ourlittlestory: ArticleType<string>;
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
