/**
 * Chapter 3. Functions.
 * Exercise - Age calculator
 *
 * Create a functiont that tell your age:
 *  - Receive your birthday
 *  - Output in the console your two possible ages
 */
'use strict';

function tellMyAge (birthYear) {
  var currentYear = 2016;

  var age = currentYear - birthYear;
  console.log('Your age is: ' + age + ', or: ' + (age - 1));
}

console.log('\n:::: Age calculator :::::');

tellMyAge(1990);
tellMyAge(1997);
tellMyAge(1963);
