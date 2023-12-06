// sum.test.js
import { expect, test } from "vitest";
import * as fs from "fs";
import {trebuchet} from "./day1";

// sum.js

test("case 1", () => {
  const inputs = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];
  expect(trebuchet(inputs)).toBe(142);
});

test("case 2", () => {
  fs.readFile("./1/input.txt","utf-8", (err, data) => {
    const inputs = data.split('\n').filter(x=>x!=="");
    expect(trebuchet(inputs)).toBe(54728);
  })
});
