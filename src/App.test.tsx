import { describe, it, expect } from "vitest";
import * as RTL from "@testing-library/react";
import App from "./App";

describe.concurrent("<App>", () => {
  it("Renders the app title", () => {
    const { getByText } = RTL.render(<App />);
    expect(getByText(/Pokédex/)).toBeDefined();
  });
});
