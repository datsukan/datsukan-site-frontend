// ページ共通のフッター
import type { VFC } from "react";

/**
 * @package
 */
export const Footer: VFC = () => {
  return (
    <footer className="py-4 border-t">
      <div className="mx-2 max-w-screen-xl xl:mx-auto">
        <p className="text-sm text-center">&copy; 2021 datsukan</p>
      </div>
    </footer>
  );
};
