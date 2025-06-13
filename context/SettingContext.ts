import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface SettingContextProp {
  volume: number; // 0.2 to 1
  volume_muted: boolean;

  volume_toggle: () => void; 
}

const useSettingContext = create<SettingContextProp>()(
  persist(
    (set, get) => ({
      volume: 0.5,
      volume_muted: false,

      volume_toggle: () => set({ volume_muted: !get().volume_muted })
    }),
    {
      name: "setting-storage",
    }
  )
);

export default useSettingContext;
