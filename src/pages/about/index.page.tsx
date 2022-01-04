import type { CustomNextPage } from "next";
import Head from "next/head";
import { FixedLayout } from "src/layout";

import { WorkItems } from "~/component/molecules/WorkItems";
import { contact, description, outsideOfWork, works } from "~/data/about";
import { pageIndex, pages } from "~/data/pages";
import { siteConfig } from "~/site.config";

const Root: CustomNextPage = () => {
  const pageName = pages[pageIndex.about].name;

  return (
    <>
      <Head>{pageName && <title>{`${pageName} - ${siteConfig.title}`}</title>}</Head>
      <h1 className="mt-6 text-3xl font-black capitalize">{pageName}</h1>

      {/* 説明 */}
      <p className="mt-6 whitespace-pre-wrap">{description}</p>

      {/* 職務経歴 */}
      <h2 className="mt-20 text-2xl font-bold">Works</h2>
      <div className="mt-8">
        <WorkItems works={works} />
      </div>

      {/* 仕事以外 */}
      <h2 className="mt-20 text-2xl font-bold">Outside of work</h2>
      <p className="mt-6 whitespace-pre-wrap">{outsideOfWork}</p>

      {/* 連絡先 */}
      <h2 className="mt-20 text-2xl font-bold">Contact</h2>
      <p className="mt-6 whitespace-pre-wrap">{contact}</p>
    </>
  );
};

Root.getLayout = FixedLayout;

export default Root;
