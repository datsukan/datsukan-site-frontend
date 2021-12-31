import type { CustomNextPage } from "next";
import { FixedLayout } from "src/layout";

import { Avatar } from "~/component/atoms/Avatar";
import { ContentLinks } from "~/component/molecules/ContentLinks";
import { contents } from "~/data/contents";
import { avatarUrl, description, name } from "~/data/profile";

const Root: CustomNextPage = () => {
  return (
    <div>
      <div className="mt-24">
        <Avatar imageUrl={avatarUrl} />
      </div>
      <h1 className="mt-6 text-3xl font-black">{name}</h1>
      <p className="mt-4 font-medium text-slate-500">{description}</p>
      <hr className="mt-8" />
      <div className="mt-8">
        <ContentLinks contents={contents} />
      </div>
    </div>
  );
};

Root.getLayout = FixedLayout;

export default Root;
