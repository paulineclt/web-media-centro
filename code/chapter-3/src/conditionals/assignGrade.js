/**
 * Chapter 3. Conditionals.
 * Exercise - Grade Assigner
 *
 * Create a function that receive a number score (0.0 to 10.0) and returns a
 * grade for the score ("A", "B", "C" or "F"), following the next table:
 * 10.0 - 9.0 => "A"
 * 9.0  - 7.0 => "B"
 * 7.0  - 5.0 => "C"
 * 5.0  - 0.0 => "F"
 */
'use strict';

function assignGrade (score) {
  if (9.0 <= score && score <= 10.0) {
    return 'A';
  } else if (7.0 <= score && score <= 9.0) {
    return 'B';
  } else if (5.0 <= score && score <= 7.0) {
    return 'C';
  } else {
    return 'F';
  }
}

console.log('\n:::: Grade Asigner :::::');

console.log('If your score is 10.0 your grade is: ' + assignGrade(10.0));
console.log('If your score is 8.3 your grade is: ' + assignGrade(8.3));

var scoreDiego = 9.88;
console.log('The score of Diego is ' + scoreDiego + ', so his grade is: ' + assignGrade(scoreDiego));

var scoreAna = 3.0;
var gradeAna = assignGrade(scoreAna);
console.log('The score of Ana is ' + scoreAna + ', so his grade is: ' + gradeAna);
if (scoreAna <= 5.0) {
  console.log('Ana. Luck for the next.');
}
