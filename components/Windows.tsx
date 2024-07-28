import { useWindows } from "@utils/state";
import { AnimatePresence } from "framer-motion";
import Window from "@components/Window";

export default function Windows() {
  const { windows } = useWindows();

  return (
    <AnimatePresence>
      {windows.map((window) => (
        <Window key={window.id} {...window} />
      ))}
    </AnimatePresence>
  );
}
