/**
 * Chapter 3. Loops.
 * Exercise - Multiples
 *
 * Create a script that print all the multiples of a number between a predefined
 * range (start to end)
 */
'use strict';

console.log('\n:::: Multiples of :::::');

var start = 0;
var end   = 20;
var n     = 7;

console.log('Showing all the multples of ' + n + ' from ' + start + ' to ' + end);

// Using while
console.log('\n Using while...');

var count = start;
while (count <= end) {
  if (count % n === 0) {
    console.log(count);
  }

  count++;
}

// Using for
console.log('\n Using for...');

for (var i = start; i <= end; i++) {
  if (i % n === 0) {
    console.log(i);
  }
}
