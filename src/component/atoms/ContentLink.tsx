import { FaExternalLinkAlt } from "react-icons/fa";

import { NewTabLink } from "~/component/atoms/NewTabLink";

export type Props = {
  name: string;
  url: string;
  description: string;
  isExternalPage: boolean;
};

export const ContentLink = ({ name, url, description, isExternalPage }: Props) => {
  return (
    <li>
      <NewTabLink url={url}>
        <div className="flex items-center hover:underline">
          <h2 className="text-2xl font-bold">{name}</h2>
          {isExternalPage && <FaExternalLinkAlt className="ml-3" size={"1rem"} />}
        </div>
      </NewTabLink>
      <p className="mt-1 text-sm font-medium text-slate-500" role="note">
        {description}
      </p>
    </li>
  );
};
