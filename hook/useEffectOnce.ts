import { useEffect, useRef } from "react";

const useEffectOnce = (effect: () => void | (() => void)) => {
  const hasRun = useRef(false);

  useEffect(() => {
    if (!hasRun.current) {
      hasRun.current = true;
      return effect();
    }
  }, []);
};

export default useEffectOnce;
