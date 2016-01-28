var compval = require('./compval');
var assert = require('assert');

describe('compare string value', function() {
  
  describe('#compareSingle()', function() {
    it('should return input length comparing with itself', function() {
      var input = 'HelloParkingMeter';
      assert.equal(compval.compareSingle(input, input), input.length);
    });
    
    it('should return the amount of matching chars from pos 0', function() {
      var input = 'lolcatz';
      assert.equal(compval.compareSingle(input, 'lol'), 3);
    });
    
    it('should only find matches from beginning', function() {
      var input = 'lolcatz';
      assert.equal(compval.compareSingle(input, 'catz'), 0);
    })
    
    it('should return 0 if initial char does not match', function() {
      var input = 'ILoveCoding';
      assert.equal(compval.compareSingle(input, 'AmoCodear'), 0);
    });
  });

  describe('#compareFull()', function() {
    it('should return 8 with the input "abaab"', function() {
      var input = 'abaab';
      assert.equal(8, compval.compareValue(input));
    });
  });

});