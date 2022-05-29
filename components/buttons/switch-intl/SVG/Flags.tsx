import { RussianFlag } from './RussianFlag';
import { FinnishFlag } from './FinnishFlag';
import { EnglishFlag } from './EnglishFlag';
// Type
import { LanguagesType } from '@Types';

export const Flags = ({ country }: { country: LanguagesType }) => {
  const flags = {
    ru: <RussianFlag />,
    en: <EnglishFlag />,
    fi: <FinnishFlag />,
  };
  return flags[country];
};
