import { render } from "@testing-library/react";

import ResetAllData from "./index";

describe("ResetAllData component", () => {
  it("should render all data button", () => {
    const { getByText } = render(<ResetAllData />);

    expect(getByText("Reset all data")).toBeInTheDocument();
  });
});
