import "tailwindcss/tailwind.css";
import "~/styles/global.css";

import type { CustomAppProps } from "next/app";
import Head from "next/head";
import { memo } from "react";

import { siteConfig } from "~/site.config";

if (process.env.NODE_ENV === "development") {
  const MockServer = () => {
    return import("~/mocks/worker");
  };
  MockServer();
}

const App = ({ Component, pageProps }: CustomAppProps) => {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
        <link rel="icon shortcut" type="image/png" href={`${siteConfig.siteRoot}/images/avatar.jpg`} />
        <link rel="apple-touch-icon-precomposed" type="image/png" href={`${siteConfig.siteRoot}/images/avatar.jpg`} />
        <link rel="canonical" href={siteConfig.siteRoot} />
        <meta property="og:image" content={`${siteConfig.siteRoot}/images/avatar.jpg`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.description} />
        <meta name="description" content={siteConfig.description} />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default memo(App);
