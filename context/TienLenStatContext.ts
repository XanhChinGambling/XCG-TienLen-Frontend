import TLUserAndRoomCountUpdateResponse from "@/query/v1/type/response/TLUserAndRoomCountUpdateResponse";
import { create } from "zustand";
import { Encodable, Payload } from "rsocket-types";
import { FormatMetadata } from "@/util/CommonUtil";
import { ENV_IS_DEV } from "@/constants/Enviroment";
import useRSocketContext from "./RsocketContext";

interface TienLenStatContextProp {
  players: number;
  rooms: number;

  init: () => void;
}

const useTienLenStatContext = create<TienLenStatContextProp>((set) => ({
  players: 8,
  rooms: 2,

  init: () => {
    useRSocketContext
      .getState()
      .connection?.requestStream({
        data: undefined,
        metadata: FormatMetadata("api.v1.tienlen.gateway.subscribe"),
      })
      .subscribe({
        onNext: (payload: Payload<TLUserAndRoomCountUpdateResponse, Encodable>) =>
          payload.data && set({ players: payload.data.players, rooms: payload.data.rooms }),
        onError: (e) => ENV_IS_DEV && console.error(e),
      });
  },
}));

export default useTienLenStatContext;
