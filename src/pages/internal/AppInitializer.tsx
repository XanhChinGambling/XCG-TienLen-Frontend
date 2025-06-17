import useAuthContext from "@/context/AuthContext";
import useTienLenStatContext from "@/context/TienLenStatContext";
import { Outlet } from "react-router-dom";
import NotLoginDialog from "../dialog/NotLoginDialog";
import { useRef } from "react";
import useRSocketContext from "@/context/RSocketContext";
import RsocketConnectingDialog from "../dialog/RsocketConnectingDialog";

export default function AppInitializer() {
  const state = useRef(false);

  const TLStatContext = useTienLenStatContext();
  const AuthContext = useAuthContext();
  const RSocketContext = useRSocketContext();

  const doInit = async () => {
    TLStatContext.init();

    await Promise.all([]); 
    // there are nothing to wait lmao
  };

  if (!state.current) {
    if (!AuthContext.isAuthoized) return <div>Loading... </div>;

    doInit();
    state.current = true;
  }

  if (!RSocketContext.connected) return <RsocketConnectingDialog />
  if (!AuthContext.isAuthoized()) return <NotLoginDialog />;

  return <Outlet />;
}
