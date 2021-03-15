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

const flatten = array => {
  let initArray = [...array];
  let midArray = [];
  let finalArray = [];

  (function flattenForReal(array) {
    if (array.length !== 0) {
      if (Array.isArray(array[0]) && array[0].length !== 0) {
        flattenForReal(array[0]);
      }
      midArray.push(array.shift());
      flattenForReal(array);
    }
  }(initArray));

  midArray.forEach(index => {
    if (!Array.isArray(index)) {
      finalArray.push(index);
    }
  });

  return finalArray;
};

assertArraysEqual(flatten([[], [1, [1]], [], [1, [1], [[[[[1]]]]]], [1, 1, 1], [[]], []]), [1, 1, 1, 1, 1, 1, 1, 1]);
assertArraysEqual(flatten([1]), [1]);
assertArraysEqual(flatten([]), []);
