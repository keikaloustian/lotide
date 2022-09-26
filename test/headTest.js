// Support function(s)
const assertEqual = require('../assertEqual');

// Main function
const head = require('../head');

//Tests
assertEqual(head([5,6,7]), 5);
assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");