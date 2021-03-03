const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

let countLetters = function(sentence) {
  if (typeof sentence === 'string') {
    let returnCount = {};
    for (let letter of sentence) {
      if (letter !== " ") {
        if (returnCount[letter]) {
          returnCount[letter] += 1;
        } else {
          returnCount[letter] = 1;
        }
      }
    }
    return returnCount;
  }
};

console.log(countLetters("this is a longer test, I forgot not to count spaces"));