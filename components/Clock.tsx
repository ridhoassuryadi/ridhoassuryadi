import { useTitleBar } from "@utils/state";
import { useEffect, useState } from "react";
import useMobile from "@hooks/useMobile";

interface ClockProps {
  small?: boolean;
}

export default function Clock({ small }: ClockProps) {
  const mobile = useMobile();
  const { titlebar } = useTitleBar();

  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    tick();

    const time = setInterval(tick, 1000);

    return () => clearInterval(time);
  }, []);

  function tick() {
    setDate(formatDate());
    setTime(formatTime());
  }

  function formatDate() {
    return new Date().toLocaleDateString([], { dateStyle: "long" });
  }

  function formatTime() {
    const time = new Date().toLocaleTimeString([], {
      timeStyle: "short",
    });

    if (small) return time;
    return time.replace(/ AM| PM/gm, "");
  }

  if (small)
    return (
      <p
        className={`select-none text-sm text-text-70 ${
          !mobile ? "absolute left-1/2 -translate-x-1/2 " : ""
        }`}
      >
        {time}
      </p>
    );
  return (
    <div
      style={{ paddingTop: titlebar }}
      className="flex flex-col items-center justify-center"
    >
      <p className="mt-12 text-7xl font-extrabold">{time}</p>
      <p className="mt-2 text-text-70">{date}</p>
    </div>
  );
}
