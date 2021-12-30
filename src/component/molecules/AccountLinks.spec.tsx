import { render } from "@testing-library/react";

import { AccountLinks } from "./AccountLinks";

describe("初期表示のテスト", () => {
  // テストデータ
  const props = {
    accounts: [
      { name: "Google", url: "https://www.google.com/" },
      { name: "Twitter", url: "https://twitter.com/" },
      { name: "Youtube", url: "https://www.youtube.com/" },
      { name: "Amazon", url: "https://www.amazon.co.jp/" },
    ],
  };

  it("要素数が正しいこと", () => {
    const wrapper = render(<AccountLinks {...props} />);

    expect(wrapper.getAllByRole("link")).toHaveLength(props.accounts.length);
  });
});
