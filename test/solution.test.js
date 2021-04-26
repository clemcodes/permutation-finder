var solution = require('../solution');

var assert = require('assert');

describe('solution', function() {

    it('throw an error message if the input doesn\'t contain any integers', function() {
      assert.throws(() => {solution('ABC')}, Error);
      assert.throws(() => {solution('abc!')}, Error);
    });

    it('should return single number', function() {
      assert.strictEqual(solution('1'), '1');
    });

    it('should work for two digits', function() {
      assert.strictEqual(solution('12'), '21,12');
    });

    it('should work for three digits', function() {
      assert.strictEqual(solution('326'), '632,623,362,326,263,236');
    });

    it('should work for more than three digits', function() {
      assert.strictEqual(solution('3261'), '6321,6312,6231,6213,6132,6123,3621,3612,3261,3216,3162,3126,2631,2613,2361,2316,2163,2136,1632,1623,1362,1326,1263,1236');
    });

    it('should return distinct permutations only', function() {
      assert.strictEqual(solution('333'), '333');
      assert.strictEqual(solution('332'), '332,323,233');
    });

    it('should extract integers only', function() {
      assert.strictEqual(solution('A 3B2 C6D'), '632,623,362,326,263,236');
    });

});