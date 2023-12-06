import { fetchData, parseData, map, log, sum, pipe, pairwise } from '../utils.js';
const limits = {
    red: 12,
    green: 13,
    blue: 14
};
// * 2317
pipe("./2/2p.txt", fetchData, parseData, map(text => text.split(':')
    .at(1)
    .split(';')
    .flatMap(s => pairwise(s.match(/\d+|green|blue|red/g)))), map(l => l.reduce((acc, [value, color]) => {
    acc[color] = +value + (acc[color] || 0);
    if (value > limits[color])
        acc.status = false;
    return acc;
}, { status: true })), map((s, i) => s.status ? i + 1 : 0), sum, log);
//** 
pipe("./2/2p.txt", fetchData, parseData, map(text => text.split(':')
    .at(1)
    .split(';')
    .flatMap(s => pairwise(s.match(/\d+|green|blue|red/g)))), map(l => l.reduce((acc, [value, color]) => {
    acc[color] = (acc[color] || 0) > +value ? acc[color] : +value;
    return acc;
}, {})), map(s => s.blue * s.green * s.red), sum, log);
