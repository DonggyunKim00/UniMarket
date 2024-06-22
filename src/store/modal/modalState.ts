import { create } from 'zustand';

interface Prop {
  modalState: boolean;
  open: () => void;
  close: () => void;
}

const useModalStateStore = create<Prop>((set) => ({
  modalState: false,
  open: () => set(() => ({ modalState: true })),
  close: () => set(() => ({ modalState: false })),
}));

export default useModalStateStore;
