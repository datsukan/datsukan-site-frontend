import { render } from "@testing-library/react";

import { description, name } from "~/data/profile";

import Root from "./index.page";

describe("プロフィールのテスト", () => {
  it("名前が表示されていること", () => {
    const wrapper = render(<Root />);

    expect(wrapper.getByText(name)).toHaveTextContent(name);
  });

  it("自己紹介が表示されていること", () => {
    const wrapper = render(<Root />);

    expect(wrapper.getByText(description)).toHaveTextContent(description);
  });
});
