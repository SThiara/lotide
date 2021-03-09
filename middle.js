const assertArraysEqual = require('./assertArraysEqual');

const eqArrays = require('./eqArrays');

const middle = function(arrayMid) {
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

module.exports = middle;