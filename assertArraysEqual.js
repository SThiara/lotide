const assertEqual = function(actual, expected) {
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

assertEqual([1, 2, 3], [1, 2, 3]);
assertEqual([1, 2, 1], [1, 2, 3]);
assertEqual([1, 2, "3"], [1, 2, 3]);
assertEqual(["1", "2", "3"], ["1", "2", "3"]);