import type { Page, PageIndex } from "~/type/page.type";

const pages: Page[] = [
  { path: "/", name: "" },
  { path: "/about", name: "about" },
];

const pageIndex: PageIndex = {
  root: 0,
  about: 1,
};

export { pageIndex, pages };
