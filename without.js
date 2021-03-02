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
  let ifTrue;
  for (let testNum of arrayTrim) {
    ifTrue = true;
    for (i = 0; i < arrayThingsToTrim.length; i++) {
      if (testNum === arrayThingsToTrim[i]) {
        ifTrue = false;
      }
    }
    if (ifTrue) {
      newArray.push(testNum);
    }
  }
  return newArray;
}