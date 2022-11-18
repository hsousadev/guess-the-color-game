import { render } from "@testing-library/react";

import GuestTheColor from "./index";

describe("GuestTheColor component", () => {
  it("should render the game name", () => {
    const { getByText } = render(<GuestTheColor />);

    expect(getByText("Guess the color")).toBeInTheDocument();
  });

  it("should render start button", () => {
    const { getByText } = render(<GuestTheColor />);

    expect(getByText("START")).toBeInTheDocument();
  });

  it("should render restart button", () => {
    const { getByText } = render(<GuestTheColor />);

    expect(getByText("RESTART")).toBeInTheDocument();
  });
});
