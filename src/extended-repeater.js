const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let result = '';

  const repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1,
        separator = options.separator !== undefined ? options.separator : '+',
        addition = options.addition !== undefined ? String(options.addition) : '',
        additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1,
        additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|',
        additionStr = (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;

  result = (str + additionStr + separator).repeat(repeatTimes - 1) + str + additionStr;

  return result;
}

module.exports = {
  repeater
};
