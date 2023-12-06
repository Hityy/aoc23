import { fetchData, parseData, pipe, split, map, log, find, sum, join } from '../utils.js';

const replicate = <T>(map1 = (t: T[]) => t, map2 = (t: T[]) => t) => (list: T[]) => [map1(list), map2(list)];
const copyReverse = <T>(list: T[]) => list.slice().reverse();

// *
pipe(
    "./1/1p.txt",
    fetchData,
    parseData,
    map(split('')),
    map(replicate(void 0, copyReverse)),
    map(map(find(Number))),
    map(join('')),
    sum,
    log
);



// 55381 too high
// 55340 too low
// 55358 right
// 29, 83, 13, 24, 42, 14, 76
// **

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
}

const digits = Object.entries(valuesDict).flatMap(e => e);

const matchDigits = (text: string, digits: string[]) => digits.reduce((acc, digit) => {
    let index = text.indexOf(digit);
    while (index > -1) {
        acc.push({ index, digit });
        index = text.indexOf(digit, index + 1);
    }
    return acc;
}, []);


pipe(
    "./1/1p.txt",
    fetchData,
    parseData,
    map((s: string) => matchDigits(s.toLowerCase(), digits).sort((a, b) => a.index - b.index).map(s => valuesDict[s.digit] || s.digit)),
    map((s: string) => s.at(0) + s.at(-1)),
    sum,
    log
);

