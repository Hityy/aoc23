import { fetchData, map, parseData, pipe } from "../utils";
import assert from "assert";
var Direction;
(function (Direction) {
    Direction["R"] = "R";
    Direction["U"] = "U";
    Direction["L"] = "L";
    Direction["D"] = "D";
})(Direction || (Direction = {}));
const getDimensions = (directions) => directions.reduce((a, [dir, value]) => {
    switch (dir) {
        case Direction.R:
            a.x += value;
            return a;
        // case Direction.L: a.x = a.x - value; break;
        case Direction.U:
            a.y += value;
            return a;
        // case Direction.D: a.y -= value; break;
    }
    return a;
}, { y: 0, x: 0 });
// [x,y]
export const range = ([starValue, endValue]) => {
    const decrement = endValue < starValue;
    if (decrement)
        [endValue, starValue] = [starValue, endValue];
    return Array.from({ length: endValue - starValue }, (_, i) => decrement ? endValue - i : i);
};
const traverseStepByStep = ([dir, value], startPosition) => {
};
const headTravers = ([dir, value], startPosition) => {
    let endDirection = [...startPosition];
    console.log(dir, value);
    switch (dir) {
        case Direction.R: {
            endDirection[0] += value;
            break;
        }
        case Direction.L: {
            endDirection[0] -= value;
            break;
        }
        case Direction.U: {
            endDirection[1] += value;
            break;
        }
        case Direction.D: {
            endDirection[1] -= value;
            break;
        }
    }
    return endDirection;
};
const headTraversAll = (directions, traverseHistory = [[0, 0]]) => {
    // const endDirection = ;
    return directions.length ? headTraversAll(directions.slice(1), [...traverseHistory, headTravers(directions[0], traverseHistory.at(-1))])
        : traverseHistory;
};
pipe('./9/9t.txt', fetchData, parseData, (source) => source.map(s => s.split(' ')), map(([d, v]) => [d, parseInt(v)]));
const range1 = range([15, 10]);
console.log(range1);
assert.equal(range1, [15, 14, 13, 12, 11]);
