import { maximizedAtom, useWindows } from "@utils/state";
import Apps from "@apps";
import { AnimatePresence, motion } from "framer-motion";
import Layer from "@utils/layer";
import useWindow from "@hooks/useWindow";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import useMobile from "@hooks/useMobile";
import { AppIcon } from "./Shortcut";

export default function TaskBar() {
  const mobile = useMobile();

  const { windows } = useWindows();
  const { open } = useWindow();

  const [maximized] = useAtom(maximizedAtom);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (maximized) return;
    setHover(false);
  }, [maximized]);

  if (mobile) return null;
  return (
    <>
      {maximized && (
        <div
          onPointerOver={() => setHover(true)}
          onPointerLeave={() => setHover(false)}
          style={Layer.style("taskbar.area")}
          className="fixed inset-x-0 bottom-0 h-8"
        ></div>
      )}
      <motion.div
        initial="hidden"
        variants={{
          hidden: {
            translateY: "150%",
            translateX: "-50%",
            opacity: 0,
          },
          shown: {
            translateY: "0%",
            translateX: "-50%",
            opacity: 1,
          },
        }}
        animate={
          (!maximized || hover) && windows.length > 1 ? "shown" : "hidden"
        }
        style={Layer.style("taskbar")}
        onPointerOver={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
        className="fixed bottom-6 left-1/2 overflow-hidden rounded-2xl bg-black-10 shadow-md shadow-shadow-20 backdrop-blur-md"
      >
        <div className="flex h-full w-full items-center bg-text-10 p-2">
          <AnimatePresence>
            {windows.map(({ id, type, props }, index) => {
              const app = Apps[type];

              if (!app) return null;
              return (
                <motion.button
                  key={id}
                  initial={{ width: "0rem", scale: 0, marginLeft: 0 }}
                  animate={{
                    width: ["0rem", "3.5rem", "3.5rem"],
                    scale: [0, 0, 1],
                    marginLeft: index ? ["0.5rem", "0.5rem", "0.5rem"] : 0,
                  }}
                  exit={{
                    width: ["3.5rem", "3.5rem", "0rem"],
                    scale: [1, 0, 0],
                    marginLeft: ["0.5rem", "0.5rem", "0rem"],
                  }}
                  transition={{ duration: 0.3 }}
                  onClick={() => open(props)}
                  className="rounded-xl p-2 hover:bg-white-10"
                >
                  <AppIcon app={props} variant="task" />
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}
