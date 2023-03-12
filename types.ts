// COMPONENTS TIPE
export type LanguagesType = 'ru' | 'fi' | 'en';
export type ServiceIllustrationType = 'ads' | 'photo' | 'video' | 'graphic' | 'drone' | 'it' | 'consult' | 'sound';
export type ContactIconsType = 'telegram' | 'telephone' | 'instagram' | 'whatsapp' | 'email';

export type ID = { id: string };
export type Name = { name: string };
export type Url = { url: string };
export type HandlerType = { handler: () => void };

export interface ArticleType {
  title: string;
  description: string;
}

interface ArticleWithIdType extends ID, ArticleType {}

interface AvatarType extends Url {
  blurUpThumb: string;
}

export interface NavigationLinkType extends ID, Name {
  navanchor: string;
}

export interface HeaderLinksType {
  headerlinks: Array<NavigationLinkType>;
}

export interface ChatMessageType extends ID {
  message: string;
}

// SECTION TYPES
interface Favicon {
  image: { url: string };
}
interface SEO {
  facebookPageUrl: string;
  titleSuffix: string;
  siteName: string;
  globalSeo: {
    fallbackSeo: ArticleType & Favicon;
  };
}

interface HeroSectionType<T> extends ArticleType {
  label: T;
  playButton: T;
  hireButton: T;
  mainVideoUrl: T;
  chat: Array<ChatMessageType>;
}

export interface HowWeWorkType<T> extends ArticleType {
  steps: Array<ArticleWithIdType>;
  nextButton: T;
  prevButton: T;
}

export interface TeammateType extends ArticleWithIdType, Url {
  recruit: boolean;
  proff: string;
  avatar: AvatarType;
  isactivatedurl: boolean;
}

export interface ServiceType extends ArticleWithIdType {
  active: boolean;
  price: string;
  buttonName: string;
  illustration: ServiceIllustrationType;
  order: number;
  teammates: Array<TeammateType>;
}

export interface Employees {
  name: string;
  image: string;
  description: string;
  jobTitle: string;
}

export type ServiceContentType = Omit<ServiceType, 'illustration' | 'id' | 'active'>;
export type ServiceArticleType = {
  data: Omit<ServiceContentType, 'teammates' | 'order'>;
} & HandlerType;
export type TeammatesGroupType = Pick<ServiceType, 'teammates'> & HandlerType;

export interface WhatWeOfferType extends ArticleType {
  services: Array<ServiceType>;
}

export interface ContactsType extends ID, Url {
  icon: ContactIconsType;
}
export interface GetInTouchType extends ArticleType {
  copyText: string;
  contacts: Array<ContactsType>;
  tunnus: string;
}

export interface DataType {
  _site: SEO;
  navigation: HeaderLinksType;
  heroSection: HeroSectionType<string>;
  howwework: HowWeWorkType<string>;
  whatweoffer: WhatWeOfferType;
  ourlittlestory: ArticleType;
  getintouch: GetInTouchType;
}

/**
 * Button Types Props
 */

export interface MobileNavigationButtonProps extends HandlerType {
  openNavMenu: boolean;
}
export interface PrevButtonProps extends HandlerType {
  currentStep: number;
}
export interface NextButtonProps extends PrevButtonProps {
  amountSteps: number;
}
