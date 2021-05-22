const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

let eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

/* const flatten = array => {
  const initArray = [...array];
  const midArray = [];

  (function flattenForReal(array) {
    if (array.length !== 0) {
      if (Array.isArray(array[0]) && array[0].length !== 0) {
        flattenForReal(array[0]);
      }
      midArray.push(array.shift());
      flattenForReal(array);
    }
  }(initArray));

  return midArray.filter(currentVal => (!Array.isArray(currentVal)));
}; */

const flatten = array => {
  let returnArray = [];
  for (const thing of array) {
    if (Array.isArray(thing)) {
      const returnedArray = flatten(thing);
      returnArray = returnArray.concat(returnedArray);
    } else (
      returnArray.push(thing)
    )
  }
  return returnArray;
}

assertArraysEqual(flatten([1, [], [1, [1]], [], [1, [1], [[[[[1]]]]]], [1, 1, 1], [[]], []]), [1, 1, 1, 1, 1, 1, 1, 1, 1]);
assertArraysEqual(flatten([1]), [1]);
assertArraysEqual(flatten([]), []);
assertArraysEqual(flatten([1, 1, 1, 1, 1]), [1, 1, 1, 1, 1]);
