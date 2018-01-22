// We're incorporating an npm package for hangman game
var inquirer = require("inquirer");

// constructor function used to create programmers objects
function Hangman(word) {
  this.word = word;
}

// creates the printInfo method and applies it to all programmer objects
Programmer.prototype.printInfo = function() {
  console.log("Word: " + this.word);
};

// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement.
inquirer.prompt([
  {
    Word: "word",
    message: "What is your letter guess?"
  }
]).then(function(answers) {
  // initializes the variable newguy to be a programmer object which will take
  // in all of the user's answers to the questions above
  var newWord = new Word(answers.word);
  // printInfo method is run to show that the newguy object was successfully created and filled
  newWord.printInfo();
});