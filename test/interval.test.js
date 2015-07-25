var interval = require('../lib/interval');

var assert = require('assert');

describe('Interval', function () {
  describe('#create', function () {
    it('should create an interval', function () {
      assert.equal(interval.create(4, 'P').name, 'P4');
      assert.equal(interval.create(4, 'P').number, 4);
      assert.equal(interval.create(4, 'P').quality, 'P');
      assert.equal(interval.create(4, 'P').fullName, 'Perfect Fourth');

      assert.equal(interval.create(10, 'M').name, 'M10');
      assert.equal(interval.create(10, 'M').fullName, 'Major Tenth');

      assert.equal(interval.create(7, 'd').name, 'dim7');
      assert.equal(interval.create(7, 'dim').name, 'dim7');
      assert.equal(interval.create(7, 'dim').fullName, 'Diminished Seventh');
    });

    it('should reject an invalid interval', function () {
      assert.throws(function () {
        interval.create(7, 'P');
      });

      assert.throws(function () {
        interval.create(5, 'm');
      });
    });
  });

  describe('#parse', function () {
    it('should parse a string and create an interval object', function() {
      assert.equal(interval.parse('P4').name, 'P4');
      assert.equal(interval.parse('4').name, 'P4');
      assert.equal(interval.parse('3').name, 'M3');
      assert.equal(interval.parse('perf12').name, 'P12');

      assert.equal(interval.parse(interval.create(4, 'P')).name, 'P4');
    });
  });
});