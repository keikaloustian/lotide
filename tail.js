const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡 Assertion failed: ${actual} !== ${expected}`);
  }
};

//Main function
const tail = (array) => {
  return array.slice(1);
};

//Original array test
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

//Tests
console.log(tail([1, 2, 3, 4, 5]));
console.log(tail([1]));
console.log(tail([]));
