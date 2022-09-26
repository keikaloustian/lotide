// Support function
const assertEqual = require('./assertEqual.js');

// Main function
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    // Compare arr1[i] to arr2[2]
    // If comparison evaluates to false, return false
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// // Tests
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

module.exports = eqArrays;