// Support function(s)
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');



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


// // Test cases
// const testSentence = 'hello';
// const testResult = letterPositions(testSentence);

// assertArraysEqual(testResult['h'], [0]);
// assertArraysEqual(testResult['e'], [1]);
// assertArraysEqual(testResult['l'], [2, 3]);
// assertArraysEqual(testResult['o'], [4]);


module.exports = letterPositions;