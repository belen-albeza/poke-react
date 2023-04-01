describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.findByText("Vite + React").should("exist");
  });
});
