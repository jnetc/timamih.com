import { useContext, createContext } from 'react';

export interface PlayModalType {
  open: boolean;
  url?: string | null;
}

type State = {
  modal: PlayModalType;
  openModal: (obj: PlayModalType) => void;
};
const state: State = {
  modal: { open: false },
  openModal: obj => obj,
};

export const PlayModalStore = createContext(state);

export const usePlayModalStore = () => {
  return useContext(PlayModalStore);
};
