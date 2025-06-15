import { create } from "zustand";
import { Encodable, ReactiveSocket } from "rsocket-types";
import { ENV_IS_DEV } from "@/constants/Enviroment";
import createBackendRsocketClient from "@/lib/RsocketInstance";

interface RSocketStore {
  isConnected: boolean;
  connection?: ReactiveSocket<any, Encodable>;

  connect: () => Promise<void>;
}

const useRSocketContext = create<RSocketStore>((set, get) => ({
  isConnected: false,

  connect: async () => {
    if (get().isConnected || get().connection) return;

    try {
      const connection = await createBackendRsocketClient();
      set({ isConnected: true, connection });
    } catch (err) {
      ENV_IS_DEV && console.error("[RSocket] Connect failed:", err);
    }
  },
}));

export default useRSocketContext;
