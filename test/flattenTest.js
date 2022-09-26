const assert = require('chai').assert;
const flatten   = require('../flatten');

describe("#flatten", () => {
  
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns ['Hello', 5, 'Lighthouse', 'Labs', 'Hello', 'World'] for ['Hello', 5, 'Lighthouse', 'Labs', ['Hello', 'World']]", () => {
    assert.deepEqual(flatten(['Hello', 5, 'Lighthouse', 'Labs', ['Hello', 'World']]), ['Hello', 5, 'Lighthouse', 'Labs', 'Hello', 'World']);
  });

});
