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
  // Take in sentence as string, split and join to eliminate spaces
  sentence.split(' ').join('');
  
  // Examine each character and if it's new, create key and set value to 1. If it's repeated, increment count
  // Return object with the letters encountered as keys and their respective counts as values
};

const testSentence = 'Lighthouse in the lit house'; 
countLetters(testSentence);
// Test cases
// const testResult = countLetters(testSentence);
// assertEqual(testResult[L], 1);
// assertEqual(testResult[i], 3);
// assertEqual(testResult[g], 1);
// assertEqual(testResult[h], 4);
// assertEqual(testResult[t], 3);
// assertEqual(testResult[o], 2);
// assertEqual(testResult[u], 2);
// assertEqual(testResult[s], 2);
// assertEqual(testResult[e], 3);
// assertEqual(testResult[n], 1);
// assertEqual(testResult[l], 1);