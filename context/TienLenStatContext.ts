import { create } from "zustand";

interface TienLenStatStore {
  players: number;
  rooms: number;

  init: () => void;
}

const useTienLenStatContext = create<TienLenStatStore>(() => ({
  players: 8,
  rooms: 2,

  init: () => {},
}));

export default useTienLenStatContext;
