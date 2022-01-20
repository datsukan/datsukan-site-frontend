import type { CustomNextPage } from "next";
import Head from "next/head";
import { FixedLayout } from "src/layout";

import { Avatar } from "~/component/atoms/Avatar";
import { ContentLinks } from "~/component/molecules/ContentLinks";
import { contents } from "~/data/contents";
import { pageIndex, pages } from "~/data/pages";
import { avatarUrl, description, name } from "~/data/profile";
import { siteConfig } from "~/site.config";

const Root: CustomNextPage = () => {
  const pageName = pages[pageIndex.root].name;

  return (
    <>
      <Head>
        {pageName && <title>{`${pageName} - ${siteConfig.title}`}</title>}
        <meta name="description" content={siteConfig.descriptions.root} />
      </Head>
      <div>
        <div className="mt-12">
          <Avatar imageUrl={avatarUrl} size={96} />
        </div>
        <h1 className="mt-6 text-3xl font-black">{name}</h1>
        <p className="mt-4 font-medium text-slate-500">{description}</p>
        <hr className="mt-8" />
        <div className="mt-8">
          <ContentLinks contents={contents} />
        </div>
      </div>
    </>
  );
};

Root.getLayout = FixedLayout;

export default Root;
