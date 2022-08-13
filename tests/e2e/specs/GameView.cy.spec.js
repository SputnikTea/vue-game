describe("GameView test", () => {
  it("Visits the GameView url", () => {
    cy.visit("/game");
    cy.contains("h1", "Game View");
  });
});
