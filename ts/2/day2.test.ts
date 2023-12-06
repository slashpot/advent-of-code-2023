import {expect, test} from "vitest";
import * as fs from "fs";
import {cube, cube2} from "./day2";

test('case 1', ()=>{
    fs.readFile("./2/input.txt","utf-8", (err, data) => {
        const inputs = data.split('\n').filter(x=>x!=="");
        expect(cube(inputs)).toBe(2771);
    })
})

test('case 2', ()=>{
    fs.readFile("./2/input.txt","utf-8", (err, data) => {
        const inputs = data.split('\n').filter(x=>x!=="");
        expect(cube2(inputs)).toBe(24531);
    })
})