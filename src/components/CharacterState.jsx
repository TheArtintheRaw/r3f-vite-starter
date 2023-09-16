import { atom } from 'jotai';

export const characterStateAtom = atom({
  character: {
    position: { x: 0, y: 0 },
    health: 100,
  },
});