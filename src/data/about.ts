import type { Contact, Description, OutsideOfWork, Works } from "~/type/about.type";

const description: Description =
  "日本の埼玉県に在住、東京都の会社で勤務しています。\nWeb領域のプログラマー・エンジニアとして働いています。";

const works: Works = [
  {
    id: 1,
    name: "SES企業（SIer企業に常駐）",
    startedAt: "2017/04",
    endedAt: "2018/09",
    period: "1年6ヶ月",
    description:
      "SESの形態で客先の企業オフィスに常駐して、開発や運用/保守の業務を行っていました。\n開発ではJavaやVB.NET、C#.NETなどを用いて生産管理・金融などのシステムを扱っていました。\n運用/保守では人事/総務のシステムを扱っていました。",
  },
  {
    id: 2,
    name: "Web受託開発企業",
    startedAt: "2018/10",
    endedAt: "2021/10",
    period: "3年1ヶ月",
    description:
      "プロジェクトごとに社内でチームを作り、主にWebシステムの開発を行っていました。\nシステムの業務領域は様々で、BtoBとして社内管理用システムもあれば、BtoCとして一般消費者向けのアプリケーションを扱う場合もありました。\n扱う技術はバックエンドのPHP/Laravel、フロントエンドのJavaScript/Vue.js、インフラのAWSが中心でした。",
  },
  {
    id: 3,
    name: "SaaS企業",
    startedAt: "2021/11",
    endedAt: "現職",
    period: "2ヶ月",
    description:
      "企業・個人事業主・一般消費者まで広く利用される電子契約のSaaSを開発・提供しています。\nバックエンドエンジニアとしてGoでのアプリケーション開発、AWSでのインフラ管理などを扱っています。\n開発だけでなくアラート対応や一部運用対応も行っています。",
  },
];

const outsideOfWork: OutsideOfWork =
  "普段はNetflix、Youtube、Nintendo switch、筋トレ、趣味のWeb開発を楽しんでいます。\n休日には一眼カメラで写真を撮りに行ったり、コメダ珈琲でカツパンを食べるのが喜びです。";

const contact: Contact = "御用のある方は、 s.datsukan@gmail.com または Twitter でご連絡ください。";

export { contact, description, outsideOfWork, works };
