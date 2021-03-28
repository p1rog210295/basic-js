const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let newString = '';
    let repeatTimes = options.repeatTimes;
    let separator = options.separator;
    let addition = options.addition;
    let additionRepeatTimes = options.additionRepeatTimes;
    let additionSeparator = options.additionSeparator;

    if (typeof separator === 'undefined') {
        separator = '+'
    }
    if (typeof additionSeparator === 'undefined') {
        additionSeparator = '|';
    }
    if (typeof addition === 'undefined') {
        addition = '';
    }
    if (typeof repeatTimes === 'undefined') {
        repeatTimes = 1;
    }
    if (typeof additionRepeatTimes === 'undefined') {
        additionRepeatTimes = 1;
    }

    for (let i = 0; i < repeatTimes; i++) {
        if (i === repeatTimes - 1) {
            newString = newString + str + (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;
        } else {
            newString = newString + str + (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition + separator;
        }
    }

    return newString;
};