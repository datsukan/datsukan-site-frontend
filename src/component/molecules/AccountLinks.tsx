import type { VFC } from "react";

import type { Props as AccountLinkProps } from "~/component/atoms/AccountLink";
import { AccountLink } from "~/component/atoms/AccountLink";

type Props = {
  accounts: AccountLinkProps[];
};

export const AccountLinks: VFC<Props> = ({ accounts }) => {
  return (
    <ul>
      {accounts.map((account) => {
        return <AccountLink {...account} key={account.name} />;
      })}
    </ul>
  );
};
