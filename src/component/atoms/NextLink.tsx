import Link from "next/link";
import type { ReactNode, VFC } from "react";

export type Props = {
  url: string;
  children: ReactNode;
};

export const NextLink: VFC<Props> = ({ url, children }) => {
  return (
    <Link href={url}>
      <a>{children}</a>
    </Link>
  );
};
