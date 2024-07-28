type LayerItem =
  | string
  | {
      times: number;
      name: string;
    };

const order: LayerItem[] = [
  "desktop.inactive",
  "shortcut",
  "desktop.active",
  "desktop.rect",
  { times: 100, name: "window" },
  "notifications",
  "inbox",
  "titlebar",
  "taskbar.area",
  "taskbar",
  "controlbar",
  "login",
  "power",
];

export default class Layer {
  static zIndex(id: string) {
    let index = 2;

    for (let i = 0; i < order.length; i++) {
      const layer = order[i];

      if (typeof layer == "string") {
        index++;
        if (layer == id) return index;
      } else {
        index++;
        if (layer.name == id) return index;
        index += layer.times;
      }
    }

    console.warn("Unknown id", id);
    return 0;
  }

  static style(id: string) {
    return { zIndex: Layer.zIndex(id) };
  }
}
