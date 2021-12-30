import "tailwindcss/tailwind.css";
import "~/styles/global.css";

import type { CustomAppProps } from "next/app";
import Head from "next/head";
import { memo } from "react";

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
        <title>datsukan</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default memo(App);
