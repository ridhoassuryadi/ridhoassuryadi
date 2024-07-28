import { GetStaticPaths, GetStaticProps } from "next";
import { createContext } from "react";
import { Config, readConfig, defaultConfig } from "@utils/config";
import { useRouter } from "next/router";
import { usePage } from "@utils/state";
import Seo from "@components/Seo";
import Router from "@components/Router";
import Head from "@components/Head";
import fs from "fs";

interface IndexProps {
  config: Config;
}

export const ConfigContext = createContext(defaultConfig);

export default function Index({ config }: IndexProps) {
  const router = useRouter();
  const { page } = usePage();

  return (
    <ConfigContext.Provider value={config}>
      {router.query.seo == "true" ? (
        <>
          <Seo />
          <Head />
        </>
      ) : (
        <>
          {page == "POWER" && <Seo />}
          <Head />
          <Router />
        </>
      )}
    </ConfigContext.Provider>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const config = await readConfig(fs);
  const routes = config.seo?.routes || [];

  return {
    paths: ["/", ...routes.map((route) => route.path)],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: { config: await readConfig(fs) } };
};
