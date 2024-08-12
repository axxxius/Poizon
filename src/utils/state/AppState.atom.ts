import { atom } from 'recoil';
import { ranIndex, texts } from '@utils';

export const textAtom = atom<string>({
  key: 'textAtom',
  default: texts[ranIndex]
});

export const timeAtom = atom<number>({
  key: 'timeAtom',
  default: 5
});

export const wordAtom = atom<string>({
  key: 'wordAtom',
  default: ''
});

export const charIndexAtom = atom<number>({
  key: 'charIndexAtom',
  default: 0
});

export const mistakesAtom = atom<number>({
  key: 'mistakesAtom',
  default: 0
});

export const cpmAtom = atom<number>({
  key: 'cpmAtom',
  default: 0
});

export const wpmAtom = atom<number>({
  key: 'wpmAtom',
  default: 0
});
