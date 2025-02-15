const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  const rows = matrix.length,
        columns = matrix[0].length,
        result = [],
        offsets = [-1, 0, 1];
  
  for (let row = 0; row < rows; row++) {
    const newRow = [];
    for (let col = 0; col < columns; col++) {
      let count = 0;
      for (let rowOffset of offsets) {
        for (let colOffset of offsets) {
          const r = row + rowOffset,
                c = col + colOffset;
          if (r >= 0 && r < rows && c >= 0 && c < columns && !(rowOffset === 0 && colOffset === 0)) count += matrix[r][c];
        }
      }
      newRow.push(count);
    }
    result.push(newRow);
  }
  
  return result;
}

module.exports = {
  minesweeper
};
