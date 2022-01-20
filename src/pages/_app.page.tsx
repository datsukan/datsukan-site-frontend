import "tailwindcss/tailwind.css";
import "~/styles/global.css";

import type { CustomAppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
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
        <link rel="icon shortcut" href="favicon.ico" />
        <link rel="apple-touch-icon-precomposed" type="image/png" href={`${siteConfig.siteRoot}/images/avatar.jpg`} />
        <link rel="canonical" href={siteConfig.siteRoot} />
        <meta property="og:image" content={`${siteConfig.siteRoot}/images/avatar.jpg`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.descriptions.root} />
      </Head>
      <ThemeProvider attribute="class">{getLayout(<Component {...pageProps} />)}</ThemeProvider>
    </>
  );
};

export default memo(App);
