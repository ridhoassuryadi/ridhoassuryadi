import { MouseEvent as ReactMouseEvent, useEffect, useState } from "react";
import { useSelected, useTitleBar } from "@utils/state";
import Shortcuts from "@components/Shortcuts";
import Clock from "@components/Clock";
import Layer from "@utils/layer";
import useMobile from "@hooks/useMobile";

interface Position {
  x: number;
  y: number;
}

interface Rect {
  top: number;
  left: number;
  width: number;
  height: number;
}

export default function Desktop() {
  const mobile = useMobile();

  const { setSelected } = useSelected();
  const { titlebar } = useTitleBar();

  const [start, setStart] = useState<Position | null>(null);
  const [rect, setRect] = useState<Rect | null>(null);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    window.addEventListener("blur", onBlur);
    return () => window.removeEventListener("blur", onBlur);
  }, []);

  useEffect(() => {
    document.body.addEventListener("mouseleave", onBlur);
    return () => document.body.removeEventListener("mouseleave", onBlur);
  }, []);

  useEffect(() => {
    if (dragging) return;
    setRect(null);
  }, [dragging]);

  function onBlur() {
    setDragging(false);
  }

  function onPointerDown(e: ReactMouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();

    setStart({ x: e.clientX, y: e.clientY });
    setDragging(true);
    setSelected([]);
  }

  function onPointerUp(e: ReactMouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    setDragging(false);
  }

  function onPointerMove(e: ReactMouseEvent<HTMLDivElement, MouseEvent>) {
    if (!start) return;

    const current = { x: e.clientX, y: e.clientY };

    let top = start.y;
    let left = start.x;
    let width = current.x - start.x;
    let height = current.y - start.y;

    if (current.x < start.x) {
      left = current.x;
      width = start.x - current.x;
    }

    if (current.y < start.y) {
      top = current.y;
      height = start.y - current.y;
    }

    const shortcuts = Array.from(document.querySelectorAll(".shortcut"));
    const selected: string[] = [];

    shortcuts.forEach((shortcut) => {
      const rect = shortcut.getBoundingClientRect();

      if (
        rect.top < top + height &&
        rect.top + rect.height > top &&
        rect.left < left + width &&
        rect.left + rect.width > left
      )
        selected.push(shortcut.id);
    });

    setSelected(selected);

    setRect({
      top,
      left,
      width,
      height,
    });
  }

  return (
    <div
      id="desktop"
      style={{
        top: titlebar,
        height: mobile ? "calc(100vh - 2.5rem)" : "100vh",
      }}
      className={`relative flex w-screen flex-col justify-start overflow-y-auto overflow-x-hidden ${
        mobile ? "" : "p-8 pr-2"
      }`}
    >
      {mobile && <Clock />}
      <Shortcuts />
      <div
        onPointerDown={mobile ? undefined : onPointerDown}
        onPointerUp={mobile ? undefined : onPointerUp}
        onPointerMove={dragging ? onPointerMove : undefined}
        style={{
          zIndex: dragging
            ? Layer.zIndex("desktop.active")
            : Layer.zIndex("desktop.inactive"),
        }}
        className="absolute inset-0 !m-0"
      >
        {rect && (
          <div
            style={{ ...rect, zIndex: Layer.zIndex("desktop.rect") }}
            className="fixed border-2 border-main-30 bg-main-20"
          ></div>
        )}
      </div>
    </div>
  );
}
