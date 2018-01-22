// requiring our Letter module exported from letter.js
var Letter = require("./letter.js");

// constructor function for creating classroom objects
var Word = function(letter) {
  // this.students will hold all of our student objects
  this.letter = [];

  // a method that creates a student using our Student constructor.
  // It then pushes the new student object to this.students and updates this.numStudents
  this.addLetter = function(x, y, z) {
    this.letter.push(new Letter(x, y, z));
  };
  // this method will tell you how many students are in the class
  this.letterCount = function() {
    return this.letter.length;
  };
};

// exporting our Word constructor. We will require it in hangman.js
module.exports = Word;