import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface SettingStore {
  isDialogOpen: boolean;

  openDialog: () => void;
  closeDialog: () => void;
}

const useSettingContext = create<SettingStore>()(
  persist(
    (set) => ({
      isDialogOpen: false,

      openDialog: () => set({ isDialogOpen: true }),
      closeDialog: () => set({ isDialogOpen: false }),
    }),
    {
      name: "setting-storage",

      partialize: (_) => ({}),
    }
  )
);

export default useSettingContext;
