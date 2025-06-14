import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { DiscordSDK } from "@discord/embedded-app-sdk";
import { FIREBASE_CONFIG } from "@/constants/Config";
import { API_BASE } from "@/constants/Enviroment";

import "./styles/index.css";
import AppRouter from "./pages/internal/AppRouter";
import useAuthContext from "@/context/AuthContext";
import useEffectOnce from "@/hook/useEffectOnce";
import { Toaster } from "@/component/ui/sonner";
import { ThemeProvider } from "@/component/theme-provider";
import SettingDialog from "./pages/dialog/SettingDialog";
import useSoundContext from "@/context/SoundContext";

// --- Application ---

const FirebaseApplication = initializeApp(FIREBASE_CONFIG, "XanhChinTienLen");
getAnalytics(FirebaseApplication);

// --- Rendering Root ---
const ApplicationRendering = () => {
  const AuthContext = useAuthContext();
  const SoundContext = useSoundContext();

  const StartApp = async () => {
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

  useEffectOnce(() => {
    StartApp();
    SoundContext.init();
  });

  return <AppRouter />;
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Toaster />
      <SettingDialog />

      <ApplicationRendering />
    </ThemeProvider>
  </StrictMode>
);
