// COMPONENTS TIPE
export type LanguagesType = 'ru' | 'fi' | 'en';
export type ServiceIllustrationType = 'ads' | 'photo' | 'video' | 'graphic' | 'drone' | 'it' | 'consult' | 'sound';
export type ContactIconsType = 'telegram' | 'telephone' | 'instagram' | 'whatsapp' | 'email';
export type SliderNameType = 'howwework' | 'testimonial';

export type ID = { id: string };
export type Name = { name: string };
export type Url = { url: string };
export type HandlerType = { handler: () => void };

export interface ArticleType {
  title: string;
  description: string;
}

export interface ProffAndAvatar {
  proff: string;
  avatar: AvatarType;
}

export interface ArticleWithIdType extends ID, ArticleType {}

export interface AvatarType extends Url {
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

interface HeroSectionType extends ArticleType {
  label: string;
  playButton: string;
  hireButton: string;
  mainVideoUrl: string;
  chat: Array<ChatMessageType>;
}

export interface Testimonial<T> extends ArticleType {
  steps: Array<T>;
  nextButton: string;
  prevButton: string;
}

export interface HowWeWorkType<T> extends ArticleType {
  steps: Array<T>;
  nextButton: string;
  prevButton: string;
}

export interface TeammateType extends ArticleWithIdType, Url, ProffAndAvatar {
  recruit: boolean;
  // proff: string;
  // avatar: AvatarType;
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
  heroSection: HeroSectionType;
  howwework: HowWeWorkType<ArticleWithIdType>;
  whatweoffer: WhatWeOfferType;
  ourlittlestory: ArticleType;
  testimonial: Testimonial<ArticleWithIdType & ProffAndAvatar>;
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
