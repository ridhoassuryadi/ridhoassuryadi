import useWindow from "@hooks/useWindow";
import useConfig from "@hooks/useConfig";
import Layer from "@utils/layer";
import { App } from "@apps";
import { useNotifications } from "@utils/state";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export interface Notification {
  id: string;
  icon: string;
  title: string;
  description: string;
  click?: string;
  read: boolean;
}

export default function Notifications() {
  const [shown, setShown] = useState<Notification[]>([]);
  const { notifications, setNotifications } = useNotifications();

  useEffect(() => {
    if (!notifications) return;
    const unread = notifications.filter((n) => !n.read);
    if (!unread.length) return;

    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    setShown([...shown, ...unread]);

    setTimeout(() => {
      setShown((prev) =>
        prev.filter((n) => !unread.map((n) => n.id).includes(n.id)),
      );
    }, 7000);
  }, [notifications]);

  return (
    <div
      style={Layer.style("notifications")}
      className="fixed right-5 top-16 flex flex-col space-y-6"
    >
      <AnimatePresence>
        {shown.map((notification) => (
          <Notification key={notification.id} {...notification} />
        ))}
      </AnimatePresence>
    </div>
  );
}

interface NotificationProps extends Notification {
  animated?: boolean;
}

export function Notification({
  icon,
  title,
  description,
  animated,
  click,
}: NotificationProps) {
  const { open } = useWindow();

  function onClick() {
    if (!click) return;
    open(click);
  }

  return (
    <motion.div
      onClick={onClick}
      variants={{
        hidden: { translateY: "-150%", opacity: 0 },
        shown: { translateY: "0%", opacity: 1 },
      }}
      initial={animated == false ? "shown" : "hidden"}
      animate="shown"
      exit={animated == false ? "shown" : "hidden"}
      transition={{ ease: "linear", duration: 0.2 }}
      className={`w-[20rem] select-none overflow-hidden rounded-xl bg-background ${
        animated == false ? "" : "shadow-md shadow-shadow-10"
      } ${click ? "cursor-pointer" : ""}`}
    >
      <div
        className={`flex h-full w-full items-center space-x-4 bg-text-10 p-4`}
      >
        <div className="flex min-w-8 items-center">
          <img src={icon} alt={title} className="h-8" />
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="text-lg font-semibold text-text">{title}</p>
          <p className="text-sm text-text-70">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
