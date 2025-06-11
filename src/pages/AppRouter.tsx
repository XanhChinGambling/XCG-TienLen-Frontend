import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import useAuthContext from "@/context/AuthContext";
import NotLoginArlet from "./NotLoginArlet";
import TokenLoginRedirect from "./TokenLoginRedirect";

const GamlingBackground = () => (
  <div
    className="h-screen w-screen overflow-hidden bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url('/background/gambling.webp')` }}>
    <Outlet />
  </div>
);

// const MustLogin = () => {
//   const authContext = useAuthContext();
//   if (!authContext.isAuthoized()) return NotLoginArlet();
//   else return <Outlet />;
// };

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GamlingBackground />}>
          {/* Application - Not scrollable */}
          <Route path="/" element={<Homepage />} />
        </Route>
        {/* <Route element={<MustLogin />}>
        </Route> */}

        <Route>
          {/* Other routes - No style */}
          <Route path="/token" element={<TokenLoginRedirect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
