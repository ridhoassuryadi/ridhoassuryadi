import { useEffect } from "react";
import { useRouter } from "next/router";
import { usePage } from "@utils/state";
import useConfig from "./useConfig";
import useWindow from "./useWindow";

export default function useRoute(listen = false) {
  const router = useRouter();
  const config = useConfig();

  const { page } = usePage();
  const { open } = useWindow();

  const route = config.seo.routes.find((p) => p.path === router.asPath);

  useEffect(() => {
    if (!listen || !route || page !== "HOME") return;
    setTimeout(() => open(route.id), 500);
  }, [listen, page, route]);

  return { route };
}
