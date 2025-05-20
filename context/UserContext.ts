import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthContextProp {
  /** JWT access token. */
  accessToken?: string;

  /** Last refresh using refresh token or login */
  lastRefresh?: Date;
}

const useAuthContext = create<AuthContextProp>()(
  persist(
    (set, get) => ({
      //
    }),
    { name: "user_context" }
  )
);

export default useAuthContext;
