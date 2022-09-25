// Support function(s)
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


// Main function
const without = (source, itemsToRemove) => {
  let filtered = [];
  // Loop through source array and if item is not on removal list, add it to output
  for (let i of source) {
    if (!itemsToRemove.includes(i)) {
      filtered.push(i);
    }
  }
  return filtered;
};


// // Test cases
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
// assertArraysEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
// assertArraysEqual(without(['A', 'B', 'C'], [1, 'B']), ['A', 'C']);
// assertArraysEqual(without([true, false, false], [false]), [true]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;