import React, { ReactNode } from "react";
import { describe, it, expect } from "vitest";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render as rtlRender } from "@testing-library/react";

import ShowPokemonPage from ".";

function render(
  element: ReactNode,
  path: string
): ReturnType<typeof rtlRender> {
  const router = createMemoryRouter(
    [
      {
        path: "/pokemon/:id",
        element,
      },
    ],
    { initialEntries: [path] }
  );

  return rtlRender(<RouterProvider router={router} />);
}

describe.concurrent("<App>", () => {
  it("Renders a heading", () => {
    const { getByText } = render(<ShowPokemonPage />, "/pokemon/1");
    expect(getByText("Pokémon")).toBeDefined();
  });
});
