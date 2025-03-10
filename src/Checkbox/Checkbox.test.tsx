import { render, screen } from "@testing-library/react";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  const value = "Example";

  it("renders with expected value, id and name", () => {
    render(<Checkbox value={value} onChange={jest.fn()} />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute("value", value);
    expect(checkbox).toHaveAttribute("id", value);
    expect(checkbox).toHaveAttribute("name", value);
  });

  it("renders as checked when checked is true", async () => {
    render(<Checkbox value={value} onChange={jest.fn()} checked={true} />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeChecked();
  });

  it("is not checked by default", async () => {
    render(<Checkbox value={value} onChange={jest.fn()} />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).not.toBeChecked();
  });
});
