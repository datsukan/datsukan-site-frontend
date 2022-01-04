// ページ共有のヘッダー
import { useRouter } from "next/router";
import type { VFC } from "react";

import { ColorThemeToggleButton } from "~/component/molecules/ColorThemeToggleButton";
import { AppHeader } from "~/component/organisms/AppHeader";
import { pageIndex, pages } from "~/data/pages";
import { usePageYOffsetTop } from "~/hooks/usePageYOffsetTop";

/**
 * @package
 */
export const Header: VFC = () => {
  const router = useRouter();

  const { pageYOffset } = usePageYOffsetTop();

  // AppHeaderの表示要否
  const isShowAppHeader = () => {
    // Rootのページ以外は常に表示する
    if (router.pathname !== pages[pageIndex.root].pathAlias) return true;

    return pageYOffset >= 140;
  };

  return (
    <div
      className={`flex items-center h-16 bg-white dark:bg-zinc-900 ${
        isShowAppHeader() ? "justify-between" : "justify-end"
      }`}
    >
      {isShowAppHeader() && <AppHeader />}
      <ColorThemeToggleButton />
    </div>
  );
};
