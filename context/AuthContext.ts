import { REFRESH_TOKEN_TTL } from "@/constants/Common";
import { CallChallenge, CallLogin, CallRefreshToken } from "@/query/v1/auth/DiscordAuth";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthContextProp {
  // --- State ---
  sdkAuthorizeCode?: string;

  accessToken?: string;
  lastRefresh?: string;

  // --- Function ---
  login: (sdkAuthorizeCode: string, redirectUri?: string) => Promise<void>;
  refreshToken: () => Promise<void>;

  // --- Check ---
  isAuthoized: () => boolean;
  isRefreshTokenExpired: () => boolean;
}

const useAuthContext = create<AuthContextProp>()(
  persist(
    (set, get) => ({
      // --- Function ---

      login: async (sdkAuthorizeCode: string, redirectUri?: string) => {
        const challenge = await CallChallenge();
        const accessToken = await CallLogin({
          code: sdkAuthorizeCode,
          state: challenge.state,
          redirectUri,
        });

        set({
          sdkAuthorizeCode: sdkAuthorizeCode,
          accessToken: accessToken,
          lastRefresh: new Date().toISOString(),
        });
      },

      refreshToken: async () => {
        const accessToken = await CallRefreshToken();

        set({
          accessToken: accessToken,
          lastRefresh: new Date().toISOString(),
        });
      },

      // --- Check ---

      isAuthoized: () => get().accessToken !== undefined,

      isRefreshTokenExpired: () => {
        const lastRefresh = new Date(get().lastRefresh!);
        return Math.abs(new Date().getTime() - lastRefresh.getTime()) > REFRESH_TOKEN_TTL;
      },
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthContext;
