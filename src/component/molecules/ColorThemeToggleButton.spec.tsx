import { render } from "@testing-library/react";

import { ColorThemeToggleButton } from "./ColorThemeToggleButton";

describe("初期表示のテスト", () => {
  it("カラーテーマがライトになっていること", () => {
    const wrapper = render(<ColorThemeToggleButton />);

    expect(wrapper.getByRole("switch")).not.toBeChecked();
  });
});
