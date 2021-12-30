import { render } from "@testing-library/react";

import { NewTabLink } from "./NewTabLink";

describe("初期表示のテスト", () => {
  // テストデータ
  const props = { url: "https://example.com/" };

  it("URLが正しいこと", () => {
    const wrapper = render(<NewTabLink {...props}>contents</NewTabLink>);

    expect(wrapper.getByRole("link")).toHaveAttribute("href", props.url);
    expect(wrapper.getByRole("link")).not.toHaveAttribute("href", "dummy");
  });

  it("子要素が正しいこと", () => {
    const child = "contents";
    const wrapper = render(<NewTabLink {...props}>{child}</NewTabLink>);

    expect(wrapper.getByRole("link")).toHaveTextContent(child);
    expect(wrapper.getByRole("link")).not.toHaveTextContent("dummy");
  });
});
