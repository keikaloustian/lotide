// Support function(s)
const assertEqual = require('./assertEqual');


// Main function
const head = (array) => {
  return array[0];
};


// //Tests
// assertEqual(head([5,6,7]), 5);
// assertEqual(head([]), undefined);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;