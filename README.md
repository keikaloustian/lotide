# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kk2022/lotide`

**Require it:**

`const _ = require('@kk2022/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Asserts whether two arrays are identical
* `assertEqual(actual, expected)`: Asserts whether two primitive values are strictly equal
* `assertObjectsEqual(object1, object2)`: Asserts whether two objects are identical
* `assertObjectsEqual(object1, object2)`: Asserts whether two objects are identical
* `countLetters(sentence)`: Counts occurrences of characters in input string and returns object with character and count as key-value pairs
* `countOnly(allItems, itemsToCount)`: Takes in an array of items and an object specifying subset of those items to be counted; outputs object with item and count as key-value pairs
* `eqArrays(array1, array2)`: Compares two arrays and returns true if they're identical, false otherwise (accepts nested arrays)
* `eqObjects(object1, object2)`: Compares two objects and returns true if they're identical, false otherwise (accepts nested arrays & objects)
* `findKey(object, callback)`: Scan's input object and returns first key whose value evaluates to true when passed into the callback function; returns undefined if none found
* `findKeyByValue(object, searchValue)`: Scan's input object and returns first key whose value matches that of the second argument; returns undefined if none found
* `flatten(array)`: Takes in array with up to one additional layer of nested arrays and returns a non-nested (flat) array that contains all the values from the input
* `head(array)`: Returns the first element of the input array, aka the "head" of the array
* `letterPositions(sentence)`: Takes in a string and returns an object that contains: each character found in the input (as keys) and an array with the indices in which they were found (as values); skips white spaces
* `map(array, callback)`: Passes each element of the input array into the callback function and returns a new array with the returned values
* `middle(array)`: Takes in an array and returns the one or two middle elements depending on whether input has odd or even number of elements; returns empty array if input has two or less elements
* `tail(array)`: Takes in an array and returns all but the first element, aka the "tail" of the array
* `takeUntil(array)`: Copies each element of the input array into a new array until an element evaluates to true when passed to the callback function
* `without(array)`: Takes in a source array and an array specifying items to be removed; returns the filtered array



