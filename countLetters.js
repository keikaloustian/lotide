// Support function(s)
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡 Assertion failed: ${actual} !== ${expected}`);
  }
};


// Main function
const countLetters  = function(sentence) {
  let output = {};
  
  // Take in sentence as string, split and join to eliminate spaces
  const processed = sentence.split(' ').join('');
  
  // Examine each character and if it's new, create key and set value to 1. If it's repeated, increment count
  for (let l of processed) {
    if (output[l]) {
      output[l] ++;
    } else {
      output[l] = 1;
    }
  }
  
  // Return object with the letters encountered as keys and their respective counts as values
  return output;

};


// Test cases
const testSentence = 'Lighthouse in the lit house'; 
const testResult = countLetters(testSentence);

assertEqual(testResult['L'], 1);
assertEqual(testResult['i'], 3);
assertEqual(testResult['g'], 1);
assertEqual(testResult['h'], 4);
assertEqual(testResult['t'], 3);
assertEqual(testResult['o'], 2);
assertEqual(testResult['u'], 2);
assertEqual(testResult['s'], 2);
assertEqual(testResult['e'], 3);
assertEqual(testResult['n'], 1);
assertEqual(testResult['l'], 1);