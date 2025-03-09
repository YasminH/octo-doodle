import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  const value = "Example";

  it("renders checkbox with expected value, id and name", () => {
    render(<Checkbox value={value} />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute("value", value);
    expect(checkbox).toHaveAttribute("id", value);
    expect(checkbox).toHaveAttribute("name", value);
  });

  it("allows user to check and uncheck the box", async () => {
    render(<Checkbox value={value} />);

    const checkbox = screen.getByRole("checkbox");

    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
