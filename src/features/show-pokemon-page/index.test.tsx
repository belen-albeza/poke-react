import { describe, it, expect } from "vitest";
import * as RTL from "@testing-library/react";
import ShowPokemonPage from ".";

describe.concurrent("<App>", () => {
  it("Renders a heading", () => {
    const { getByText } = RTL.render(<ShowPokemonPage />);
    expect(getByText("Pokémon")).toBeDefined();
  });
});
