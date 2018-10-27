const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./sumOfOther/sumOfOther.js');

describe("sumOfOther", () => {
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