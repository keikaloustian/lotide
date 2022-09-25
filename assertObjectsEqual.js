// Support function(s)
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');


// Main function
const assertObjectsEqual = function(object1, object2) {
  // Import util library
  const inspect = require('util').inspect;

  if (eqObjects(object1, object2)) {
    console.log(`😊 Assertion passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`😡 Assertion failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};


// // Test cases
// let obj1 = {
//   a: 1,
//   b: 2,
//   c: [1, 2]
// };

// let obj2 = {
//   b: 2,
//   a: 1,
//   c: [1, 2]
// };

// let obj3 = {
//   a: 1,
//   b: 2,
//   c: [1, 2, 4]
// };

// assertObjectsEqual(obj1, obj2);
// assertObjectsEqual(obj1, obj3);

module.exports = assertObjectsEqual;