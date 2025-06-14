import { REFRESH_TOKEN_TTL } from "@/constants/Config";
import { CallChallenge, CallLogin, CallRefreshToken } from "@/query/v1/rest/auth/DiscordAuth";
import { FireConnect } from "@/query/v1/rsocket/RsocketIo";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "sonner";

export interface AuthContextProp {
  // --- State ---
  sdk_authorize_code?: string;

  access_token?: string;
  last_refresh?: string;

  // --- Function ---
  login: (sdk_auth_code: string, redirect_uri?: string) => Promise<void>;
  refresh_token: () => Promise<void>;

  // --- Checker ---
  is_authoized: () => boolean;
  is_refresh_token_expired: () => boolean;
}

const useAuthContext = create<AuthContextProp>()(
  persist(
    (set, get) => ({
      login: async (sdk_auth_code: string, redirect_uri?: string) => {
        const challenge = await CallChallenge();
        const access_token = await CallLogin({
          code: sdk_auth_code,
          state: challenge.state,
          redirectUri: redirect_uri,
        });

        set({
          sdk_authorize_code: sdk_auth_code,
          access_token: access_token,
          last_refresh: new Date().toISOString(),
        });

        // im not use event or promise cuz lazy, just use it
        await FireConnect(access_token);
        toast("Backend connected.");
      },

      refresh_token: async () => {
        const accessToken = await CallRefreshToken();

        set({
          access_token: accessToken,
          last_refresh: new Date().toISOString(),
        });
      },

      // --- Check ---

      is_authoized: () => get().access_token !== undefined,

      is_refresh_token_expired: () => {
        const last_refresh = new Date(get().last_refresh!);
        return Math.abs(new Date().getTime() - last_refresh.getTime()) > REFRESH_TOKEN_TTL;
      },
    }),

    { name: "auth-storage" }
  )
);

export default useAuthContext;
