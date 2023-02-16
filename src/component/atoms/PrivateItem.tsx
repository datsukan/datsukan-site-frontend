import type { VFC } from "react";

type Props = {
  name: string;
  time: string;
};

export const PrivateItem: VFC<Props> = ({ name, time }) => {
  return (
    <div className="py-6">
      <div className="flex flex-col text-zinc-900 dark:text-white md:flex-row md:space-y-0">
        <div className="flex-auto">
          <p className="text-xs opacity-90">{time}</p>
          <h3 className="mt-2">{name}</h3>
        </div>
      </div>
    </div>
  );
};
