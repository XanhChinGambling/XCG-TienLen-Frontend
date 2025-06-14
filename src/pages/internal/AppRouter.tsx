import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Homepage from "../Homepage";
import useAuthContext from "@/context/AuthContext";
import NotLoginDialog from "../dialog/NotLoginDialog";
import TokenLoginRedirect from "./TokenLoginRedirect";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Application - Auth Require - Not scrollable */}
        <Route element={useAuthContext().is_authoized() ? <Outlet /> : NotLoginDialog()}>
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
