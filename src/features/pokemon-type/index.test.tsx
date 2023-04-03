import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import { PokemonType } from ".";

describe("<PokemonType>", () => {
  it("Renders emoji icon and name", () => {
    const { getByText } = render(<PokemonType pokeType="electric" />);
    expect(getByText("⚡️ electric")).toBeDefined();
  });

  describe("Renders emoji icons depending on type", () => {
    it("Renders 🔥 for fire", () => {
      const { getByText } = render(<PokemonType pokeType="fire" />);
      expect(getByText(/🔥/)).toBeDefined();
    });

    it("Renders 🌱 for grass", () => {
      const { getByText } = render(<PokemonType pokeType="grass" />);
      expect(getByText(/🌱/)).toBeDefined();
    });
  });
});
