import type { VFC } from "react";

import { PrivateItem } from "~/component/atoms/PrivateItem";
import { WorkItem } from "~/component/atoms/WorkItem";
import type { TimelineItem as Props } from "~/type/about.type";

export const TimelineItem: VFC<Props> = ({ type, name, startedAt, endedAt, period, description }) => {
  const isPrivate = type === "private";
  const time = generateTime(startedAt, endedAt, period);
  const circleSize = isPrivate ? 3 : 4;
  const circleColor = isPrivate ? "bg-zinc-400" : "bg-zinc-600";

  return (
    <div className="flex gap-10">
      <div className="flex flex-col gap-1 items-center">
        <div className="flex-1 w-0.5 border border-r-[1px] border-l-[1px] border-gray-200"></div>
        <div className="flex justify-center items-center w-4 h-4">
          <div className={`w-${circleSize} h-${circleSize} ${circleColor} rounded-full`}></div>
        </div>
        <div className="flex-1 w-0.5 border border-r-[1px] border-l-[1px] border-gray-200"></div>
      </div>
      {isPrivate ? (
        <PrivateItem name={name} time={time} />
      ) : (
        <WorkItem name={name} time={time} description={description ?? ""} />
      )}
    </div>
  );
};

const generateTime = (startedAt: string | undefined, endedAt: string | undefined, period: string | undefined) => {
  let time = "";
  if (startedAt) {
    time += `${startedAt} ~ `;
  }
  if (endedAt) {
    if (startedAt) {
      time += endedAt;
    } else {
      time += `~ ${endedAt}`;
    }
  }
  if (period) {
    time += ` ( ${period} )`;
  }

  return time;
};
