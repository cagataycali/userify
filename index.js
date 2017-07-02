const pokemon = require('pokemon');
const heroes = require('superheroes');
const superb = require('superb');
const dog = require('dog-names');
const cat = require('cat-names');
const uniqueRandomArray = require('unique-random-array');
const slugify = require('slugify');

module.exports = () => {
  let array = ['cat.random()', 'heroes.random()', 'pokemon.random()', 'dog.femaleRandom()', 'dog.maleRandom()'];
  let random = uniqueRandomArray(array);
  let string = superb() + ' ' + eval(`${random()}`);
  return slugify(string).toLowerCase()
}
