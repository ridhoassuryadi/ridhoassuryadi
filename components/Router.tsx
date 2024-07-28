import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { usePage, useFullscreen } from "@utils/state";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import useRoute from "@hooks/useRoute";
import useTheme from "@hooks/useTheme";
import useNotification from "@hooks/useNotification";
import useScreen from "@hooks/useScreen";

import Power from "@components/pages/Power";
import Login from "@components/pages/Login";
import Home from "@components/pages/Home";

export default function Router() {
  useRoute(true);
  useTheme(true);
  useScreen(true);

  const fullscreen = useFullScreenHandle();

  const { loadNotifications } = useNotification();

  const { setFullscreen } = useFullscreen();
  const { page } = usePage();

  useEffect(() => {
    loadNotifications();
  }, []);

  useEffect(() => {
    setFullscreen(fullscreen);
  }, [fullscreen]);

  useEffect(() => {
    document.addEventListener("contextmenu", onContextMenu);
    return () => document.removeEventListener("contextmenu", onContextMenu);
  }, []);

  function onContextMenu(e: MouseEvent) {
    e.preventDefault();
  }

  return (
    <FullScreen handle={fullscreen}>
      <AnimatePresence>{page == "POWER" && <Power />}</AnimatePresence>
      <AnimatePresence>{page == "LOGIN" && <Login />}</AnimatePresence>
      {page !== "POWER" && <Home />}
    </FullScreen>
  );
}
