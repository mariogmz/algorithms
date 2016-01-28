var matching = require('./balanced.js');
var assert = require('assert');

describe('matching', function () {

  describe('#balanced()', function () {
    it('should say "YES" if input matches', function () {
      var input = '(([{[]([()({[[()()]]})]{})[]}]))';
      assert.equal(matching.balanced(input), 'YES');
      var input = '({{{[[()]]}}}){([{}])}';
      assert.equal(matching.balanced(input), 'YES');
    });

    it('should say "NO" if input does not match', function () {
      var input = '(}()][])[([]{[]})]';
      assert.equal(matching.balanced(input), 'NO');
    });
  });

});