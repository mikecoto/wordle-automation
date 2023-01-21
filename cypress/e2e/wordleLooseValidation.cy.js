/// <reference types="cypress" />

//For loose the game I am using a word that not exist in the win words chain
describe("wordle automation testing process", () => {
  before(() => {
    cy.visit("");
  });

  it("loose game scenario", () => {
    cy.validateLooseGame();
  });
});
