import { API_WS_BASE, ENV_IS_DEV } from "@/constants/Enviroment";
import { RSocketClient, JsonSerializer, IdentitySerializer } from "rsocket-core";
import RSocketWebsocketClient from "rsocket-websocket-client";

// -----------------------------------------------------------------------------------

export default async function createBackendRsocketClient() {
  const client = new RSocketClient({
    setup: {
      keepAlive: 10_000,
      lifetime: 90_000,
      dataMimeType: "application/json",
      metadataMimeType: "message/x.rsocket.routing.v0",
    },

    transport: new RSocketWebsocketClient({
      url: API_WS_BASE,
      debug: ENV_IS_DEV,
      wsCreator: (url) => new WebSocket(url),
    }),

    serializers: {
      data: JsonSerializer,
      metadata: IdentitySerializer,
    },
  });
  
  return await client.connect();
}

// -----------------------------------------------------------------------------------
