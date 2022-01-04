import { useRouter } from "next/router";

import { Avatar } from "~/component/atoms/Avatar";
import { NextLink } from "~/component/atoms/NextLink";
import { pageIndex, pages } from "~/data/pages";
import { avatarUrl, name } from "~/data/profile";

export const AppHeader = () => {
  const router = useRouter();

  // パンくずの表示文字列
  const generateBreadcrumbTrail = () => {
    const Root = () => {
      return <NextLink url={pages[pageIndex.root].path}>{name}</NextLink>;
    };

    // Rootのページは常にパス無し
    if (router.pathname === pages[pageIndex.root].pathAlias) return <Root />;

    // 表示しているページに対応するパンくずリストを返す
    for (const page of pages) {
      if (router.pathname == page.path) {
        const Child = () => {
          return <NextLink url={page.path}>{page.name}</NextLink>;
        };
        return (
          <>
            <Root /> / <Child />
          </>
        );
      }
    }

    // 該当がなければパス無し
    return <Root />;
  };

  return (
    <div className="flex items-center">
      <NextLink url={pages[pageIndex.root].path}>
        <div className="flex items-center">
          <Avatar imageUrl={avatarUrl} size={26} />
        </div>
      </NextLink>
      <div className="ml-2 font-medium">{generateBreadcrumbTrail()}</div>
    </div>
  );
};
