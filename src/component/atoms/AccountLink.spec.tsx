import { render } from "@testing-library/react";

import { AccountLink } from "./AccountLink";

describe("初期表示のテスト", () => {
  // テストデータ
  const props = { name: "test", url: "https://example.com/" };

  it("URLが正しいこと", () => {
    const wrapper = render(<AccountLink {...props} />);

    expect(wrapper.getByRole("link")).toHaveAttribute("href", props.url);
    expect(wrapper.getByRole("link")).not.toHaveAttribute("href", "dummy");
  });

  it("表示名が正しいこと", () => {
    const wrapper = render(<AccountLink {...props} />);

    expect(wrapper.getByRole("link")).toHaveTextContent(props.name);
    expect(wrapper.getByRole("link")).not.toHaveTextContent("dummy");
  });
});
