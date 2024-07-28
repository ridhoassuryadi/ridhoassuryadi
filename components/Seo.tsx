import useConfig from "@hooks/useConfig";
import useRoute from "@hooks/useRoute";
import Apps, { App } from "@apps";
import { Fragment } from "react";
import { find } from "@utils/app";
import { useRouter } from "next/router";

interface SeoProps {
  apps?: App[];
  parent?: App;
  level?: number;
}

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const { route } = useRoute();

  const level = props.level ? props.level : route ? 0 : 1;
  const Wrapper = level == 0 ? Fragment : "div";
  const Heading = `h${level + 1}` as keyof JSX.IntrinsicElements;

  let { seo, apps } = useConfig();

  if (props.apps) apps = props.apps;
  else if (route) {
    const app = find(apps, route.id);
    if (app) apps = [app];
  }

  return (
    <Wrapper
      {...(level == 0
        ? {}
        : {
            id: level == 1 ? "seo" : undefined,
            className:
              level == 1
                ? router.query.seo == "true"
                  ? "prose prose-invert overflow-y-scroll max-h-screen"
                  : "sr-only"
                : undefined,
          })}
    >
      {level == 1 && (
        <>
          <nav>
            <ul>
              {seo?.routes?.map((route) => (
                <li key={route.path}>
                  <a href={route.path}>{route.title}</a>
                </li>
              ))}
            </ul>
          </nav>
          <h1>{route?.title || seo?.title?.default}</h1>
        </>
      )}
      {apps?.map((app) => {
        if (app.seo === false) return null;

        const config = Apps[app.type];
        const Component = "Seo" in config ? config.Seo : null;

        return (
          <Fragment key={app.id}>
            {!["link", "markdown", "image"].includes(app.type) &&
              level !== 0 && <Heading>{app.name}</Heading>}
            {props.parent &&
              "columns" in props.parent &&
              props.parent.columns && (
                <p>
                  {props.parent.columns.map((col) => {
                    if (!props.parent) return null;

                    const key = (
                      typeof col == "string" ? col : Object.keys(col)[0]
                    ) as keyof App;

                    const label =
                      typeof col == "string"
                        ? col
                        : (Object.values(col)[0] as string);

                    const value = key in app ? app[key]?.toString() : "";

                    if (key.toLowerCase() == "name") return null;
                    return (
                      <Fragment key={label}>
                        {label}: {value?.toString()} <br />
                      </Fragment>
                    );
                  })}
                </p>
              )}
            {Component && (
              // @ts-expect-error "type" field may vary
              <Component {...app} level={level} parent={props.parent} />
            )}
          </Fragment>
        );
      })}
    </Wrapper>
  );
}
