import { API_BASE, DISCORD_CLIENT_ID } from "@/constants/Enviroment";
import useAuthContext from "@/context/AuthContext";
import useSoundContext from "@/context/SoundContext";
import useEffectOnce from "@/hook/useEffectOnce";
import { DiscordSDK } from "@discord/embedded-app-sdk";
import AppRouter from "./AppRouter";

const ApplicationRendering = () => {
  const AuthContext = useAuthContext();
  const SoundContext = useSoundContext();

  useEffectOnce(() => {
    const startDiscordSdkApp = async () => {
      try {
        const DiscordSdkInstance = new DiscordSDK(DISCORD_CLIENT_ID);
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

    startDiscordSdkApp();
    SoundContext.init();
  });

  return <AppRouter />;
};

export default ApplicationRendering;
