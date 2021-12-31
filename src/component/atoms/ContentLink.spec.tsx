import { render } from "@testing-library/react";

import { ContentLink } from "./ContentLink";

describe("初期表示のテスト", () => {
  // テストデータ
  const props = { name: "test", url: "https://example.com/", description: "This is example.", isExternalPage: true };

  it("URLが正しいこと", () => {
    const wrapper = render(<ContentLink {...props} />);

    expect(wrapper.getByRole("link")).toHaveAttribute("href", props.url);
    expect(wrapper.getByRole("link")).not.toHaveAttribute("href", "dummy");
  });

  it("表示名が正しいこと", () => {
    const wrapper = render(<ContentLink {...props} />);

    expect(wrapper.getByRole("link")).toHaveTextContent(props.name);
    expect(wrapper.getByRole("link")).not.toHaveTextContent("dummy");
  });

  it("説明が正しいこと", () => {
    const wrapper = render(<ContentLink {...props} />);

    expect(wrapper.getByRole("note")).toHaveTextContent(props.description);
    expect(wrapper.getByRole("note")).not.toHaveTextContent("dummy");
  });

  it("外部リンクの場合、アイコンが表示されること", () => {
    const wrapper = render(<ContentLink {...props} />);

    expect(wrapper.getByRole("link").firstChild?.childNodes).toHaveLength(2);
  });

  it("内部リンクの場合、アイコンが表示されないこと", () => {
    // テストデータ
    const externalPageProps = {
      name: "test",
      url: "https://example.com/",
      description: "This is example.",
      isExternalPage: false,
    };

    const wrapper = render(<ContentLink {...externalPageProps} />);

    expect(wrapper.getByRole("link").firstChild?.childNodes).toHaveLength(1);
  });
});
