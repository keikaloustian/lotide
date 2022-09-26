const flatten = (array) => {
  const output = [];
  
  for (let i of array) {
    if (Array.isArray(i)) {
      for (let ii of i) {
        output.push(ii);
      }
    } else {
      output.push(i);
    }
  }

  return output;
}

module.exports = flatten;