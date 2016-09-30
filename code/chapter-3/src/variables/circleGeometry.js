/**
 * Chapter 3. Variables.
 * Exercise - Circle perimeter and area
 *
 * Store a radius in a variable.
 * Calculate the perimeter and area and show in console.
 */
'use strict';

var radius = 10;
var diameter = radius * 2;

var pi = 3.1416;

var perimeter = pi * diameter;
var area = pi * (radius * radius);

console.log('\n:::: Circle Geometry :::::');
console.log('The perimeter of circle is: ' + perimeter);
console.log('The area of circle is: ' + area);
