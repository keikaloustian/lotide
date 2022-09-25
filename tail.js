// Support function(s)
const assertEqual = require('./assertEqual.js');


//Main function
const tail = (array) => {
  return array.slice(1);
};


// // Tests
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);

// console.log(tail([1, 2, 3, 4, 5]));
// console.log(tail([1]));
// console.log(tail([]));


module.exports = tail;