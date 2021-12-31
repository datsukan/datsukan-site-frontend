import type { VFC } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

import { NewTabLink } from "~/component/atoms/NewTabLink";
import type { Content as Props } from "~/type/content.type";

export const ContentLink: VFC<Props> = ({ name, url, description, isExternalPage }) => {
  return (
    <li>
      <NewTabLink url={url}>
        <div className="flex items-center hover:underline">
          <h2 className="text-2xl font-bold">{name}</h2>
          {isExternalPage && <FaExternalLinkAlt className="ml-3" size={"1rem"} />}
        </div>
      </NewTabLink>
      <p className="mt-2 text-sm font-medium text-slate-500" role="note">
        {description}
      </p>
    </li>
  );
};
