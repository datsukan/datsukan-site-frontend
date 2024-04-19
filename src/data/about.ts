import type { Contact, Description, OutsideOfWork, TimelineItems, Works } from "~/type/about.type";

const description: Description =
  "1999年生まれ。東京都出身。\n日本の埼玉県に在住、東京都の会社で勤務しています。\nWeb領域のプログラマー・エンジニアとして働いています。\n通信制大学にも通う社会人学生です。";

const works: Works = [
  {
    name: "SES企業に就職",
    startedAt: "2017/04",
    endedAt: "2018/09",
    period: "1年6ヶ月",
    description:
      "SESの形態で客先の企業オフィスに常駐して、開発や運用/保守の業務を行っていました。\n開発ではJavaやVB.NET、C#.NETなどを用いて生産管理・金融などのシステムを扱っていました。\n運用/保守では人事/総務のシステムを扱っていました。",
  },
  {
    name: "Web受託開発企業に転職",
    startedAt: "2018/10",
    endedAt: "2021/10",
    period: "3年1ヶ月",
    description:
      "プロジェクトごとに社内でチームを作り、主にWebシステムの開発を行っていました。\nシステムの業務領域は様々で、BtoBとして社内管理用システムもあれば、BtoCとして一般消費者向けのアプリケーションを扱う場合もありました。\n扱う技術はバックエンドのPHP/Laravel、フロントエンドのJavaScript/Vue.js、インフラのAWSが中心でした。",
  },
  {
    name: "SaaS企業に転職",
    startedAt: "2021/11",
    endedAt: "現職",
    description:
      "企業・個人事業主・一般消費者まで広く利用される電子契約のSaaSを開発・提供しています。\nバックエンドエンジニアとしてGoでのアプリケーション開発、AWSでのインフラ管理などを扱っています。\n開発だけでなくアラート対応や一部運用対応も行っています。",
  },
];

const timelineItems: TimelineItems = [
  {
    id: 1,
    type: "private",
    name: "東京都江東区東陽町で生まれる",
    startedAt: "1999/03",
  },
  {
    id: 2,
    type: "private",
    name: "途中江戸川区を経て、10歳まで葛飾区で過ごす",
    endedAt: "2009/03",
    period: "7年",
  },
  {
    id: 3,
    type: "private",
    name: "神奈川県横須賀市津久井で小学校卒業まで過ごす",
    startedAt: "2009/04",
    endedAt: "2011/03",
    period: "2年",
  },
  {
    id: 4,
    type: "private",
    name: "岡山県倉敷市で就職直後まで過ごす",
    startedAt: "2011/04",
    endedAt: "2017/06",
    period: "6年3ヶ月",
  },
  {
    id: 5,
    type: "private",
    name: "就職後の単身赴任に伴って、東京都大田区で一人暮らし開始",
    startedAt: "2017/07",
    endedAt: "2018/09",
    period: "1年3ヶ月",
  },
  {
    id: 6,
    type: "work",
    ...works[0],
  },
  {
    id: 7,
    type: "private",
    name: "転職に伴って、東京都練馬区に転居",
    startedAt: "2018/09",
    endedAt: "2020/08",
    period: "2年",
  },
  {
    id: 8,
    type: "work",
    ...works[1],
  },
  {
    id: 9,
    type: "private",
    name: "埼玉県朝霞市に転居",
    startedAt: "2020/09",
    endedAt: "現住",
  },
  {
    id: 10,
    type: "work",
    ...works[2],
  },
  {
    id: 11,
    type: "private",
    name: "東京通信大学 情報マネジメント学部へ入学 （社会人学生）",
    startedAt: "2024/04",
    endedAt: "現在",
  },
];

const outsideOfWork: OutsideOfWork =
  "普段はNetflix、Youtube、Nintendo switch、筋トレ、趣味のWeb開発を楽しんでいます。\n休日には一眼カメラで写真を撮りに行ったり、コメダ珈琲でカツパンを食べるのが喜びです。";

const contact: Contact = "御用のある方は、 s.datsukan@gmail.com または Twitter でご連絡ください。";

export { contact, description, outsideOfWork, timelineItems };
