import type { VFC } from "react";

import { TimelineItem } from "~/component/atoms/TimelineItem";
import type { TimelineItems as TimelineItemsType } from "~/type/about.type";

type Props = {
  timelineItems: TimelineItemsType;
};

export const TimelineItems: VFC<Props> = ({ timelineItems }) => {
  // 降順にソート
  timelineItems = timelineItems.sort((a, b) => {
    return a.id - b.id;
  });

  return (
    <>
      {timelineItems.sort().map((timelineItem) => {
        return <TimelineItem {...timelineItem} key={timelineItem.id} />;
      })}
    </>
  );
};
