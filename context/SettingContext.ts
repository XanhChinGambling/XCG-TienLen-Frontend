import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface SettingContextProp {
  volume: number; // 0 to 1
  volume_muted: boolean;
  isDialogOpen: boolean;

  setVolume: (volume: number) => void;
  volume_toggle: () => void;
  openDialog: () => void;
  closeDialog: () => void;
}

const useSettingContext = create<SettingContextProp>()(
  persist(
    (set, get) => ({
      volume: 0.5,
      volume_muted: false,
      isDialogOpen: false,

      setVolume: (volume: number) => set({ volume, volume_muted: volume <= 0.2 }),

      volume_toggle: () => {
        const current = get();
        if (current.volume_muted)
          set({ volume_muted: false, volume: current.volume <= 0.2 ? 0.5 : current.volume });
        else set({ volume_muted: true });
      },
      
      openDialog: () => set({ isDialogOpen: true }),
      closeDialog: () => set({ isDialogOpen: false }),
    }),
    {
      name: "setting-storage",
      // Không persist dialog state
      partialize: (state) => ({
        volume: state.volume,
        volume_muted: state.volume_muted,
      }),
    }
  )
);

export default useSettingContext;
