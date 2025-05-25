import { useState } from "react";
import { motion } from "framer-motion";
import { useFullscreen, usePage } from "@utils/state";
import Layer from "@utils/layer";
import useMobile from "@hooks/useMobile";

export default function Power() {
  const mobile = useMobile();

  const { setPage } = usePage();
  const { fullscreen } = useFullscreen();

  const [strokeWidth, setStrokeWidth] = useState<number>(2);

  async function boot() {
    try {
      fullscreen?.enter();
    } catch {}

    if (mobile) setPage("HOME");
    else setPage("LOGIN");
  }

  return (
    <motion.div
      variants={{
        shown: { opacity: 1 },
        hidden: { opacity: 0, pointerEvents: "none" },
      }}
      initial="shown"
      exit="hidden"
      style={Layer.style("power")}
      onClick={boot}
      transition={{ duration: 1.5, delay: 1, delayChildren: 0.1 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      <motion.button
        variants={{
          shown: { opacity: 1, scale: 1 },
          hidden: {
            opacity: [1, 1, 0],
            scale: [1, 1.5, 0],
          },
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onMouseOver={() => setStrokeWidth(2.5)}
        onMouseOut={() => setStrokeWidth(2)}
        onClick={boot}
        className="p-3 text-white-60 transition-all hover:text-white"
      >
        <svg
          className="w-16 transition-all"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
          />
        </svg>
      </motion.button>
    </motion.div>
  );
}
