import BackendWebSocketClient from "@/lib/RsocketInstance";
import { FormatMetadata } from "@/util/CommonUtil";

const API = "api.v1.rsio.%s";

export const FireConnect = async (accessToken: string) => {
  (await BackendWebSocketClient).fireAndForget({
    data: accessToken,
    metadata: FormatMetadata(API.replace("%s", "connect")),
  });
};
