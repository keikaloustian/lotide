// Support function(s)
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡 Assertion failed: ${actual} !== ${expected}`);
  }
};


// Main function
const eqObjects = function(object1, object2) {

}


// Test cases
const ab = {a: '1', b: '2'};
const ba = {b: '2', a: '1'};
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);