// Support function(s)
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


// Main function
const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key in object1) {
    
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      continue;
    }
    
    if (!Array.isArray(object1[key]) && !Array.isArray(object2[key])) {
      if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
        if (!eqObjects(object1[key], object2[key])) {
          return false;
        }
      continue;
      }
    }
      
    if (object1[key] !== object2[key]) {
        return false;
    } 

  }
  
  return true;
};


// Test cases
// const ob1 = {
//   a: 1,
//   c: {c1: 4, c2: {d: 5}},
//   e: ["2", 3],
//   b: {b1: 2, b2: 3, b3: [1, 2, 5]}
// }

// const ob2 = {
//   a: 1,
//   c: {c1: 4, c2: {d: 5}},
//   e: ["2", 3],
//   b: {b1: 2, b2: 3, b3: [1, 2, 9]}
// }

// assertEqual(eqObjects(ob1, ob2), false);

// const ab = {a: '1', b: '2'};
// const ba = {b: '2', a: '1'};
// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);

// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);

// // const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);

module.exports = eqObjects;