import { render, screen, waitFor } from "@testing-library/react";
import MultiSelectFilter from "./MultiSelectFilter";
import userEvent from "@testing-library/user-event";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: ["Cats", "Computers", "Coffee"] }),
  })
) as jest.Mock;

describe("MultiSelectFilter", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders items after a fetch", async () => {
    render(<MultiSelectFilter />);

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(await screen.findByText("Cats")).toBeInTheDocument();
    expect(await screen.findByText("Computers")).toBeInTheDocument();
    expect(await screen.findByText("Coffee")).toBeInTheDocument();
  });

  it("toggles filters when clicked", async () => {
    const filterName = "Cats";

    render(<MultiSelectFilter />);

    await waitFor(() =>
      expect(screen.getAllByText(filterName)).toHaveLength(1)
    );

    const checkbox = screen.getByLabelText(filterName);
    userEvent.click(checkbox);

    // Checking if it renders twice because when a filter is clicked, it appears twice on the page
    await waitFor(() =>
      expect(screen.getAllByText(filterName)).toHaveLength(2)
    );

    userEvent.click(checkbox);

    await waitFor(() =>
      expect(screen.getAllByText(filterName)).toHaveLength(1)
    );
  });
});
