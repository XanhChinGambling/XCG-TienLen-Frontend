import { create } from "zustand";

interface SoundStore {
  volume: number; // 0.0 -> 1.0

  isMuted: boolean;
  isBgmPlaying: boolean;

  setVolume: (v: number) => void;
  toggleMute: () => void;

  init: () => void;
  playBgm: () => void;
  pauseBgm: () => void;
}

const bgm = new Audio("/sound/bgm.mp3");
bgm.loop = true;
bgm.volume = 0.5;

const useSoundContext = create<SoundStore>((set, get) => {
  return {
    volume: bgm.volume,
    isMuted: false,
    isBgmPlaying: false,

    setVolume: (v: number) => ((bgm.volume = v), set({ volume: v })),
    toggleMute: () => ((bgm.muted = !bgm.muted), set({ isMuted: bgm.muted })),

    playBgm: () => bgm.play().then(() => set({ isBgmPlaying: true })),
    pauseBgm: () => (bgm.pause(), set({ isBgmPlaying: false })),

    init: () => {
      const tryPlay = () => {
        get().playBgm();

        window.removeEventListener("click", tryPlay);
        window.removeEventListener("touchstart", tryPlay);
      };

      window.addEventListener("click", tryPlay, { once: true });
      window.addEventListener("touchstart", tryPlay, { once: true });
    },
  };
});

export default useSoundContext;
