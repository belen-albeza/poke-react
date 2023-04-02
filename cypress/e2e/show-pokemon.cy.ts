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
    cy.contains("grass");
    cy.contains("poison");
    cy.findByAltText("Sprite").should(
      "have.attr",
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    );
  });
});
