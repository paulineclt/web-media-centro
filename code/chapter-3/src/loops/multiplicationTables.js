/**
 * Chapter 3. Loops.
 * Exercise - Multiplication tables
 *
 * Create a function that receive a number and show in console its multiplication
 * table.
 *
 * Use the function to show all the tables (0 - 10)
 */
'use strict';

function showMultiplicationTable (n) {

  for (var i = 0; i <= 10; i++) {
    var result = i * n;
    console.log(i + ' * ' + n + ' = ' + result);
  }
}

console.log('\n:::: Multiplication tables :::::');

for (var i = 0; i <= 10; i++) {
  console.log('\nThe table for ' + i + ' is: ');
  showMultiplicationTable(i);
}
