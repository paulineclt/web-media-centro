/**
 * Chapter 3. Loops.
 * Exercise - The sum of first N numbers
 *
 * Create a function that receive a number n, and returns the sum of the numbers
 * from 0 to n (called the sum of the first n numbers).
 *
 * Young Gauss found the general formula (n * (n + 1)) / 2, but use a loop for get
 * the sum.
 */

function sumNumbers (n) {
  var sum = 0;
  for (var i = 0; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log('\n:::: The sum of first N numbers :::::');

console.log('The sum of 0 + 1 + ... + 4 is: ' + sumNumbers(4));
console.log('The sum of 0 + 1 + ... + 10 is: ' + sumNumbers(10));

var sum342 = sumNumbers(342);
console.log('The sum of 0 + 1 + ... + 342 is: ' + sum342);

var n = 6293;
var gaussResult = (n * (n + 1)) / 2;
var ourResult = sumNumbers(n);
console.log('The sum of 0 + 1 + ... + ' + n + ' according Gauss is: ' + gaussResult);
console.log('The sum of 0 + 1 + ... + ' + n + ' according to us is: ' + ourResult);

if (gaussResult === ourResult) {
  console.log('Gauss was a fucking genius!!!!');
}
