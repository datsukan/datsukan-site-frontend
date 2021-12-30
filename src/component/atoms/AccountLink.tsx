import { FaExternalLinkAlt } from "react-icons/fa";

import { NewTabLink } from "~/component/atoms/NewTabLink";

export type Props = {
  name: string;
  url: string;
};

export const AccountLink = ({ name, url }: Props) => {
  return (
    <li className="mt-2 text-sky-600 hover:underline">
      <NewTabLink url={url}>
        <div className="flex items-center">
          {name}
          <FaExternalLinkAlt className="ml-1" size={"0.9rem"} />
        </div>
      </NewTabLink>
    </li>
  );
};
