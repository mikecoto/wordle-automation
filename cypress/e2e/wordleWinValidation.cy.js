/// <reference types="cypress" />

describe("wordle automation testing process", () => {
  before(() => {
    cy.visit("?test=error"); //setting the URL for win
  });

  it("win game scenario", () => {
    cy.validateWinGame();
  });
});
