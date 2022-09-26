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


module.exports = middle;