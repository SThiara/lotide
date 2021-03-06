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
  for (i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}

let without = function(arrayTrim, arrayThingsToTrim) {
  let newArray = [];
  let shouldKeep;
  for (let testNum of arrayTrim) {
    shouldKeep = true;
    for (let thingToTrim of arrayThingsToTrim) {
      if (testNum === thingToTrim) {
        shouldKeep = false;
      }
    }
    if (shouldKeep) {
      newArray.push(testNum);
    }
  }
  return newArray;
}