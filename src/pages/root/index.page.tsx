import type { CustomNextPage } from "next";
import { FixedLayout } from "src/layout";

import { Avatar } from "~/component/atoms/Avatar";
import { AccountLinks } from "~/component/molecules/AccountLinks";
import { accounts, avatarUrl, description, name } from "~/data/profile";

const Root: CustomNextPage = () => {
  return (
    <div>
      <div className="mt-24">
        <Avatar imageUrl={avatarUrl} />
      </div>
      <p className="mt-6 text-3xl font-black">{name}</p>
      <p className="mt-4 font-medium text-slate-400">{description}</p>
      <div className="mt-8">
        <AccountLinks accounts={accounts} />
      </div>
    </div>
  );
};

Root.getLayout = FixedLayout;

export default Root;
