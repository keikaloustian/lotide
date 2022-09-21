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

// Main function
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`😊 Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`😡 Assertion failed: ${array1} !== ${array2}`);
  }
};


// Main function
const letterPositions = function(sentence) {

};


// Test cases
const testSentence = 'hello';
const testResult = letterPositions(testSentence);

assertArraysEqual(testResult['h'], [0]);
assertArraysEqual(testResult['e'], [1]);
assertArraysEqual(testResult['l'], [2, 3]);
assertArraysEqual(testResult['o'], [4]);
