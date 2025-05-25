import { useBackButton } from "@utils/state";
import { useEffect } from "react";

export default function useBack(callback: () => void, enabled = true) {
  const { setBackButton } = useBackButton();

  useEffect(() => {
    if (!enabled) {
      setBackButton((current) => (current == callback ? null : current));
      return;
    }

    setBackButton(() => callback);

    return () =>
      setBackButton((current) => (current == callback ? null : current));
  }, [enabled]);
}
