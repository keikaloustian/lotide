// Support functions
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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`😊 Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`😡 Assertion failed: ${array1} !== ${array2}`);
  }
};


// Main function
const middle = (array) => {
  
  // Take in array as input
  // Create empty output array and a variable to hold the length of the input array
  let output = [];
  const inputLength = array.length;
  
  // Arrays with zero/one/two elements have no middle, so return empty array
  if (array.length <= 2) {
    return output;
  }
  
  // For arrays with even no. of elements, return two elements
  if (array.length % 2 === 0) {
    output.push(array[inputLength / 2 - 1], array[inputLength / 2]);
  } else {
    // For arrays with odd no. of elements, return one element
    output.push(array[Math.floor(inputLength / 2)]);
  }
  
  return output;

};


// Test cases
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([0]), []);
assertArraysEqual(middle([0, 1]), []);
assertArraysEqual(middle([0, 1, 2]), [1]);
assertArraysEqual(middle(['a', 'b', 'c', 'd']), ['b', 'c']);
assertArraysEqual(middle([NaN, NaN, undefined, null, NaN, NaN]), [undefined, null]);
