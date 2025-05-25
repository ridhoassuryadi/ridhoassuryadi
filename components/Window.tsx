import { App } from "@apps";
import {
  useControlBar,
  useDragging,
  useTitleBar,
  useWindows,
} from "@utils/state";
import { motion } from "framer-motion";
import { Resizable } from "re-resizable";
import { useState } from "react";
import Apps from "@apps";
import Layer from "@utils/layer";
import Draggable, { ControlPosition } from "react-draggable";
import useMobile from "@hooks/useMobile";
import useWindow from "@hooks/useWindow";
import { AppIcon } from "./Shortcut";

export interface Window {
  id: string;
  type: App["type"];
  title: string;
  props: App;
  maximized: boolean;
  minimized: boolean;
  priority: number;
}

interface Size {
  width: number;
  height: number;
}

export interface WindowProps {
  size: Size;
  position: ControlPosition;
}

export default function Window({
  id,
  type,
  title,
  props,
  priority,
  maximized,
  minimized,
}: Window) {
  const app = Apps[type];
  const App = app ? app.default : null;

  const mobile = useMobile();

  const { windows } = useWindows();
  const { setDragging } = useDragging();
  const { titlebar } = useTitleBar();
  const { controlbar } = useControlBar();

  const { close, focus, maximize, minimize } = useWindow(id);

  const defaultSize = {
    width:
      props.window?.width ||
      ("width" in app.config && app?.config?.width) ||
      400,
    height:
      props.window?.height ||
      ("height" in app.config && app?.config?.height) ||
      400,
  };

  const defaultPosition = {
    x: 140 + 25 * windows.length,
    y: 40 + 25 * windows.length,
  };

  const [latest, setLatest] = useState<ControlPosition>(defaultPosition);
  const [position, setPosition] = useState<ControlPosition>(defaultPosition);
  const [size, setSize] = useState<Size>(defaultSize);

  if (!app || !App) return null;
  return (
    <Draggable
      disabled={mobile}
      position={maximized ? { x: 0, y: titlebar } : position}
      bounds={{
        top: titlebar,
        left: 0,
        right: window.innerWidth - size.width,
        bottom: window.innerHeight - size.height,
      }}
      onDrag={(event, pos) => {
        if (maximized) {
          if (!pos.deltaX && !pos.deltaY) return;

          const x = (event as MouseEvent).clientX || 200;

          setPosition({
            x: x - size.width * (x / window.innerWidth),
            y: titlebar,
          });

          return maximize();
        }

        setPosition({ x: pos.x, y: pos.y });
        setDragging(true);
      }}
      onStop={(event, pos) => {
        if (maximized) return;

        const x = (event as MouseEvent).clientX || 200;
        const y = (event as MouseEvent).clientY || 200;

        if (y < titlebar && x > 0 && x < window.innerWidth) {
          pos.y = titlebar;
          return maximize();
        }

        setPosition({ x: pos.x, y: pos.y });
        setLatest({ x: pos.x, y: pos.y });
        setDragging(false);
      }}
      handle=".handle"
      defaultClassName={`window-${id} ${
        minimized ? "pointer-events-none" : ""
      }`}
    >
      <div
        style={{ zIndex: Layer.zIndex("window") + priority }}
        className="fixed"
      >
        <Resizable
          minWidth={300}
          minHeight={150}
          size={
            maximized
              ? {
                  width: window.innerWidth,
                  height: innerHeight - titlebar - controlbar,
                }
              : size
          }
          defaultSize={defaultSize}
          onResizeStart={() => {
            setDragging(true);
            focus();
          }}
          onResize={(_1, direction, _2, delta) => {
            const dir = direction.toLowerCase();

            if (!dir.includes("top") && !dir.includes("left")) return;

            const pos = {
              x: dir.includes("left") ? latest.x - delta.width : latest.x,
              y: dir.includes("top") ? latest.y - delta.height : latest.y,
            };

            (
              document.querySelector(`.window-${id}`) as HTMLDivElement
            ).style.transform = `translate(${
              dir.includes("left") ? latest.x - delta.width : latest.x
            }px, ${
              dir.includes("top") ? latest.y - delta.height : latest.y
            }px)`;

            setPosition(pos);
          }}
          onResizeStop={(_1, direction, _3, delta) => {
            const dir = direction.toLowerCase();

            const pos = {
              x: dir.includes("left") ? latest.x - delta.width : latest.x,
              y: dir.includes("top") ? latest.y - delta.height : latest.y,
            };

            const newSize = {
              width: Number(size.width) + delta.width,
              height: Number(size.height) + delta.height,
            };

            if (newSize.width > window.innerWidth)
              newSize.width = window.innerWidth;
            if (newSize.height > window.innerHeight - titlebar)
              newSize.height = window.innerHeight - titlebar;

            if (pos.x + newSize.width > window.innerWidth)
              pos.x = window.innerWidth - newSize.width;
            if (pos.y + newSize.height > window.innerHeight)
              pos.y = window.innerHeight - newSize.height;

            if (pos.x < 0) pos.x = 0;
            if (pos.y < titlebar) pos.y = titlebar;

            setSize(newSize);
            setPosition(pos);
            setLatest(position);
            setDragging(false);
          }}
          handleWrapperClass={maximized ? "hidden" : ""}
        >
          <motion.div
            variants={
              mobile
                ? {
                    hidden: {
                      opacity: 0,
                      translateY: "10%",
                      transition: { ease: "easeOut", duration: 0.15 },
                    },
                    maximized: {
                      opacity: 1,
                      translateY: "0%",
                      transition: { ease: "easeIn", duration: 0.2 },
                    },
                  }
                : {
                    hidden: {
                      scale: 0.5,
                      opacity: 0,
                      transition: { ease: "easeOut", duration: 0.2 },
                    },
                    minimized: {
                      translateY: "50%",
                      scale: 0.5,
                      opacity: 0,
                      transition: { ease: "easeOut", duration: 0.2 },
                    },
                    shown: {
                      translateY: "0%",
                      scale: 1,
                      opacity: 1,
                      transition: { ease: "easeIn", duration: 0.2 },
                    },
                    maximized: {
                      scale: [0.8, 1],
                      opacity: [0, 1],
                      transition: { ease: "easeIn", duration: 0.2 },
                    },
                  }
            }
            initial="hidden"
            animate={
              minimized ? "minimized" : maximized ? "maximized" : "shown"
            }
            exit="hidden"
            className={`flex h-full w-full flex-col justify-end bg-background ${
              maximized
                ? ""
                : "overflow-hidden rounded-xl shadow-[0_0_7px_3px] shadow-shadow-10"
            }`}
          >
            {(!mobile ||
              !(
                "config" in app &&
                "mobileTitleBar" in app.config &&
                app.config?.mobileTitleBar == false
              )) && (
              <div className="flex h-12 w-full items-center justify-between px-4">
                <div
                  onDoubleClick={maximize}
                  onPointerDown={() => focus(true)}
                  className="handle flex h-full w-full cursor-pointer items-center"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-4">
                      <AppIcon app={props} variant="window" />
                    </div>
                    <p className="select-none text-text-80">{title}</p>
                  </div>
                </div>
                {!mobile ? (
                  <div className="flex space-x-2">
                    <button
                      onClick={maximize}
                      className="h-4 w-4 rounded-full bg-green-500 shadow shadow-shadow-10"
                    ></button>
                    <button
                      onClick={minimize}
                      className="h-4 w-4 rounded-full bg-yellow-500 shadow shadow-shadow-10"
                    ></button>
                    <button
                      onClick={close}
                      className="h-4 w-4 rounded-full bg-red-500 shadow shadow-shadow-10"
                    ></button>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            )}
            <div
              onPointerDown={() => focus(true)}
              className={`w-full bg-text-5 ${
                !mobile ||
                !(
                  "config" in app &&
                  "mobileTitleBar" in app.config &&
                  app.config?.mobileTitleBar == false
                )
                  ? "h-[calc(100%-3rem)]"
                  : "h-full"
              }`}
            >
              {/* @ts-expect-error "type" field may vary */}
              <App {...props} />
            </div>
          </motion.div>
        </Resizable>
      </div>
    </Draggable>
  );
}
