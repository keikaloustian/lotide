const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  
  it("tail doesn't mutate input array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);   
    assert.strictEqual(words.length, 3);
  });

  it("returns [2, 3, 4, 5] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

});
