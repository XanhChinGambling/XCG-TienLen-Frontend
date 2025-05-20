import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthContextProp {
  accessToken?: string;
  lastRefresh?: string;
}

const useAuthContext = create<AuthContextProp>()(
  persist(
    (set, get) => ({
      accessToken: undefined,
      lastRefresh: undefined,
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthContext;
