
import { fetchData, match, parseData, split, map, log, find, sum, join, reduce, pipe, pairwiseEach, pairwise, flatMap, at, pipec, compose, take, filter } from '../utils.js';

type Point = [number, number];

interface NNumber {
  points: Point[],
  valid: boolean,
  value: string;
  isSign: boolean;
}

const createPoints = (value: string, index: number, row: number, isSign: boolean): NNumber => ({
  isSign,
  value,
  points: Array(value.length).fill('.').map((_, i) => [i + index, row]),
  valid: false,
})

const isAdjacent = ([x1, y1]: Point) => ([x2, y2]: Point) => Math.abs(x2 - x1) <= 1 && Math.abs(y2 - y1) <= 1;

// * too low 397667
pipe(
  "./3/3p.txt",
  fetchData,
  parseData,
  map(s => [[...s.matchAll(/\d+/g)], [...s.matchAll(/[^\d.]/g)]]),
  map(([n = [], s = []], row) => [...n.map(n => createPoints(n[0], n.index, row, false)), ...s.map(s => createPoints(s[0], s.index, row, true))]),
  nnumbers => nnumbers.reduce((acc, row, rowIndex) => {
    const numbersPoints = [rowIndex - 1, rowIndex, rowIndex + 1].flatMap(r => (nnumbers.at(r) || []).filter(n => !n.isSign));
    const possibleAdjecentSymbolPoints = (nnumbers.at(rowIndex) || []).filter(n => n.isSign).flatMap(s => s.points);
    return [...acc, ...numbersPoints.filter(n => n.points.some(p => possibleAdjecentSymbolPoints.some(isAdjacent(p))))];
  }, <NNumber[]>[])
  ,
  map(n => +n.value),
  sum,
  log
);


// ** 2578789 too low
// 72514855
pipe(
  "./3/3p.txt",
  fetchData,
  parseData,
  map(s => [[...s.matchAll(/\d+/g)], [...s.matchAll(/[^\d.]/g)]]),
  map(([n = [], s = []], row) => [...n.map(n => createPoints(n[0], n.index, row, false)), ...s.map(s => createPoints(s[0], s.index, row, true))]),
  reduce((acc, _, rowIndex, nnumbers) => {
    const numbersPoints = [rowIndex - 1, rowIndex, rowIndex + 1].flatMap(r => (nnumbers.at(r) || []).filter(n => !n.isSign));
    const possibleAdjecentSymbolPoints = (nnumbers.at(rowIndex) || []).filter(n => n.isSign).flatMap(s => s.points);
    const isSymbolPointAdjacent = (s: Point) => numbersPoints.filter(n => n.points.some(isAdjacent(s)));
    return [
      ...acc,
      ...possibleAdjecentSymbolPoints.map((s, _, __, symbolPointIsAdjacent = isSymbolPointAdjacent(s)) =>
        symbolPointIsAdjacent.length > 1 ? symbolPointIsAdjacent : [])
    ];
  }, <NNumber[][]>[]),

  filter(s => !!s.length),
  map(reduce((acc, cur) => acc * (+cur.value), 1)),
  sum,
  log
);

