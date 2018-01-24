// We're incorporating an npm package for hangman game
var inquirer = require("inquirer");
// requiring our Word module exported from word.js
var Word = require("./word.js");

// creating and storing a new word object
var firstWord = new Word();

// calling the addLetter method on our firstWord object
firstWord.addLetter();

console.log(firstWord);





