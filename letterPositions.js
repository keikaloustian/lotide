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
  // If character is repeated, add current index i to the respective key (or it's value array) in output
  // If character is new, create it's key in output object with value set to it's index
  for (let i = 0; i < processed.length; i++) {
    if (output[processed[i]]) {
      output[processed[i]].push(i);
    } else {
      output[processed[i]] = [i];
    }
  }
  
  return output;

};


// Test cases
const testSentence = 'hello';
const testResult = letterPositions(testSentence);
console.log(testResult);

// assertArraysEqual(testResult['h'], [0]);
// assertArraysEqual(testResult['e'], [1]);
// assertArraysEqual(testResult['l'], [2, 3]);
// assertArraysEqual(testResult['o'], [4]);
