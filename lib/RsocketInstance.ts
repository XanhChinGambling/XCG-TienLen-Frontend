import { API_WS_BASE, ENV_IS_DEV } from "@/constants/Enviroment";
import { RSocketClient, JsonSerializer, IdentitySerializer } from "rsocket-core";
import RSocketWebSocketClient from "rsocket-websocket-client";

// -----------------------------------------------------------------------------------

const BackendWebSocketClient = new RSocketClient({
  serializers: {
    data: JsonSerializer,
    metadata: IdentitySerializer,
  },
  setup: {
    keepAlive: 10_000,
    lifetime: 90_000,
    dataMimeType: "application/json",
    metadataMimeType: "message/x.rsocket.routing.v0",
  },
  transport: new RSocketWebSocketClient({
    url: API_WS_BASE,
    debug: ENV_IS_DEV,
  }),
}).connect();

export default BackendWebSocketClient;

// -----------------------------------------------------------------------------------
