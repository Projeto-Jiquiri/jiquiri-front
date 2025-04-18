import { create } from 'zustand';

interface DprState {
  dpr: number;
  setDpr: (dpr: number) => void;
}


export const useDprStore = create<DprState>((set) => ({
  dpr: 1,
  setDpr: (dpr) => set({ dpr }),
}));

