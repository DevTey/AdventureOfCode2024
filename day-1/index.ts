import { readFileSync } from "fs";
import { resolve } from "path";

const inputPath = resolve(__dirname, "input.txt");
const content = readFileSync(inputPath, "utf-8");

let leftSide: number[] = [];
let rightSide: number[] = [];

const lines = content.split("\r\n");
lines.map((lineContent, i) => {
  leftSide.push(parseFloat(lineContent.split("   ")[0]));
  rightSide.push(parseFloat(lineContent.split("   ")[1]));
});

const result: number[] = [];

for (let i = 0; i < leftSide.length; i++) {
  const filtered = rightSide.filter((n) => n === leftSide[i]);
  const hasRepeat = filtered.length > 0;

  if (!hasRepeat) result.push(0);
  if (hasRepeat) result.push(leftSide[i] * filtered.length);
}

console.log(result.reduce((sum, acc) => sum + acc, 0));

// console.log(filtered.length);
