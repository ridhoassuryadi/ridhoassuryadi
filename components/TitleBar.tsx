import {
  PowerIcon,
  MoonIcon,
  SunIcon,
  BellIcon,
  ArrowLeftEndOnRectangleIcon,
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";
import Layer from "@utils/layer";
import useTheme from "@hooks/useTheme";
import useMobile from "@hooks/useMobile";
import { useTitleBar, useFullscreen, useInbox, usePage } from "@utils/state";
import { useEffect, useRef, useState } from "react";
import { useWindows } from "@utils/state";
import Clock from "./Clock";

export default function TitleBar() {
  const barRef = useRef<HTMLDivElement>(null);
  const mobile = useMobile();

  const { setPage } = usePage();
  const { windows } = useWindows();
  const { inbox, setInbox } = useInbox();
  const { fullscreen } = useFullscreen();
  const { setTitleBar } = useTitleBar();

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!barRef.current) return setTitleBar(0);
    const rect = barRef.current.getBoundingClientRect();
    setTitleBar(rect.height);
  }, [barRef]);

  function toggleFullscreen() {
    if (!fullscreen) return;
    if (fullscreen.active) fullscreen.exit();
    else fullscreen.enter();
  }

  return (
    <div
      ref={barRef}
      style={Layer.style("titlebar")}
      className={`fixed inset-x-0 top-0 bg-wallpaper`}
    >
      <div
        className={`flex w-full justify-between px-4 py-2 ${
          !mobile
            ? "bg-background shadow shadow-text-10"
            : windows.length
              ? "bg-background"
              : ""
        } ${loaded ? "transition-all" : ""}`}
      >
        {!mobile && (
          <div className="flex space-x-3">
            <button
              onClick={toggleFullscreen}
              className="text-text-70 hover:text-text"
            >
              {fullscreen?.active ? (
                <ArrowsPointingInIcon className="w-5" />
              ) : (
                <ArrowsPointingOutIcon className="w-5" />
              )}
            </button>
            <Theme />
          </div>
        )}
        <Clock small />
        <div className="flex space-x-3">
          {mobile && <Theme />}
          <button
            id="btn-inbox"
            onClick={() => setInbox(!inbox)}
            className="text-text-70 hover:text-text"
          >
            <BellIcon className="w-5" />
          </button>
          {!mobile && (
            <button
              onClick={() => setPage("LOGIN")}
              className="text-text-70 hover:text-text"
            >
              <ArrowLeftEndOnRectangleIcon className="w-5" />
            </button>
          )}
          <button
            onClick={() => setPage("POWER")}
            className="text-text-70 hover:text-text"
          >
            <PowerIcon className="w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Theme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="text-text-70 hover:text-text">
      {theme == "LIGHT" ? (
        <MoonIcon className="w-5" />
      ) : (
        <SunIcon className="w-5" />
      )}
    </button>
  );
}
