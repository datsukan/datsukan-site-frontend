import { render } from "@testing-library/react";

import { avatarUrl } from "~/data/profile";

import { Avatar } from "./Avatar";

describe("atoms/Avatarのテスト", () => {
  const props = { imageUrl: avatarUrl, size: 10 };

  it("画像が表示されていること", () => {
    const wrapper = render(<Avatar {...props} />);

    expect(wrapper.getByRole("img")).toHaveAttribute("src");
  });
});
