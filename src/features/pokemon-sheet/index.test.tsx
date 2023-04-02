import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import PokemonSheet, { PokemonSheetProps } from ".";

describe("<PokemonSheet>", () => {
  it("Renders pokémon data", () => {
    const props: PokemonSheetProps = {
      name: "pikachu",
      id: "25",
      sprite: "image.png",
      types: ["electric"],
    };
    const { getByText, getByAltText } = render(<PokemonSheet {...props} />);
    const image = getByAltText("Sprite") as HTMLImageElement;

    expect(getByText("pikachu")).toBeDefined();
    expect(getByText("electric")).toBeDefined();
    expect(image).toBeDefined();
    expect(image.src).toBe("image.png");
  });
});
