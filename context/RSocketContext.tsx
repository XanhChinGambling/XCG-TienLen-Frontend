import React, { createContext, useContext, useRef } from "react";
import { ReactiveSocket } from "rsocket-types";
import { Encodable } from "rsocket-core";
import BackendRsocketClient from "@/lib/RsocketInstance";
import useEffectOnce from "@/hook/useEffectOnce";
import { ENV_IS_DEV } from "@/constants/Enviroment";

interface RSocketContextValue {
  socket: React.RefObject<ReactiveSocket<any, Encodable> | null>;
  connected: React.RefObject<boolean>;
}

const RSocketContext = createContext<RSocketContextValue | null>(null);

export const RSocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const socket = useRef<ReactiveSocket<any, Encodable> | null>(null);
  const connected = useRef(false);

  useEffectOnce(() => {
    const subscriber = () => {
      BackendRsocketClient.subscribe({
        onComplete: (sk) => {
          socket.current = sk;
          connected.current = true;
        },

        onError: (e) => {
          ENV_IS_DEV && console.error(e);

          socket.current = null;
          connected.current = false;
          setTimeout(() => subscriber(), 1000);
        },
      });
    };

    subscriber();
  });

  return <RSocketContext.Provider value={{ socket, connected }}>{children}</RSocketContext.Provider>;
};

export default function useRSocketContext() {
  const ctx = useContext(RSocketContext);
  if (!ctx) throw new Error("useRSocket must be used within <RSocketProvider>");
  return ctx;
}
