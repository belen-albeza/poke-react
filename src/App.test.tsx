import { describe, it, expect } from "vitest";
import * as RTL from "@testing-library/react";
import App from "./App";

describe.concurrent("<App>", () => {
  it("Renders a heading", () => {
    const { getByText } = RTL.render(<App />);
    expect(getByText("Vite + React")).toBeDefined();
  });
});
