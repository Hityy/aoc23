import * as fs from 'fs';
export { pipe } from './pipe.js';
export { pipec } from './pipec.js';
export { compose } from './compose.js';
export const fetchData = (path) => fs.readFileSync(path);
export const parseData = (data) => data.toString().split('\n');
// export const pipe = (value, ...fns) => fns.length > 0 ? pipe(fns[0](value), ...fns.slice(1)) : value;
// export const log = console.log.bind(null);
export const log = data => (console.log(data), data);
export const maxBy = predicate => collection => collection.reduce((a, c, i, cc, predicateValue = predicate(c)) => predicateValue > a[0] ? [predicateValue, c] : a, [0, null])[1];
export const substr = str => ([start, end]) => str.slice(start, end + 1);
export const pairwiseEach = collection => collection.reduce((acc, element, index) => [...acc, ...collection.slice(index + 1).map(nextElement => [element, nextElement])], []);
export const sum = (data) => data.reduce((a, c) => a + +c, 0);
//interesction
export const intersect = ([s1, s2], i = 0, c = null, ss1 = new Set(s1), ss2 = new Set(s2)) => [...new Set([...ss1].filter(i => ss2.has(i)))];
// filter
export const filter = (predicate) => (data) => data.filter(predicate);
// map
export const map = (mapFn) => (data) => data.map(mapFn);
// export const map = <T, R>(mapFn: (e: T, i: number, arr: T[]) => R) => (data: T[]): R[] => data.map(mapFn);
export const flatMap = (mapFn) => (data) => data.flatMap(mapFn);
const a = flatMap(a => [1, 2])([1, 2, 3]);
// group by
const groupBy_ = (data, predicate, dataC = data, index = 0, buff = {}, key = predicate(data[0], index)) => data.length > 1 ?
    groupBy_(data.slice(1), predicate, data, index + 1, Object.assign(Object.assign({}, buff), { [key]: [...(buff[key] || []), ...dataC.map((e, i) => [predicate(e, i), e]).filter(([p, e]) => p === key).map(([p, e]) => e)] })) :
    buff;
const groupBy = predicate => data => groupBy_(data, predicate);
//group
export const groupN = (n) => (data, buff = [], res = []) => data.length ?
    buff.length === n ?
        groupN(n)(data.slice(1), [data[0]], [...res, buff]) :
        groupN(n)(data.slice(1), [...buff, data[0]], res)
    : [...res, buff];
export const translateXY = array => array[0].map((_, colIndex) => array.map(row => row[colIndex]));
export const reduce = (reducer, buffer, index = 0) => (list) => index < list.length ?
    reduce(reducer, reducer(buffer, list[index], index, list), index + 1)(list) : buffer;
export const switchCase = (s, ...cbs) => {
    let last = [null, null];
    for (let caseN of cbs) {
        const [r1, r2] = last = caseN(s);
        if (r1)
            return r2;
    }
    return last;
};
export const max = (data) => Math.max(...data);
export const toobject = (data, keySelector, elementSelector = s => s, startValue = {}) => {
    return data.reduce((acc, cur) => {
        const key = keySelector(cur);
        const element = elementSelector(cur);
        acc[key] = element;
        return acc;
    }, startValue);
};
const mapR = (mapper, collection) => collection.reduce((acc, cur) => [...acc, mapper(cur)], []);
export const collect = ([x, ...xs], acc = [], tmp = []) => !!x ?
    collect(xs, acc, [x, ...tmp]) : xs.length ? collect(xs, [tmp, ...acc], []) : [tmp, ...acc];
export const sort = (data) => data.sort((a, b) => b - a);
export const take = (n) => (data) => data.slice(0, n);
export const split = (splitter) => (s) => s.split(splitter);
export const at = (index) => (s) => s.at(index);
export const join = (separator) => (s) => s.join(separator);
export const find = (predicate) => (data) => data.find(predicate);
export const match = (matcher, ...a) => (s) => s.match(matcher);
export const pairwise = (list, accumulator = []) => list.length < 2 ?
    [...accumulator, ...list.length ? [list] : list] :
    pairwise(list.slice(2), accumulator.concat([[list[0], list[1]]]));
