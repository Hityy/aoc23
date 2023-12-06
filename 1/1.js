import { fetchData, parseData, pipe, split, map, log, sum } from '../utils.js';
const valuesDict = {
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9'
};
const digitsAndNumbers = Object.entries(valuesDict).flatMap(e => e);
const numbers = Object.values(valuesDict);
const indexOfMany = (text, searchString, position = 0, results = []) => {
    let index = text.indexOf(searchString, position);
    if (index === -1)
        return results;
    return indexOfMany(text, searchString, index + 1, [...results, { index, searchString: searchString }]);
};
const matchDigits = (text, digits) => digits.reduce((acc, digit) => acc.concat(indexOfMany(text, digit)), []);
// * 56042
pipe("./1/1p.txt", fetchData, parseData, map(split('')), map(s => matchDigits(s, numbers)
    .sort((a, b) => a.index - b.index)
    .map(s => valuesDict[s.searchString] || s.searchString)), map(s => s.at(0) + s.at(-1)), sum, log);
// 55381 too high
// 55340 too low
// 55358 right
// 29, 83, 13, 24, 42, 14, 76
// **
pipe("./1/1p.txt", fetchData, parseData, map(split('')), map(s => matchDigits(s, digitsAndNumbers)
    .sort((a, b) => a.index - b.index)
    .map(s => valuesDict[s.searchString] || s.searchString)), map(s => s.at(0) + s.at(-1)), sum, log);
