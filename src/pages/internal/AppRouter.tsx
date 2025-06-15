import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../Homepage";
import useAuthContext from "@/context/AuthContext";
import NotLoginDialog from "../dialog/NotLoginDialog";
import TokenLoginRedirect from "./TokenLoginRedirect";
import AppInitializer from "./AppInitializer";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Application - Auth Require */}
        <Route element={useAuthContext().is_authoized() ? AppInitializer() : NotLoginDialog()}>
          <Route path="/" element={<Homepage />} />
        </Route>

        {/* Other routes - No display */}
        <Route>
          <Route path="/token" element={<TokenLoginRedirect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
