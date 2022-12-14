// Support function(s)
const assertEqual = require('./assertEqual');


// Main function
const findKeyByValue = function(lookupObject, searchValue) {
  
  // Loop through object and check each key against the search value
  for (let key in lookupObject) {
    if (lookupObject[key] === searchValue) {
      return key;
    }
  }
  
  // If no matches are found, no explicit returns needed
  // If a function doesn't explicitly return anything, it'll return undefined by default

};


// // Test cases
// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Friends"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");


module.exports = findKeyByValue;
