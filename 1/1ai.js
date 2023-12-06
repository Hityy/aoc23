"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = exports.fetchData = void 0;
const fs = __importStar(require("fs"));
// const input = `1000
// 2000
// 3000
// 4000
// 5000
// 6000
// 7000
// 8000
// 9000
// 10000`;
const fetchData = (path) => fs.readFileSync(path);
exports.fetchData = fetchData;
const input = () => (0, exports.fetchData)("./1/1p.txt").toString().split('\n');
exports.input = input;
const calorieCounts = [];
let currentElf = 0;
(0, exports.input)().forEach(line => {
    if (line === '') {
        currentElf++;
    }
    else {
        calorieCounts[currentElf] = calorieCounts[currentElf] ? calorieCounts[currentElf] + parseInt(line, 10) : parseInt(line, 10);
    }
});
const maxCalories = Math.max(...calorieCounts);
console.log(`Elf carrying the most Calories: Elf #${calorieCounts.indexOf(maxCalories) + 1}`);
console.log(`Total Calories carried: ${maxCalories}`);
