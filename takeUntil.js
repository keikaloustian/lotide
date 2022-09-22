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
const takeUntil = function(array, callback) {
  const output = [];

  for (i of array) {
    if (callback(i)) {
      break;
    }
    output.push(i);
  }

  return output;
};


// Test cases
const words = ['I', 'just', 'flipped', 'a', 'switch'];
assertArraysEqual(takeUntil(words, word => word === 'a'), ['I', 'just', 'flipped']);

const soundLevels = [-12, -76, 0, -23, -56];
assertArraysEqual(takeUntil(soundLevels, sound => sound >= 0), [-12, -76]);