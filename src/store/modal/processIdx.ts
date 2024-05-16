import { create } from 'zustand';

interface Prop {
  idx: number;
  next: () => void;
  prev: () => void;
  init: () => void;
}

const useProcessIdxStore = create<Prop>((set) => ({
  idx: 0,
  next: () => set((state) => ({ idx: (state.idx += 1) })),
  prev: () => set((state) => ({ idx: (state.idx -= 1) })),
  init: () => set(() => ({ idx: 0 })),
}));

export default useProcessIdxStore;
