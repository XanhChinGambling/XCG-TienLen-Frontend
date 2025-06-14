import { create } from "zustand";

interface BGMContextProp {
  volume: number; // 0.0 -> 1.0
  muted: boolean;
  is_playing: boolean;

  set_volume: (v: number) => void;
  toggle_mute: () => void;

  init: () => void;
  play: () => void;
  pause: () => void;
}

const audio = new Audio("/sound/bgm.mp3");
audio.loop = true;
audio.volume = 0.5;

const useSoundContext = create<BGMContextProp>((set, get) => {
  return {
    volume: audio.volume,
    muted: false,
    is_playing: false,

    set_volume: (v: number) => {
      audio.volume = v;
      set({ volume: v });
    },

    toggle_mute: () => {
      audio.muted = !audio.muted;
      set({ muted: audio.muted });
    },

    play: () => {
      audio
        .play()
        .then(() => {
          set({ is_playing: true });
        })
        .catch((err) => {
          console.warn("Autoplay prevented or error:", err);
        });
    },

    pause: () => {
      audio.pause();
      set({ is_playing: false });
    },

    init: () => {
      const tryPlay = () => {
        get().play();
        window.removeEventListener("click", tryPlay);
        window.removeEventListener("touchstart", tryPlay);
      };

      window.addEventListener("click", tryPlay, { once: true });
      window.addEventListener("touchstart", tryPlay, { once: true });
    },
  };
});

export default useSoundContext;
