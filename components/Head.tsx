import Head from "next/head";
import useConfig from "@hooks/useConfig";
import useRoute from "@hooks/useRoute";

export default function CustomHead() {
  const { route } = useRoute();
  const { seo, pirsch } = useConfig();

  const title = route?.title
    ? `${route?.title} ${seo.title.suffix}`
    : seo?.title.default;

  const description = route?.description || seo.description;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {process.env.NODE_ENV !== "development" &&
        pirsch &&
        pirsch.code &&
        pirsch.enabled && (
          <script
            type="text/javascript"
            src="https://api.pirsch.io/pirsch-extended.js"
            id="pirschextendedjs"
            data-code={pirsch.code}
            defer
          ></script>
        )}
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href={`/favicon/favicon-96x96.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`/favicon/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`/favicon/favicon-16x16.png`}
      />
    </Head>
  );
}
