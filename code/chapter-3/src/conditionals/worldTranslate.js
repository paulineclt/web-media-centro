/**
 * Chapter 3. Conditionals.
 * Exercise - World Translator
 *
 * Create a function that receive a language code (see https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes),
 * and return 'Hello World' in that language. If doesnt exist a translate for the
 * specified language return undefined.
 */
'use strict';

function worldTranslate (langCode) {
  if (langCode === 'es') {
    return 'Hola mundo';
  }
  else if (langCode === 'fr') {
    return 'Salut le monde';
  }
  else if (langCode === 'en') {
    return 'Hello world';
  }
  else if (langCode === 'it') {
    return 'Ciao mondo';
  }
  else {
    return undefined;
  }
}

console.log('\n:::: World Translate :::::');

console.log('"Hello World" in spanish is: ' + worldTranslate('es'));
console.log('"Hello World" in french is: ' + worldTranslate('fr'));
console.log('"Hello World" in english is: ' + worldTranslate('en'));
console.log('"Hello World" in italian is: ' + worldTranslate('it'));
console.log('"Hello World" in japanese is: ' + worldTranslate('ja'));
