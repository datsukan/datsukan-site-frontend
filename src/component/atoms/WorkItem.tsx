import type { VFC } from "react";

type Props = {
  name: string;
  time: string;
  description: string;
};

export const WorkItem: VFC<Props> = ({ name, time, description }) => {
  return (
    <div className="py-8">
      <div className="flex flex-col items-center py-4 px-6 space-y-4 text-zinc-900 dark:text-white bg-zinc-50 dark:bg-zinc-800 rounded-lg ring-1 ring-zinc-200 dark:ring-zinc-700 md:flex-row md:space-y-0">
        <div className="flex-auto">
          <p className="text-xs opacity-90">{time}</p>
          <h3 className="mt-2 text-lg font-medium">{name}</h3>
          <p className="mt-2 text-sm whitespace-pre-wrap opacity-90">{description}</p>
        </div>
      </div>
    </div>
  );
};
