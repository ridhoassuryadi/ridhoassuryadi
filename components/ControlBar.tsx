import {
  ArrowLeftIcon,
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import useMobile from "@hooks/useMobile";
import Layer from "@utils/layer";
import {
  useBackButton,
  useControlBar,
  useFullscreen,
  useWindows,
} from "@utils/state";
import { useEffect, useRef } from "react";

export default function ControlBar() {
  const barRef = useRef<HTMLDivElement>(null);
  const mobile = useMobile();

  const { backbutton } = useBackButton();
  const { fullscreen } = useFullscreen();
  const { setControlBar } = useControlBar();
  const { windows, setWindows } = useWindows();

  useEffect(() => {
    if (!barRef.current) return setControlBar(0);
    const rect = barRef.current.getBoundingClientRect();
    setControlBar(rect.height);
  }, [barRef.current]);

  function back() {
    if (backbutton) return backbutton();
    setWindows(windows.filter((w) => w.priority !== windows.length));
  }

  function home() {
    setWindows([]);
  }

  function toggleFullscreen() {
    if (!fullscreen) return;
    if (fullscreen?.active) fullscreen.exit();
    else fullscreen.enter();
  }

  return (
    <div
      ref={barRef}
      style={Layer.style("controlbar")}
      className={`fixed inset-x-0 bottom-0 flex h-12 w-full justify-between bg-background shadow-[0_5px_15px_rgba(var(--shadow-color),0.3)] ${
        mobile ? "" : "hidden"
      }`}
    >
      <button
        onClick={back}
        className="group flex h-full grow items-center justify-end"
      >
        <ArrowLeftIcon className="w-5 text-text-50 transition-all group-focus:text-text-90" />
      </button>
      <button
        onClick={home}
        className="group flex h-full w-[45%] items-center justify-center"
      >
        <HomeIcon className="w-5 text-text-50 transition-all group-focus:text-text-90" />
      </button>
      <button
        onClick={toggleFullscreen}
        className="group flex h-full grow items-center justify-start"
      >
        {fullscreen?.active ? (
          <ArrowsPointingInIcon className="w-5 text-text-50 transition-all group-focus:text-text-90" />
        ) : (
          <ArrowsPointingOutIcon className="w-5 text-text-50 transition-all group-focus:text-text-90" />
        )}
      </button>
    </div>
  );
}
