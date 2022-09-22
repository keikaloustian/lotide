// Support function(s)
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    // Compare arr1[i] to arr2[2]
    // If comparison evaluates to false, return false
    if (!(arr1[i] === arr2[i])) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`😊 Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`😡 Assertion failed: ${array1} !== ${array2}`);
  }
};


// Main function
const map = (array, callback) => {
  const output = [];
  
  for (let i of array) {
    output.push(callback(i));
  }
  
  return output;
};


// Test cases
const words = ["snake", "are", "you", "there", "?"];
const makeUpperCase = word => word.toUpperCase();

const people = [
  {name: 'Ben', age: 22},
  {name: 'Dana', age: 40},
  {name: 'Frank', age: 28},
  {name: 'Cici', age: 47},
];
const checkAge = person => person['age'];

const prices = [21, 56, 85, 86, 23, 16, 76, 56];
const discountHalf = price => price/2;

assertArraysEqual(map(words, makeUpperCase), ['SNAKE', 'ARE', 'YOU', 'THERE', '?']);
assertArraysEqual(map(people, checkAge), [22, 40, 28, 47]);
assertArraysEqual(map(prices, discountHalf), [10.5, 28, 42.5, 43, 11.5, 8, 38, 28]);
