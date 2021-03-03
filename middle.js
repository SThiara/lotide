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

let middle = function(arrayMid) {
  let returnArray = [];
  if (arrayMid.length < 3) {
    return returnArray;
  }
  if (arrayMid.length % 2 !== 0) {
    returnArray.push(arrayMid[Math.floor(arrayMid.length / 2)]);
  } else {
    returnArray.push(arrayMid[(arrayMid.length / 2) - 1]);
    returnArray.push(arrayMid[(arrayMid.length / 2)]);
  }
  return returnArray;
}