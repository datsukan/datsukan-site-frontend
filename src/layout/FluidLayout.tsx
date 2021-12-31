import type { CustomLayout } from "next";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

/**
 * @package
 */
export const FluidLayout: CustomLayout = (page) => {
  return (
    <div className="flex flex-col px-4 min-h-screen tracking-tight text-zinc-900 dark:text-white bg-white dark:bg-zinc-900">
      <header>
        <Header />
      </header>
      <main className="flex-1">
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
