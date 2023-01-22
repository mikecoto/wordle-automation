import index from "../scripts/index";

//Win game Command
Cypress.Commands.add("validateWinGame", () => {
  index.typeNewLetter();
  index.validateGameWin();
});

//Loose game Command
Cypress.Commands.add("validateLoseGame", () => {
  index.typeNewLetter();
  index.validateGameLoose();
});
