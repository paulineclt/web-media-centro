/**
 * Chapter 3. Conditionals.
 * Exercise - Max number
 *
 * Create a functiont that receive two numbers and return the max.
 */
'use strict';

function maximum (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log('\n:::: Max numbers :::::');

console.log('The max number between 7 and 3 is: ' + maximum(7, 3));

var n1 = 4;
var n2 = 10;
var max = maximum(n1, n2);

console.log('The max number between ' + n1 + ' and ' + n2 + ' is: ' + max);
