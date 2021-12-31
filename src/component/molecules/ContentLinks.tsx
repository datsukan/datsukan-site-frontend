import type { VFC } from "react";

import type { Props as ContentLinkProps } from "~/component/atoms/ContentLink";
import { ContentLink } from "~/component/atoms/ContentLink";

type Props = {
  contents: ContentLinkProps[];
};

export const ContentLinks: VFC<Props> = ({ contents }) => {
  return (
    <ul className="grid gap-y-6">
      {contents.map((content) => {
        return <ContentLink {...content} key={content.name} />;
      })}
    </ul>
  );
};
