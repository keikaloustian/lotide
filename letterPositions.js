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
  let output = {};
  
  // Take in sentence as string, split and join to eliminate spaces
  const processed = sentence.split(' ').join('');

  // Loop through processed string
  for (let i = 0; i < processed.length; i++) {
    if (output[processed[i]]) {
      // If character is repeated, update value array of respective key in output
      output[processed[i]].push(i);
    } else {
      // If character is new, create a key for it in output object with value set to it's index
      output[processed[i]] = [i];
    }
  }
  
  return output;

};


// Test cases
const testSentence = 'hello';
const testResult = letterPositions(testSentence);

assertArraysEqual(testResult['h'], [0]);
assertArraysEqual(testResult['e'], [1]);
assertArraysEqual(testResult['l'], [2, 3]);
assertArraysEqual(testResult['o'], [4]);
