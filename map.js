// Support function(s)
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


// Main function
const map = (array, callback) => {
  const output = [];
  
  for (let i of array) {
    output.push(callback(i));
  }
  
  return output;
};


// // Test cases
// const words = ["snake", "are", "you", "there", "?"];
// const makeUpperCase = word => word.toUpperCase();

// const people = [
//   {name: 'Ben', age: 22},
//   {name: 'Dana', age: 40},
//   {name: 'Frank', age: 28},
//   {name: 'Cici', age: 47},
// ];
// const checkAge = person => person['age'];

// const prices = [21, 56, 85, 86, 23, 16, 76, 56];
// const discountHalf = price => price/2;

// assertArraysEqual(map(words, makeUpperCase), ['SNAKE', 'ARE', 'YOU', 'THERE', '?']);
// assertArraysEqual(map(people, checkAge), [22, 40, 28, 47]);
// assertArraysEqual(map(prices, discountHalf), [10.5, 28, 42.5, 43, 11.5, 8, 38, 28]);


module.exports = map;