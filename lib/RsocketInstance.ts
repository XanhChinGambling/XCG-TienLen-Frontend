import { API_WS_BASE, ENV_IS_DEV } from "@/constants/Enviroment";
import { FormatMetadata } from "@/util/CommonUtil";
import { RSocketClient, JsonSerializer, IdentitySerializer } from "rsocket-core";
import RSocketWebsocketClient from "rsocket-websocket-client";

// -----------------------------------------------------------------------------------

const BackendRsocketClient = new RSocketClient({
  setup: {
    keepAlive: 20_000,
    lifetime: 180_000,
    dataMimeType: "application/json",
    metadataMimeType: "message/x.rsocket.routing.v0",
  },

  transport: new RSocketWebsocketClient({
    url: API_WS_BASE,
    debug: ENV_IS_DEV,
  }),

  serializers: {
    data: JsonSerializer,
    metadata: IdentitySerializer,
  },
}).connect();

export default BackendRsocketClient;

// -----------------------------------------------------------------------------------
