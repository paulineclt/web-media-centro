/**
 * Chapter 3. Variables.
 * Exercise - Age calculator
 *
 * Store the current year in a variable.
 * Store youe birth year in a variable.
 * Calculate their 2 possible ages based on the stored values and show in console.
 */

var birthYear   = 1999;
var currentYear = 2016;

var age = currentYear - birthYear;

console.log('\n:::: Age calculator :::::')
console.log('Your age is: ' + age + ', or: ' + (age - 1));
