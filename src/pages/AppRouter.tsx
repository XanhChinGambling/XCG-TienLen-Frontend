import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import useAuthContext from "@/context/AuthContext";
import NotLoginArlet from "./dialog/NotLoginDialog";
import TokenLoginRedirect from "./internal/TokenLoginRedirect";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Application - Auth Require - Not scrollable */}
        <Route element={useAuthContext().is_authoized() ? <Outlet /> : NotLoginArlet()}>
          <Route path="/" element={<Homepage />} />
        </Route>

        {/* Other routes - No style */}
        <Route>
          <Route path="/token" element={<TokenLoginRedirect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
