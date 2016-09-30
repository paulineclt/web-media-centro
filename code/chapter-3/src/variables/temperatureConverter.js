/**
 * Chapter 3. Variables.
 * Exercise - Temperature converter
 *
 * Store a temperature in Celsius scale.
 * Convert in Farenheit scale and show in console.
 */
'use strict';

var tempCelsius = 10;

var tempFarenheit = ((tempCelsius * 9) / 5) + 32;

console.log('\n:::: Temperature Converter :::::');
console.log('The temperature in Farenheit scale is: ' + tempFarenheit);
