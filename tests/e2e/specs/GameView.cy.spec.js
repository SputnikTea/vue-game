describe("GameView test", () => {
  it("Navigates to GameView page", () => {
    cy.visit("/");
    cy.contains("Game").click();
    cy.url().should("include", "/game");
  });
  it("Loads the GameView url", () => {
    cy.visit("/game");
    cy.contains("h1", "Game View");
  });
});
