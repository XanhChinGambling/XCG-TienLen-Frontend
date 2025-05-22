import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./Home";
import useAuthContext from "@/context/AuthContext";
import NotLoginArlet from "./Login";
import Token from "./Token";

const GamlingBackground = () => (
  <div
    className="h-screen w-screen overflow-hidden bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url('/background/gambling.webp')` }}>
    <Outlet />
  </div>
);

const MustLogin = () => {
  const authContext = useAuthContext();
  if (!authContext.isAuthoized()) return NotLoginArlet();
  else return <Outlet />;
};

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MustLogin />}>
          <Route element={<GamlingBackground />}>
            {/* Application - Not scrollable */}
            <Route path="/" element={<Home />} />
          </Route>
        </Route>

        <Route>
          {/* Other routes - No style */}
          <Route path="/token" element={<Token />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
