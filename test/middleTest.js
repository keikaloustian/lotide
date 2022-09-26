const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  
  it("returns [] for [0]", () => {
    assert.deepEqual(middle([0]), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });

  it("returns [] for [0, 1]", () => {
    assert.deepEqual(middle([0, 1]), []);
  });

  it("returns [1] for [0, 1, 2]", () => {
    assert.deepEqual(middle([0, 1, 2]), [1]);
  });

  it("returns ['b', 'c'] for ['a', 'b', 'c', 'd']", () => {
    assert.deepEqual(middle(['a', 'b', 'c', 'd']), ['b', 'c']);
  });

  it("returns [undefined, null] for [[NaN, NaN, undefined, null, NaN, NaN]", () => {
    assert.deepEqual(middle([NaN, NaN, undefined, null, NaN, NaN]), [undefined, null]);
  });

});