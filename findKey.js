// Support function(s)
const assertEqual = require('./assertEqual');


// Main function
const findKey = function(object, callback) {

  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }

}


// // Test cases
// assertEqual(findKey(
//   {
//     "Blue Hill": { stars: 1 },
//     "Akaleri":   { stars: 3 },
//     "noma":      { stars: 2 },
//     "elBulli":   { stars: 3 },
//     "Ora":       { stars: 2 },
//     "Akelarre":  { stars: 3 }
//   }, x => x.stars === 3
// ), 'Akaleri');

// assertEqual(findKey(
//   {
//     prop1: 1,
//     prop2: 2,
//     method1: () => {
//       console.log('This is method #1')
//     },
//     prop3: [1, 2, 4]
//   }, k => typeof k === 'function'
// ), 'method1');


module.exports = findKey;