import { atom } from 'recoil';

export const activeContentIds = atom<number[]>({
  key: 'activeContentId',
  default: [],
});

export const currentContentId = atom<number>({
  key: 'current',
  default: 0,
});
