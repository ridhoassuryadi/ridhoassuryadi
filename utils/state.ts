import { atom, PrimitiveAtom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { FullScreenHandle } from "react-full-screen";
import { Notification } from "@components/Notifications";
import { Window } from "@components/Window";

type PageAtom = "POWER" | "LOGIN" | "HOME";
export const pageAtom = atom<PageAtom>(
  process.env.NODE_ENV == "development" ? "HOME" : "POWER",
);
export const usePage = useState("Page", pageAtom);

type ThemeAtom = "LIGHT" | "DARK";
export const themeAtom = atomWithStorage<ThemeAtom>("theme", "DARK");
export const useTheme = useState("Theme", themeAtom);

type ScreenAtom = { width: number; height: number };
export const screenAtom = atom<ScreenAtom>({ width: 0, height: 0 });
export const useScreen = useState("Screen", screenAtom);

export const fullscreenAtom = atom<FullScreenHandle | null>(null);
export const useFullscreen = useState("Fullscreen", fullscreenAtom);

export const windowsAtom = atom<Window[]>([]);
export const useWindows = useState("Windows", windowsAtom);

export const selectedAtom = atom<string[]>([]);
export const useSelected = useState("Selected", selectedAtom);

export const inboxAtom = atom<boolean>(false);
export const useInbox = useState("Inbox", inboxAtom);

export const notificationsAtom = atomWithStorage<Notification[]>(
  "notifications",
  [],
);
export const useNotifications = useState("Notifications", notificationsAtom);

export const titleBarAtom = atom<number>(0);
export const useTitleBar = useState("TitleBar", titleBarAtom);

export const controlBarAtom = atom<number>(0);
export const useControlBar = useState("ControlBar", controlBarAtom);

export const backButtonAtom = atom<(() => void) | null>(null);
export const useBackButton = useState("BackButton", backButtonAtom);

export const draggingAtom = atom<boolean>(false);
export const useDragging = useState("Dragging", draggingAtom);

export const maximizedAtom = atom((get) => {
  const windows = get(windowsAtom)
    .filter((w) => !w.minimized)
    .sort((a, b) => b.priority - a.priority);

  if (!windows.length) return undefined;

  const focused = windows[0];
  if (!windows[0].maximized) return undefined;

  return focused;
});

function useState<TName extends string, TType>(
  name: TName,
  atom: PrimitiveAtom<TType>,
) {
  return () => {
    type State = {
      [key in Lowercase<TName>]: typeof get;
    } & {
      [key in `set${TName}`]: typeof set;
    };

    const [get, set] = useAtom(atom);
    const object: any = {};

    object[name.toLowerCase()] = get;
    object[`set${name}`] = set;

    return object as State;
  };
}
