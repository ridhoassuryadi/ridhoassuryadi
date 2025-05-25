import { screenAtom } from "@utils/state";
import { useAtom } from "jotai";
import { useEffect } from "react";

export default function useScreen(listen = false) {
  const [screen, setScreen] = useAtom(screenAtom);

  useEffect(() => {
    if (!listen || typeof window == "undefined") return;
    update();

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  function update() {
    setScreen({ width: window.innerWidth, height: window.innerHeight });
  }

  return screen;
}
