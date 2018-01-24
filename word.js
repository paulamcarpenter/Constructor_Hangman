// requiring our Letter module exported from letter.js
var Letter = require("./letter.js");

// constructor function for creating classroom objects
var Word = function() {
  // this.students will hold all of our student objects
  this.letters = [];

  // a method that creates a student using our Student constructor.
  // It then pushes the new student object to this.students and updates this.numStudents
  this.addLetter = function() {
    this.letters.push(new Letter());
  };
  // this method will tell you how many students are in the class
  this.letterCount = function() {
    return this.letters.length;
  };
};

// exporting our Word constructor. We will require it in hangman.js
module.exports = Word;