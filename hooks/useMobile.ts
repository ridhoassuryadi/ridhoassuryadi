import useScreen from "@hooks/useScreen";
import useMedia from "./useMedia";

export default function useMobile() {
  const isSmall = useMedia("(max-width: 640px)");
  const isTouch = useMedia("(pointer:none), (pointer:coarse)");
  return isSmall || isTouch;
}

export function isMobile() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(max-width: 640px)").matches ||
    window.matchMedia("(pointer:none), (pointer:coarse)").matches
  );
}
