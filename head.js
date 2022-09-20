const head = (array) => {
  return array[0];
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡 Assertion failed: ${actual} !== ${expected}`);
  }
};

//Tests
assertEqual(head([5,6,7]), 5);
assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
