import { App } from "@apps";
import Apps from "@apps";
import { useSelected, useTitleBar } from "@utils/state";
import Layer from "@utils/layer";
import Draggable from "react-draggable";
import useWindow from "@hooks/useWindow";
import useMobile from "@hooks/useMobile";

export default function Shortcut(shortcut: {
  app: App;
  draggable?: boolean;
  onClick?: () => void;
  variant?: IconVariant;
}) {
  const mobile = useMobile();
  const { id, type, name } = shortcut.app;

  const { titlebar } = useTitleBar();
  const { selected, setSelected } = useSelected();
  const { open } = useWindow(id);

  const app = Apps[type];
  const width = mobile ? window.innerWidth / 4 : 100;
  const height = width;

  function onClick(shift: boolean) {
    if (mobile) {
      if (shortcut.onClick) return shortcut.onClick();
      open(shortcut.app);

      return;
    }

    if (shift) {
      if (selected.includes(id))
        setSelected([...selected.filter((s) => s !== id)]);
      else setSelected([...selected, id]);
    } else {
      if (selected.includes(id)) {
        if (shortcut.onClick) return shortcut.onClick();
        open(shortcut.app);
      }

      setSelected([id]);
    }
  }

  if (!app) return null;
  return (
    <Draggable
      defaultPosition={{ x: 0, y: 0 }}
      bounds={"#desktop"}
      grid={[width, height]}
      disabled={mobile || shortcut.draggable == false ? true : false}
      defaultClassNameDragging="opacity-50"
    >
      <button
        id={id}
        onClick={(e) => {
          onClick(e.shiftKey);
        }}
        style={{ zIndex: Layer.zIndex("shortcut"), width, height }}
        className={`shortcut flex flex-col items-center space-y-3 rounded-xl p-3 sm:space-y-2 ${
          mobile ? "" : selected.includes(id) ? "bg-text-10" : ""
        }`}
      >
        <AppIcon app={shortcut.app} variant={shortcut.variant} />
        <p className="max-w-full select-none text-[0.85rem] tracking-tight text-text-90">
          {name}
        </p>
      </button>
    </Draggable>
  );
}

interface IconProps {
  app: App;
  variant?: IconVariant;
}

export type IconVariant = "desktop" | "task" | "window" | "folder";

export function AppIcon({ variant, app }: IconProps) {
  const conf = Apps[app.type];

  if (!conf) return;
  return (
    <div
      className={`relative flex aspect-square select-none items-center justify-center ${
        variant == "desktop" ? "w-[50%] sm:w-[60%]" : ""
      }`}
    >
      {/* @ts-expect-error "type" field may vary */}
      <conf.Icon variant={variant} {...app} />
      {app.icon && variant !== "window" && (
        <img
          src={app.icon}
          alt={`${app.name} Favicon`}
          className={`absolute bottom-0 right-0 translate-x-1 translate-y-1 ${
            variant == "folder" ? "w-6" : "w-6"
          }`}
          draggable={false}
        />
      )}
    </div>
  );
}
