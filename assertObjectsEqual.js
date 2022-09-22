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

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    
    } else if (object1[key] !== object2[key]) {
      return false;
    }

  }

  return true;
};


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


// Test cases
let obj1 = {
  a: 1,
  b: 2,
  c: [1, 2]
};

let obj2 = {
  b: 2,
  a: 1,
  c: [1, 2]
};

let obj3 = {
  a: 1,
  b: 2,
  c: [1, 2, 4]
};

assertObjectsEqual(obj1, obj2);
assertObjectsEqual(obj1, obj3);
