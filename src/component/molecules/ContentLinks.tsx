import type { VFC } from "react";

import { ContentLink } from "~/component/atoms/ContentLink";
import type { Content as ContentLinkProps } from "~/type/content.type";

type Props = {
  contents: ContentLinkProps[];
};

export const ContentLinks: VFC<Props> = ({ contents }) => {
  return (
    <ul className="grid gap-y-8">
      {contents.map((content) => {
        return <ContentLink {...content} key={content.name} />;
      })}
    </ul>
  );
};
