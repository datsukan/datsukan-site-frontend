import { pageIndex, pages } from "~/data/pages";
import type { Content } from "~/type/content.type";

const contents: Content[] = [
  {
    name: "About",
    url: pages[pageIndex.about].path,
    description: "datsukanについての紹介です。",
    isExternalPage: false,
  },
  {
    name: "GitHub",
    url: "https://github.com/datsukan",
    description: "開発したソースを公開しています。",
    isExternalPage: true,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/datsukan_tech",
    description: "技術系の内容をメインに気ままにつぶやいてます。",
    isExternalPage: true,
  },
  {
    name: "Zenn",
    url: "https://zenn.dev/datsukan",
    description: "技術記事の投稿をしています。",
    isExternalPage: true,
  },
  {
    name: "Qiita",
    url: "https://qiita.com/datsukan",
    description: "Zenn利用以前に技術記事を投稿していました。",
    isExternalPage: true,
  },
  {
    name: "Note",
    url: "https://note.com/datsukan",
    description: "技術関連以外の記事を投稿しています。",
    isExternalPage: true,
  },
];

export { contents };
