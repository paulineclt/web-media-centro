/**
 * Chapter 3. Functions.
 * Exercise - Circle perimeter and area
 *
 * Create two functions, one for calculate the area of a circle, and another
 * to calculate the perimeter of a circle given the radius.
 */
'use strict';

// Notice that PI is a global var, thus all the code
// can 'see' that
var PI = 3.1416;

function calculateAreaCircle (radius) {
  var area = PI * (radius * radius);

  return area;
}

function calculatePerimeterCircle (radius) {
  var diameter = 2 * radius;
  var perimeter = PI * diameter;

  return perimeter;
}

console.log('\n:::: Circle Geometry :::::');

// We can print in the console the output of the function
console.log('The perimeter of circle with radius 89.2 is: ' + calculatePerimeterCircle(89.2));
console.log('The area of circle with radius 89.2 is: ' + calculateAreaCircle(89.2));

// or we can store in variables and use later
var perimC1 = calculatePerimeterCircle(124.3);
var areaC1 = calculateAreaCircle(124.3);

console.log('The perimeter of circle with radius 124.3 is: ' + perimC1);
console.log('The area of circle with radius 124.3 is: ' + areaC1);

// We can create variables to avoid 'pass' directly a number (hardcode)
var radiusC2 = 45.0;
var perimC2 = calculatePerimeterCircle(radiusC2);
var areaC2 = calculateAreaCircle(radiusC2);

console.log('The perimeter of circle with radius' + radiusC2 + ' is: ' + perimC2);
console.log('The area of circle with radius ' + radiusC2 + ' is: ' + areaC2);
