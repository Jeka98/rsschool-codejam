const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./sumOfOther/sumOfOther.js');
const make = require('./make/make.js');

describe('sumOfOther', () => {
  it('1', () => {
    const array = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(array, [8, 7, 6, 9]);
  });

  it('2', () => {
    const array = sumOfOther([2, 6, 1]);
    assert.deepEqual(array, [7, 3, 8]);
  });

  it('3', () => {
    const array = sumOfOther([4, 0, 2, 8]);
    assert.deepEqual(array, [10, 14, 12, 6]);
  });

  it('4', () => {
    const array = sumOfOther([-1, 4, 9]);
    assert.deepEqual(array, [13, 8, 3]);
  });
});

describe('make', () => {

  function sum(a, b) {
    return a + b;
  }

  it('1', () => {
    assert.strictEqual(make(15)(34, 21, 666)(41)(sum), 777);
  });

  it('2', () => {
    assert.strictEqual(make(4)(34, 12)(45, 76, 90)(sum), 261);
  });

  it('3', () => {
    assert.strictEqual(make(1)(2)(3)(sum), 6);
  });
  it('4', () => {
    assert.strictEqual(make(10)(20)(60, 32)(1)(sum), 123);
  });
});