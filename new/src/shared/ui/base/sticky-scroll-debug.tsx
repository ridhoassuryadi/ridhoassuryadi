"use client";
import React from "react";
import { useScroll } from "motion/react";

export function StickyScrollDebug({ threshold = 0.05 }: { threshold?: number }) {
  const { scrollYProgress } = useScroll({ target: undefined });
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    const unsub = scrollYProgress.on("change", (latest) => {
      setVal(latest);
    });
    return () => unsub();
  }, [scrollYProgress]);
  return (
    <div style={{ position: "fixed", top: 0, left: 0, zIndex: 9999, background: "#222", color: "#fff", padding: 8 }}>
      <div>scrollYProgress: {val.toFixed(3)}</div>
      <div>threshold: ±{threshold}</div>
    </div>
  );
}
