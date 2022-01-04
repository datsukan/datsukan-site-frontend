import { render } from "@testing-library/react";

import { NextLink } from "./NextLink";

describe("初期表示のテスト", () => {
  // テストデータ
  const props = { url: "/test" };

  it("URLが正しいこと", () => {
    const wrapper = render(<NextLink {...props}>contents</NextLink>);

    expect(wrapper.getByRole("link")).toHaveAttribute("href", props.url);
    expect(wrapper.getByRole("link")).not.toHaveAttribute("href", "dummy");
  });

  it("子要素が正しいこと", () => {
    const child = "contents";
    const wrapper = render(<NextLink {...props}>{child}</NextLink>);

    expect(wrapper.getByRole("link")).toHaveTextContent(child);
    expect(wrapper.getByRole("link")).not.toHaveTextContent("dummy");
  });
});
