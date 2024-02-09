
import { fetchData, match, parseData, split, map, log, find, sum, join, reduce, pipe, pairwiseEach, pairwise, flatMap, at, pipec, compose, intersect, filter, take, trim } from '../utils.js';

const count = <T extends { length: number }>(l: T) => l.length;
const is = <T>(s: T) => !!s;
const isLength = compose(count, is);

// *
// 31905 too high
// 21158 right
pipe(
  "./4/4p.txt",
  fetchData,
  parseData,
  map(
    compose(split(':'), at(1), split('|'),
      map(compose(trim, split(' '), filter(isLength)))
    )),
  map(intersect),
  filter(isLength),
  reduce((acc, cur) => acc.concat(Math.pow(2, cur.length - 1)), []),
  sum,
  log
);


// fillListWithCardOccurence
const wstyd = (acc: number[], cur: [string[], string[]], index: number) => {
  acc[index] = (acc[index] || 0) + 1;
  for (let i = index + 1; i <= count(intersect(cur)) + index; i++)
    for (let j = 0; j < acc[index]; j++)
      acc[i] = (acc[i] || 0) + 1;

  return acc;
}


// map(compose(split(':'), at(1), split('|'), map(l => l.trim().split(' ').filter(isLength)))),


// **
pipe(
  "./4/4p.txt",
  fetchData,
  parseData,
  map(
    compose(split(':'), at(1), split('|'),
      map(compose(trim, split(' '), filter(isLength)))
    )),
  reduce(wstyd, []),
  sum,
  log
);


