import { render } from "@testing-library/react";

import { ContentLinks } from "./ContentLinks";

describe("初期表示のテスト", () => {
  // テストデータ
  const props = {
    contents: [
      { name: "Google", url: "https://www.google.com/", description: "This is example.", isExternalPage: true },
      { name: "Twitter", url: "https://twitter.com/", description: "This is example.", isExternalPage: true },
      { name: "Youtube", url: "https://www.youtube.com/", description: "This is example.", isExternalPage: true },
      { name: "Amazon", url: "https://www.amazon.co.jp/", description: "This is example.", isExternalPage: true },
    ],
  };

  it("要素数が正しいこと", () => {
    const wrapper = render(<ContentLinks {...props} />);

    expect(wrapper.getAllByRole("link")).toHaveLength(props.contents.length);
  });
});
