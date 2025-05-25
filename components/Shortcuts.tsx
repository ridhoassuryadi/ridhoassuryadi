import useConfig from "@hooks/useConfig";
import Shortcut from "@components/Shortcut";
import useMobile from "@hooks/useMobile";

export default function Shortcuts() {
  const mobile = useMobile();
  const { apps } = useConfig();

  return (
    <div
      className={`${
        mobile
          ? "mt-14 grid w-screen grid-cols-4 px-4"
          : "flex max-h-full w-min flex-col flex-wrap items-center"
      }`}
    >
      {apps.map((app) => (
        <Shortcut key={app.id} app={app} variant="desktop" />
      ))}
    </div>
  );
}
