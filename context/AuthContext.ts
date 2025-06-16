import { REFRESH_TOKEN_TTL } from "@/constants/Config";
import { CallChallenge, CallLogin, CallRefreshToken } from "@/query/v1/rest/auth/DiscordAuth";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface AuthStore {
  discordAuthCode?: string;

  accessToken?: string;
  lastRefresh?: string;

  login: (sdkAuthCode: string, redirectUri?: string) => Promise<void>;
  refreshToken: () => Promise<void>;

  isAuthoized: () => boolean;
  isRefreshTokenExpired: () => boolean;
}

const useAuthContext = create<AuthStore>()(
  persist(
    (set, get) => ({
      login: async (discordAuthCode: string, redirectUri?: string) =>
        set({
          discordAuthCode,

          accessToken: await CallLogin({
            code: discordAuthCode,
            state: (await CallChallenge()).state,
            redirectUri,
          }),

          lastRefresh: new Date().toISOString(),
        }),

      refreshToken: async () =>
        set({
          accessToken: await CallRefreshToken(),
          lastRefresh: new Date().toISOString(),
        }),

      // --- Check ---

      isAuthoized: () => get().accessToken !== undefined,

      isRefreshTokenExpired: () =>
        Math.abs(new Date().getTime() - new Date(get().lastRefresh!).getTime()) > REFRESH_TOKEN_TTL,
    }),

    { name: "auth-storage" }
  )
);

export default useAuthContext;
