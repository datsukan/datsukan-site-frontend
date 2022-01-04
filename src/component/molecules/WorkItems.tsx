import type { VFC } from "react";

import { WorkItem } from "~/component/atoms/WorkItem";
import type { Works } from "~/type/about.type";

type Props = {
  works: Works;
};

export const WorkItems: VFC<Props> = ({ works }) => {
  // 降順にソート
  works = works.sort((a, b) => {
    return b.id - a.id;
  });

  return (
    <div className="grid gap-y-8 ml-6 border-l-2">
      {works.sort().map((work) => {
        return <WorkItem {...work} key={work.id} />;
      })}
    </div>
  );
};
