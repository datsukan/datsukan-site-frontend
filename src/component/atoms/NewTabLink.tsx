import type { ReactNode, VFC } from "react";

export type Props = {
  url: string;
  children: ReactNode;
};

export const NewTabLink: VFC<Props> = ({ url, children }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
