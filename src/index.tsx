import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { FIREBASE_CONFIG } from "@/constants/Config";

import "./styles/index.css";
import { Toaster } from "@/component/ui/sonner";
import { ThemeProvider } from "@/component/theme-provider";
import { RSocketProvider } from "@/context/RsocketContext";
import SettingDialog from "./pages/dialog/SettingDialog";
import ApplicationRendering from "./pages/internal/BootstrappedApp";

// --- Application ---

const FirebaseApplication = initializeApp(FIREBASE_CONFIG, "XanhChinTienLen");
getAnalytics(FirebaseApplication);

// --- Rendering Root ---

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RSocketProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Toaster />
        <SettingDialog />
        <ApplicationRendering />
      </ThemeProvider>
    </RSocketProvider>
  </StrictMode>
);
