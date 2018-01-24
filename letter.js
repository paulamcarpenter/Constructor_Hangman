
var Letter = function() {
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

// exporting our Classroom constructor. We will require it in main.js
module.exports = Letter;