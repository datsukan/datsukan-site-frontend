import type { CustomLayout } from "next";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

/**
 * @package
 */
export const FixedLayout: CustomLayout = (page) => {
  return (
    <div className="tracking-tight text-zinc-900 dark:text-white bg-white dark:bg-zinc-900">
      <div className="flex flex-col px-4 mx-auto max-w-screen-md min-h-screen">
        <header>
          <Header />
        </header>

        <main className="flex-1">
          <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
        </main>
      </div>

      <footer className="mt-24">
        <Footer />
      </footer>
    </div>
  );
};
