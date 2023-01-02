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
    name: "Blog",
    url: "https://blog.datsukan.me",
    description: "エンジニアリング、日常、趣味、思考などを吐き出すブログです。",
    isExternalPage: true,
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
    name: "Bookshelf",
    url: "https://datsukan.notion.site/a18bf874b65a443089db71ae1d276cac?v=60846f678f8641238d952bcc9bf86b1c",
    description: "これまでに購入、読んだ本をまとめています。",
    isExternalPage: true,
  },
  {
    name: "Portfolio",
    url: "https://datsukan.notion.site/8b6570cd5fa5404f8507a5637da80b75?v=a2e21b26a17e4f7cb1d2648ab0962a84",
    description: "個人で作成・公開してきたサイトやツールなどをまとめています。",
    isExternalPage: true,
  },
];

export { contents };
