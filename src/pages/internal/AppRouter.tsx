import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../Homepage";
import TokenLoginRedirect from "./TokenLoginRedirect";
import AppInitializer from "./AppInitializer";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Application - Initializer Require */}
        <Route element={<AppInitializer />}>
          <Route path="/" element={<Homepage />} />
        </Route>

        {/* Other routes... */}
        <Route>
          <Route path="/token" element={<TokenLoginRedirect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
