import type { VFC } from "react";

import type { Work as Props } from "~/type/about.type";

export const WorkItem: VFC<Props> = ({ name, startedAt, endedAt, period, description }) => {
  return (
    <div className="flex relative flex-col items-center py-4 px-6 ml-10 space-y-4 text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800 rounded ring-1 ring-zinc-200 dark:ring-zinc-700 md:flex-row md:space-y-0">
      <div className="absolute -left-10 z-10 mt-2 w-5 h-5 bg-zinc-600 rounded-full -translate-x-2/4 md:mt-0"></div>

      <div className="flex-auto">
        <p className="text-xs opacity-90">{`${startedAt} ~ ${endedAt} ( ${period} )`}</p>
        <h3 className="mt-2 text-lg font-medium">{name}</h3>
        <p className="mt-2 text-sm whitespace-pre-wrap opacity-90">{description}</p>
      </div>
    </div>
  );
};
