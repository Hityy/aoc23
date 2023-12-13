
import { fetchData, match, parseData, split, map, log, find, sum, join, reduce, pipe, pairwiseEach, pairwise, flatMap, at, pipec, compose, intersect, filter, take, trim } from '../utils.js';

const length = <T extends { length: number }>(l: T) => l.length;
const is = <T>(s: T) => !!s;
const isLength = compose(length, is);

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


// **

pipe(
  "./4/4p.txt",
  fetchData,
  parseData,
  map(compose(split(':'), at(1), split('|'), map(l => l.trim().split(' ').filter(isLength)))),
  map(intersect),
  filter(isLength),
  // log
);




