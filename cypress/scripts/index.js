/// <reference types='cypress' />

//Imports
import words from "../fixtures/words.json";

class Wordle {
  //DOM elements definition
  elements = {
    table_row: () => cy.get(".row"),
    wordle_table: () => cy.get(".App"),
    result_modal: () => cy.get(".modal"),
  };

  //Method for obtain dinamically a new word each iteration from JSON
  typeNewLetter() {
    for (let x = 0; x < 6; x++) {
      let letter = this.generateWords(x); //Method calling for obtain the word
      for (let y = 0; y < 5; y++) {
        this.elements
          .table_row()
          .eq(x)
          .find("div")
          .eq(y)
          .invoke("attr", "tabindex", "1")
          .type(letter[y]); //Typing each letter from the obtained word
      }

      //Clicking Enter
      this.elements
        .wordle_table()
        .invoke("attr", "tabindex", "1")
        .type("{enter}");
    }
  }

  //Method for convert JSON element into String
  generateWords(x) {
    var word = words["word" + x]; //JSON word to var
    var result = [];

    for (var i in word) result.push(word[i]); //Push each letter from the JSON

    return result;
  }

  //Validation message method when lose the game
  validateGameLose() {
    this.elements
      .result_modal()
      .contains("lose!")
      .should("have.text", "Sorry, you lose!");
  }

  //Validation message method when win the game
  validateGameWin() {
    this.elements
      .result_modal()
      .contains("Win!")
      .should("have.text", "You Win!");
  }
}

module.exports = new Wordle();
