import type { ReactNode } from "react";

export type Props = {
  url: string;
  children: ReactNode;
};

export const NewTabLink = ({ url, children }: Props) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
