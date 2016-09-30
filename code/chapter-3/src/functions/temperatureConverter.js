/**
 * Chapter 3. Functions.
 * Exercise - Temperature converter
 *
 * Create a temperature converter:
 *  - a function to convert Farenheit to Celsius
 *  - another function to convert Celsius to Farenheit
 */
'use strict';

function convertCelsiusToFarenheit (tempC) {
  var tempF = (tempC * (9.0/5.0)) + 32;
  return tempF;
}

function convertFarenheitToCelsius (tempF) {
  var tempC = ((tempF - 32.0) / 9.0) * 5.0;
  return tempC;
}

console.log('\n:::: Temperature Converter :::::');

console.log('45.0º Celsius in Farenheit scale: ' + convertCelsiusToFarenheit(45.0));
console.log('156.0º Farenheit in Celsius scale: ' + convertFarenheitToCelsius(156.0));

var temperatureFarenheit = 400.0;
var temperatureCelsius   = convertFarenheitToCelsius(temperatureFarenheit);
console.log('400.0º Farenheit in Celsius scale: ' + temperatureCelsius);
