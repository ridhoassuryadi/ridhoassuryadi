import Apps, { App } from "@apps";
import { useWindows } from "@utils/state";
import { isMobile } from "@hooks/useMobile";
import { find } from "@utils/app";
import useConfig from "./useConfig";

export default function useWindow(id?: string) {
  const { apps } = useConfig();
  const { windows, setWindows } = useWindows();

  const isFocused = windows.find((w) => w.id == id)?.priority == windows.length;

  async function open(app: App | string) {
    if (typeof app === "string") return openId(app);

    if (app.type === "link" && app.external)
      return window.open(app.url, "_blank");

    const existing = windows.find((w) => w.id === app.id);
    if (existing) return focus(false, existing.id);

    const config = Apps[app.type];

    setWindows([
      ...windows,
      {
        id: app.id,
        type: app.type,
        props: app,
        title: app.name,
        priority: windows.length + 1,
        maximized: isMobile()
          ? true
          : app.window?.fullscreen !== undefined
            ? app.window.fullscreen
            : "fullscreen" in config?.config &&
                config?.config.fullscreen == true
              ? true
              : false,
        minimized: false,
      },
    ]);
  }

  function close() {
    if (!id) return;

    const update = windows.filter((w) => w.id !== id);
    setWindows(update);
  }

  function focus(click = false, override?: string) {
    if (!id && !override) return;

    const index = windows.findIndex((w) => w.id === (override || id));
    const current = windows[index].priority;
    if (click && current == windows.length) return;

    const update = windows.map((w) => ({
      ...w,
      ...(w.priority == current
        ? { priority: windows.length, minimized: false }
        : w.priority > current
          ? { priority: w.priority - 1 }
          : {}),
    }));

    setWindows([...update]);
  }

  function maximize() {
    if (!id) return;

    const index = windows.findIndex((w) => w.id === id);
    windows[index].maximized = !windows[index].maximized;
    setWindows([...windows]);
    focus();
  }

  function minimize() {
    if (!id) return;

    const index = windows.findIndex((w) => w.id === id);
    windows[index].minimized = !windows[index].minimized;
    setWindows([...windows]);

    if (!windows[index].minimized) focus();
  }

  function setTitle(title: string) {
    if (!id) return;

    const index = windows.findIndex((w) => w.id === id);
    windows[index].title = title;
    setWindows([...windows]);
  }

  function openId(id: string) {
    const app = find(apps, id);
    if (!app) return;

    open(app);
  }

  return {
    open,
    close,
    focus,
    maximize,
    minimize,
    setTitle,
    isFocused,
  };
}
