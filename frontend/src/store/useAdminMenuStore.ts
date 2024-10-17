import { create } from 'zustand'
// State types
interface State {
  isOpen: boolean;
  open:()=>void;
  close:()=>void;
}

export const useAdminMenuStore = create<State>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}))
