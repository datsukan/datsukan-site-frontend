// ページ共有のヘッダー
import type { VFC } from "react";

import { ColorThemeToggleButton } from "~/component/molecules/ColorThemeToggleButton";

/**
 * @package
 */
export const Header: VFC = () => {
  return (
    <div className="flex flex-row-reverse items-center h-16">
      <ColorThemeToggleButton />
    </div>
  );
};
