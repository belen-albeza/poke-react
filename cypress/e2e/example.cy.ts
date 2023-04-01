describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.findByText("Pokédex").should("exist");
  });
});
