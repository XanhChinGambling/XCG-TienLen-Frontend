import { useRef } from "react";
import { Encodable } from "rsocket-core";
import { ReactiveSocket } from "rsocket-types";
import useEffectOnce from "./useEffectOnce";
import BackendRsocketClient from "@/lib/RsocketInstance";

export default function useRSocketConnection() {
  const socket = useRef<ReactiveSocket<any, Encodable> | null>(null);
  const connected = useRef(false);

  useEffectOnce(() => {
    const subscriber = () =>
      BackendRsocketClient.subscribe({
        onComplete: (sk) => ((socket.current = sk), (connected.current = true)),
        onError: (e) => {
          socket.current = null;
          connected.current = false;

          console.log(e);
          subscriber();
        },
      });

    subscriber();
  });

  return { socket, connected };
}
