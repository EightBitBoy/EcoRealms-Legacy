var assert = require('chai').assert;

describe('FooBar', function() {
  describe('index', function () {
    it('should work', function () {
      assert.equal(4, [1,2,3,4,5,6,7].indexOf(5));
    });
    it('should fail', function () {
      assert.equal(-1, [1,2,3,4,5,6,7].indexOf(10));
    });
  });
});
