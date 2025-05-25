import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowPathIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import useWindow from "@hooks/useWindow";
import { motion, useAnimation } from "framer-motion";
import { useDragging } from "@utils/state";
import { useEffect, useRef, useState } from "react";
import useBack from "@hooks/useBack";
import { IconVariant } from "@components/Shortcut";

export interface Config {
  id: string;
  type: "link";
  name: string;
  url: string;
  external?: boolean;
  favicon?: {
    circle?: boolean;
    background?: string;
    padding?: number;
  };
}

export default function LinkWindow(link: Config) {
  const animation = useAnimation();

  const frameRef = useRef<HTMLIFrameElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { focus, isFocused } = useWindow(link.id);
  const { dragging } = useDragging();

  const [key, setKey] = useState(0);
  const [input, setInput] = useState(link.url);
  const [loaded, setLoaded] = useState<boolean>(false);

  const [url, setUrl] = useState(link.url);
  const [history, setHistory] = useState<string[]>([]);
  const [future, setFuture] = useState<string[]>([]);

  useBack(
    () => {
      back();
    },
    isFocused && history.length > 0,
  );

  useEffect(() => {
    animation.start("refresh");
  }, [url, key]);

  function onEnter() {
    setHistory([...history, url]);

    const isURL = input.match(
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/g,
    );
    const isHost = input.match(/[a-z].*\.[a-z].*(\.[a-z].*)?/g);
    let newUrl = "";

    if (isURL) newUrl = input;
    else if (isHost)
      newUrl = `https://${input.split(".").length > 2 ? "" : "www."}${input}`;
    else {
      const google = new URL("https://www.google.com/search?igu=1");
      google.searchParams.set("q", input);
      newUrl = google.toString();
    }

    setInput(newUrl);
    setUrl(newUrl);

    if (!inputRef.current) return;
    inputRef.current.blur();
  }

  function onLoad() {
    if (!frameRef.current || !inputRef.current) return;
    setInput(frameRef.current.src);
    setLoaded(true);
  }

  function back() {
    if (!history.length) return;

    const last = history.pop();
    if (!last) return;

    setFuture([url, ...future]);
    setUrl(last);
  }

  function next() {
    if (!future.length) return;

    const next = future.shift();
    if (!next) return;

    setHistory([...history, url]);
    setUrl(next);
  }

  function refresh() {
    setKey(key + 1);
  }

  return (
    <>
      {!isFocused && (
        <div onClick={() => focus()} className="absolute h-full w-full"></div>
      )}
      <div className="flex h-full w-full flex-col">
        <div className="flex min-h-14 w-full items-center justify-between space-x-2 bg-background px-2">
          <div className="flex w-full items-center space-x-1">
            <button
              onClick={back}
              className={`btn-icon ${history.length ? "" : "opacity-50"}`}
            >
              <ArrowLeftIcon />
            </button>
            <button
              onClick={next}
              className={`btn-icon ${future.length ? "" : "opacity-50"}`}
            >
              <ArrowRightIcon />
            </button>
            <button onClick={refresh} className="btn-icon">
              <motion.div
                animate={animation}
                variants={{ refresh: { rotate: [0, 360] } }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <ArrowPathIcon />
              </motion.div>
            </button>
            <input
              type="text"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key == "Enter" && onEnter()}
              className="w-full rounded-full border-none bg-shadow-10 py-2 text-sm text-text-70 focus:text-text"
            />
          </div>
          <button onClick={() => window.open(url)} className="btn-icon">
            <ArrowTopRightOnSquareIcon />
          </button>
        </div>
        <iframe
          src={url}
          ref={frameRef}
          key={key}
          onLoad={onLoad}
          className={`h-full w-full ${dragging ? "pointer-events-none" : ""}`}
          style={{
            display: loaded ? "block" : "none",
            pointerEvents: "initial",
          }}
          referrerPolicy="no-referrer"
          sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </div>
    </>
  );
}

export function Seo(config: Config) {
  return (
    <a
      href={
        config.url.endsWith("!")
          ? config.url.slice(0, config.url.length - 1)
          : config.url
      }
    >
      {config.name}
    </a>
  );
}

interface IconProps extends Omit<Partial<Config>, "type"> {
  type: string;
  variant?: IconVariant;
  icon?: string;
}

export function Icon(link: IconProps) {
  const url = link.url ? new URL(link.url) : null;

  return (
    <>
      <img src="/apps/link.svg" alt="Link Icon" draggable={false} />
      {!link.icon && url && link.variant !== "window" && (
        <img
          src={`https://www.google.com/s2/favicons?domain=${url.hostname}&sz=${50}`}
          alt={`${url.hostname} Favicon`}
          style={{
            ...(link?.favicon?.background
              ? { background: link.favicon.background }
              : {}),
            ...(link?.favicon?.padding
              ? { padding: link.favicon.padding }
              : {}),
          }}
          className={`absolute bottom-0 right-0 translate-x-1 translate-y-1 ${
            link?.favicon?.circle ? "rounded-full" : ""
          } ${link.variant == "folder" ? "w-4" : "w-6"}`}
          draggable={false}
        />
      )}
    </>
  );
}

export const config = {
  fullscreen: true,
  mobileTitleBar: false,
  width: 1100,
  height: 700,
};
