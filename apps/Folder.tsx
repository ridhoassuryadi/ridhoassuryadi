import SeoRenderer from "@components/Seo";
import Shortcut, { AppIcon } from "@components/Shortcut";
import useWindow from "@hooks/useWindow";
import useMobile from "@hooks/useMobile";
import useBack from "@hooks/useBack";
import { App } from "@apps";
import { Config as FolderType } from "@apps/Folder";
import { Fragment, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { useWindows } from "@utils/state";

export interface Config {
  id: string;
  type: "folder";
  name: string;
  apps: App[];
  columns?:
    | (keyof App)[]
    | (Record<keyof App, string> & { mobile?: boolean })[];
  replace?: boolean;
  list?: boolean;
}

export default function FolderWindow(folder: Config) {
  const mobile = useMobile();

  const { isFocused, setTitle, open } = useWindow(folder.id);

  const [path, setPath] = useState<FolderType[]>([folder]);
  const [future, setFuture] = useState<FolderType[][]>([]);

  const current = path[path.length - 1];

  useBack(
    () => {
      back();
    },
    isFocused && path.length > 1,
  );

  useEffect(() => {
    setTitle(path[path.length - 1].name);
  }, [path]);

  function start(app: App) {
    if (
      app.type == "folder" &&
      (app.replace !== undefined
        ? app.replace
        : folder.replace !== undefined
          ? folder.replace
          : true)
    )
      return replace(app);

    open(app);
  }

  function replace(app: FolderType) {
    const update = [...path, app];

    setFuture([]);
    setPath(update);
  }

  function back() {
    setPath((path) => {
      if (path.length < 2) return path;

      const update = path.slice(0, path.length - 1);
      setFuture([path, ...future]);

      return update;
    });
  }

  function next() {
    if (!future.length) return;

    const next = future.shift();
    if (!next) return;

    setPath(next);
  }

  return (
    <div className="flex h-full w-full flex-col items-center">
      <AnimatePresence>
        {(path.length > 1 || future.length || mobile) && (
          <motion.div
            initial={{ scaleY: 0, height: 0 }}
            animate={{ scaleY: [0, 1], height: ["3rem", "3rem"] }}
            exit={{ scaleY: 0, height: 0 }}
            transition={{ ease: "linear", duration: 0.15 }}
            className="flex w-full origin-top items-center justify-center bg-background p-2"
          >
            <div className="flex h-full w-full items-center justify-between">
              <div className="flex items-center space-x-1">
                {path.map((folder, index) => (
                  <Fragment key={folder.id}>
                    {index !== 0 && (
                      <p className="cursor-default text-text-30">/</p>
                    )}
                    <button
                      onClick={() => {
                        setPath(path.slice(0, index + 1));
                      }}
                      className="rounded-lg px-2 py-1 text-text-70 transition-all hover:bg-text-10"
                    >
                      {folder.name}
                    </button>
                  </Fragment>
                ))}
              </div>
              <div className="flex items-center space-x-1">
                <button
                  onClick={back}
                  className={`btn-icon ${path.length > 1 ? "" : "opacity-50"}`}
                >
                  <ArrowLeftIcon />
                </button>
                <button
                  onClick={next}
                  className={`btn-icon ${future.length ? "" : "opacity-50"}`}
                >
                  <ArrowRightIcon />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {current.list ? (
        <div
          className={`h-full w-full max-w-full overflow-auto pb-1 ${
            !current.columns ? "pt-1" : ""
          }`}
        >
          <table className="w-full border-0">
            {current.columns && (
              <thead className="h-12 select-none border-0 bg-background">
                <tr>
                  <th className="sticky top-0 z-[2] border-0 bg-background"></th>
                  {current.columns.map((col, index) => (
                    <th
                      key={index}
                      className={`sticky top-0 border-0 bg-background text-left text-sm font-medium text-text-50 ${
                        typeof col === "object" && col.mobile == false && mobile
                          ? "hidden"
                          : ""
                      }`}
                    >
                      {typeof col == "string" ? col : Object.values(col)[0]}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {current.apps.map((app: App) => (
                <tr
                  key={app.id}
                  className="h-12 min-w-full cursor-pointer select-none hover:bg-text-5"
                  onClick={() => start(app)}
                >
                  <td className="w-0 pl-4 pr-3">
                    <div className="h-8 w-8">
                      <AppIcon app={app} variant="folder" />
                    </div>
                  </td>
                  {current.columns ? (
                    <>
                      {current.columns.map((col, index) => {
                        const key = (
                          typeof col == "string" ? col : Object.keys(col)[0]
                        ) as keyof App;

                        return (
                          <td
                            key={index}
                            className={`whitespace-nowrap pr-4 ${
                              key !== "name" ? "text-text-80" : ""
                            } ${
                              typeof col === "object" &&
                              col.mobile == false &&
                              mobile
                                ? "hidden"
                                : ""
                            }`}
                          >
                            {key in app ? app[key]?.toString() : ""}
                          </td>
                        );
                      })}
                    </>
                  ) : (
                    <>
                      <td className="text-tight pl-1">{app.name}</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="h-full w-full overflow-y-scroll p-4">
          <div className="flex flex-wrap justify-start">
            {current.apps.map((app: App) => (
              <Shortcut
                key={app.id}
                app={app}
                draggable={false}
                onClick={() => start(app)}
                variant="desktop"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Seo(config: Config & { level: number; parent?: App }) {
  return (
    <SeoRenderer parent={config} apps={config.apps} level={config.level + 1} />
  );
}

export function Icon({ id }: Config) {
  const { windows } = useWindows();

  const window = windows.find((window) => window.id === id);
  const open = window && !window.minimized;

  return (
    <img
      src={`/apps/folder/${open ? "open" : "closed"}.svg`}
      alt="Folder Icon"
      draggable={false}
    />
  );
}

export const config = {
  mobileTitleBar: false,
  width: 600,
  height: 400,
};
