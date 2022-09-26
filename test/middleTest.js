// Support function(s)
const assertArraysEqual = require('../assertArraysEqual');

// Main function
const middle = require('../middle');

// Test cases
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([0]), []);
assertArraysEqual(middle([0, 1]), []);
assertArraysEqual(middle([0, 1, 2]), [1]);
assertArraysEqual(middle(['a', 'b', 'c', 'd']), ['b', 'c']);
assertArraysEqual(middle([NaN, NaN, undefined, null, NaN, NaN]), [undefined, null]);