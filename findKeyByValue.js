const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

let findKeyByValue = function(objectToSift, value) {
  let firstKey;
  for (let thing in objectToSift) {
    if (objectToSift[thing] === value) {
      firstKey = thing;
    }
  }
  return firstKey;
};