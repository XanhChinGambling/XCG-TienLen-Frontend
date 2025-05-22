import useAuthContext from "@/context/AuthContext";
import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
import { useEffectOnce } from "@/hook/useEffectOnce";

export default function Token() {
  const authContext = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffectOnce(() => {
    const code = searchParams.get("code");

    if (code) authContext.login(code, window.location.origin + location.pathname);
    else navigate("/", { replace: true });
  });

  return <div></div>;
}
