import React from "react";
import {
  render,
  screen,
  // waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "./App";
// import userEvent from "@testing-library/user-event";
// import StubRepositories from "./StubRepositories.json";
// import { searchRepositories } from "./services/searchApi";

// jest.mock("./services/searchApi");

describe("App", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it("render without clashes", () => {
    // component render โดยไม่มี error
    expect(() => render(<App />)).not.toThrow();
  });

  it("render empty ui & input", () => {
    render(<App />);
    screen.getByText("Type at the top to search repositories.");
    screen.getByLabelText("search-input");
  });

  // it("should display result after search with some text", async () => {
  //   // jest.mocked(searchRepositories).mockResolvedValue(StubRepositories);
  //   render(<App />);
  //   userEvent.type(screen.getByLabelText("search-input"), "react");
  //   await waitForElementToBeRemoved(screen.getByTestId("loader"));
  //   expect(screen.getAllByTestId("repo-item")).toHaveLength(
  //     StubRepositories.items.length
  //   );
  // });
});
