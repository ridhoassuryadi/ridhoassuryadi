import Layer from "@utils/layer";
import { useInbox } from "@utils/state";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Notification } from "@components/Notifications";
import { useNotifications } from "@utils/state";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { BellIcon } from "@heroicons/react/24/outline";
import useConfig from "@hooks/useConfig";

export default function Inbox() {
  const { inbox, setInbox } = useInbox();
  const { notifications } = useNotifications();
  const { translations } = useConfig();

  const inboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!inbox) return;

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [inbox]);

  function onPointerDown(e: MouseEvent) {
    if (!inboxRef.current || !e.target) return;
    if (inboxRef.current.contains(e.target as Node)) return;

    const button = document.querySelector("#btn-inbox");
    if (button?.contains(e.target as Node)) return;

    setInbox(false);
  }

  return (
    <AnimatePresence>
      {inbox && (
        <motion.div
          ref={inboxRef}
          style={Layer.style("inbox")}
          variants={{
            hidden: { opacity: 0, translateY: "-150%" },
            shown: { opacity: 1, translateY: "0%" },
          }}
          initial="hidden"
          animate="shown"
          exit="hidden"
          className="fixed right-5 top-16 min-w-[20rem] overflow-hidden rounded-[1.25rem] bg-background shadow-md shadow-shadow-30"
        >
          <div className="h-full w-full p-4">
            {notifications.length ? (
              <div className="relative mb-3 flex justify-between">
                <div className="flex select-none items-center space-x-2 text-text-50">
                  <BellIcon className="w-5" />
                  <p className="text-lg">
                    {translations?.notifications || "Notifications"}
                  </p>
                </div>
                <button onClick={() => setInbox(false)} className="btn-icon">
                  <XMarkIcon />
                </button>
              </div>
            ) : null}
            <div className="flex flex-col space-y-4">
              {notifications.map((notification) => (
                <Notification
                  key={notification.id}
                  animated={false}
                  {...notification}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
