export interface Config {
  id: string;
  type: "image";
  name: string;
  path?: string;
  alt?: string;
}

export default function ImageWindow(props: Config) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center overflow-auto">
      <div
        style={{
          backgroundImage: `url(${props.path})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-full w-full"
      ></div>
    </div>
  );
}

export function Icon() {
  return (
    <img
      src="/apps/image.svg"
      alt="Image Icon"
      draggable={false}
      className="h-full w-full drop-shadow"
    />
  );
}

export const config = {
  fullscreen: true,
  width: 1000,
  height: 600,
};
