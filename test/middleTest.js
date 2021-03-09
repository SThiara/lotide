const assert = require('chai').assert.deepEqual;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns [] for [1, 3]", () => {
    assert(middle([1, 3]), []);
  });
  it("returns ['4'] for ['5', '5', '4', '5', '5']", () => {
    assert(middle(['5', '5', '4', '5', '5']), ['4']); 
  });
  it("returns [6, 8] for [2, 4, 6, 8, 10, 12]", () => {
    assert(middle([2, 4, 6, 8, 10, 12]), [6, 8]); 
  });
});