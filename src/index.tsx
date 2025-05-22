import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { DiscordSDK } from "@discord/embedded-app-sdk";
import { API_BASE, FIREBASE_CONFIG } from "@/constants/Common";

import "@radix-ui/themes/styles.css";
import "./styles/index.css";
import { Theme } from "@radix-ui/themes";
import Router from "./pages/Router";
import useAuthContext, { AuthContextProp } from "@/context/AuthContext";
import { useEffectOnce } from "@/hook/useEffectOnce";

// --- Application ---

const firebaseApplication = initializeApp(FIREBASE_CONFIG, "XanhChinTienLen");
getAnalytics(firebaseApplication);

// --- Rendering Root ---
const ApplicationRendering = () => {
  const authContext = useAuthContext();

  const startApp = async () => {
    try {
      const discordSdk = new DiscordSDK(API_BASE);
      await discordSdk.ready();

      const { code } = await discordSdk.commands.authorize({
        scope: ["identify", "guilds", "applications.commands"],
        response_type: "code",
        client_id: API_BASE,
        prompt: "none",
        state: "",
      });

      authContext.login(code);
    } catch {
      console.info("This client running in browser!");
    }
  };

  useEffectOnce(() => {
    startApp();
  });

  return <Router />;
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme appearance="dark">
      <ApplicationRendering />
    </Theme>
  </StrictMode>
);
