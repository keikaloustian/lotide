// Support function(s)
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


// Main function
const takeUntil = function(array, callback) {
  const output = [];

  for (let i of array) {
    if (callback(i)) {
      break;
    }
    output.push(i);
  }

  return output;
};


// // Test cases
// const words = ['I', 'just', 'flipped', 'a', 'switch'];
// assertArraysEqual(takeUntil(words, word => word === 'a'), ['I', 'just', 'flipped']);

// const soundLevels = [-12, -76, 0, -23, -56];
// assertArraysEqual(takeUntil(soundLevels, sound => sound >= 0), [-12, -76]);

module.exports = takeUntil;