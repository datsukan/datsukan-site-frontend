import type { CustomLayout } from "next";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

/**
 * @package
 */
export const FixedLayout: CustomLayout = (page) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="flex flex-col mx-auto max-w-screen-md min-h-screen">
        <main className="flex-1 mx-4 tracking-tight">
          <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
        </main>
      </div>

      <footer className="mt-24">
        <Footer />
      </footer>
    </>
  );
};
