import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { DiscordSDK } from "@discord/embedded-app-sdk";
import { DISCORD_CLIENT_ID, FIREBASE_CONFIG } from "@/constants/Common";

import "./styles/index.css";

// --- Application ---

const firebaseApplication = initializeApp(FIREBASE_CONFIG, "XanhChinTienLen");
const firebaseAnalytics = getAnalytics(firebaseApplication);

const application = async () => {
  try {
    const discordSdk = new DiscordSDK(DISCORD_CLIENT_ID);
    await discordSdk.ready();

    await discordSdk.commands.authorize({
      scope: ["identify", "guilds", "applications.commands"],
      response_type: "code",
      client_id: DISCORD_CLIENT_ID,
      prompt: "none",
      state: "",
    });
  } catch {
    console.info("This client running in browser!");
  }
};

// --- Rendering Root ---
const ApplicationRendering = () => {
  application();

  return (
    <div className="h-full w-full bg-blue-500">
      <div className="flex flex-col h-full w-full justify-center items-center">
        <div>
          <h1>{firebaseAnalytics.app.name}</h1>
          <p>{firebaseAnalytics.app.options.projectId}</p>
        </div>
      </div>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApplicationRendering />
  </StrictMode>
);
