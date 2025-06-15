import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface SettingContextProp {
  is_dialog_open: boolean;

  open_dialog: () => void;
  close_dialog: () => void;
}

const useSettingContext = create<SettingContextProp>()(
  persist(
    (set) => ({
      is_dialog_open: false,

      open_dialog: () => set({ is_dialog_open: true }),
      close_dialog: () => set({ is_dialog_open: false }),
    }),
    {
      name: "setting-storage",

      partialize: (_) => ({}),
    }
  )
);

export default useSettingContext;
