import { useContext, createContext, Dispatch, SetStateAction } from 'react';
import { LanguagesType, DataType } from '@Types';

type State = {
  language: LanguagesType;
  languages: Array<string>;
  data: DataType | null;
  darkTheme: boolean;
  switchTheme: Dispatch<SetStateAction<boolean>>;
};
const state: State = {
  language: 'fi',
  languages: [],
  data: null,
  darkTheme: false,
  switchTheme: isDark => isDark,
};

export const Store = createContext(state);

export const useStore = () => {
  return useContext(Store);
};
