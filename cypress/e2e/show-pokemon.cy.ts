function addGetPokemonFixture() {
  cy.intercept("https://pokeapi.co/api/v2/pokemon/*", {
    fixture: "pokemon.json",
  });
}

describe("Show Pokémon page", () => {
  it("Loads and displays a pokémon", () => {
    addGetPokemonFixture();
    cy.visit("/pokemon/waka");
    cy.contains("bulbasaur");
  });
});
