// Support function
const assertEqual = require('./assertEqual.js');

// Main function
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
      continue;
    }
    
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
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
// assertEqual(eqArrays([[2, 3], [4, [1, [2, [3]]]]], [[2, 3], [4, [1, [2, [3]]]]]), true);



module.exports = eqArrays;