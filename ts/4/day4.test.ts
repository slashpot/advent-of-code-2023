import {expect, test} from "vitest";
import {day4} from "./day4";
import * as fs from "fs";

test('day 4 case 1', () => {
    fs.readFile("./4/input1.txt","utf-8", (err, data) => {
        const inputs = data.split('\n').filter(x=>x!=="");
        expect(day4(inputs)).toBe(4361);
    })
})
test('day 4 case 2', () => {
    fs.readFile("./4/input2.txt","utf-8", (err, data) => {
        const inputs = data.split('\n').filter(x=>x!=="");
        expect(day4(inputs)).toBe(617);
    })
})
test('day 4 case 3', () => {
    fs.readFile("./4/input3.txt","utf-8", (err, data) => {
        const inputs = data.split('\n').filter(x=>x!=="");
        expect(day4(inputs)).toBe(532428);
    })
})

test('day 4 case 4', () => {
    fs.readFile("./4/input4.txt","utf-8", (err, data) => {
        const inputs = data.split('\n').filter(x=>x!=="");
        expect(day4(inputs)).toBe(925);
    })
})