/// <reference types="cypress" />

//For lose the game I am using a word that not exist in the win words chain
describe("wordle automation testing process", () => {
  before(() => {
    cy.visit("");
  });

  it("lose game scenario", () => {
    cy.validateLoseGame();
  });
});
