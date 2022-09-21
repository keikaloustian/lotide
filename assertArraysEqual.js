// Support function to check if arrays are a perfect match
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

// Main function
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`😊 Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`😡 Assertion failed: ${array1} !== ${array2}`);
  }
};

/*
Manual verification of asserArraysEqual function
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 4]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
*/