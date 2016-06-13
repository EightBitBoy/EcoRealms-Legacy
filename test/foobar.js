var assert = require('chai').assert;

describe('Array', function() {
  describe('indexOf()', function () {
    it('should find value', function () {
      assert.equal(4, [1,2,3,4,5,6,7].indexOf(5));
    });
    it('should not find value', function () {
      assert.equal(-1, [1,2,3,4,5,6,7].indexOf(10));
    });
  });
});
