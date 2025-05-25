import { App } from "@apps";

export function find(apps: App[], id: string): App | undefined {
  const all = apps.map(extract).flat();
  return all.find((app: App) => app.id === id);
}

function extract(app: App): App | App[] {
  if (app.type !== "folder") return app;
  return [app, ...app.apps.map(extract).flat()];
}
