import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthContextProp {
  /** --- */
  sdkToken?: string;

  accessToken?: string;
  lastRefresh?: string;

  /** --- */
  authorizeSdk: (discordToken: string) => void;
}

const useAuthContext = create<AuthContextProp>()(
  persist(
    (set, get) => ({
      accessToken: undefined,
      lastRefresh: undefined,

      authorizeSdk: (discordToken: string) => {
        set({ sdkToken: discordToken });
        
        
      }
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthContext;
