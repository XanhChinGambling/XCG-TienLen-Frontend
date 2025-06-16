import { API_BASE } from "@/constants/Enviroment";
import useAuthContext from "@/context/AuthContext";
import useSoundContext from "@/context/SoundContext";
import useEffectOnce from "@/hook/useEffectOnce";
import { DiscordSDK } from "@discord/embedded-app-sdk";
import AppRouter from "./AppRouter";
import { FormatMetadata } from "@/util/CommonUtil";
import useRSocketContext from "@/context/RsocketContext";

const ApplicationRendering = () => {
  const AuthContext = useAuthContext();
  const SoundContext = useSoundContext();
  const RsocketContext = useRSocketContext();

  useEffectOnce(() => {
    const StartSdk = async () => {
      try {
        const DiscordSdkInstance = new DiscordSDK(API_BASE);
        await DiscordSdkInstance.ready();

        const { code } = await DiscordSdkInstance.commands.authorize({
          scope: ["identify", "guilds", "applications.commands"],
          response_type: "code",
          client_id: API_BASE,
          prompt: "none",
          state: "",
        });

        AuthContext.login(code);
      } catch {
        console.info("This client running in browser!");
      }
    };

    setInterval(() => {
      RsocketContext.socket.current
        ?.requestResponse({ metadata: FormatMetadata("api.v1.rsio.ping") })
        .then((data) => console.log(data));
    }, 1000);

    StartSdk();

    SoundContext.init();
  });

  return <AppRouter />;
};

export default ApplicationRendering;
