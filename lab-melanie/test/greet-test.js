'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function() {
  describe('#function', function() {
    it('should return Hello world', function() {
      var result = greet('world');
      assert.ok(result === 'Hello world', 'not equal to Hello world');
    });
    it('should return null if input is not a string', function() {
      assert.throws(function() {
        greet(2);
      }, 'error not thrown');
    });
  });
});