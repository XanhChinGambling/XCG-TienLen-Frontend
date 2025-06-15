import useRSocketContext from "@/context/RsocketContext";
import useTienLenStatContext from "@/context/TienLenStatContext";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function AppInitializer() {
  const [initialized, setInitialized] = useState(false);
  const RsocketContext = useRSocketContext();
  const TLStatContext = useTienLenStatContext();

  const doInit = async () => {
    await RsocketContext.connect();
    TLStatContext.init();


    setInitialized(true);
  };

  useEffect(() => {
    doInit();
  }, []);

  if (!initialized) return <div></div>;

  return <Outlet />;
}
