import { render } from "@testing-library/react";

import { avatarUrl } from "~/data/profile";

import { Avatar } from "./Avatar";

describe("atoms/Avatarのテスト", () => {
  it("画像が表示されていること", () => {
    const wrapper = render(<Avatar imageUrl={avatarUrl} />);

    expect(wrapper.getByRole("img")).toHaveAttribute("src");
  });
});
