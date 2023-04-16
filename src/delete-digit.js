const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  const string = n.toString();
  let max = -Infinity;
  for (let i = 0; i < string.length; i++) {
    const number = parseInt(string.slice(0, i) + string.slice(i+1));
    max = Math.max(max, number);
  }
  return max;
}

module.exports = {
  deleteDigit
};
