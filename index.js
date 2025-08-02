"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var inputPath = (0, path_1.resolve)(__dirname, "input.txt");
var content = (0, fs_1.readFileSync)(inputPath, "utf-8");
var leftSide = [];
var rightSide = [];
var lines = content.split("\r\n");
lines.map(function (lineContent, i) {
    leftSide.push(parseFloat(lineContent.split("   ")[0]));
    rightSide.push(parseFloat(lineContent.split("   ")[1]));
});
var result = [];
var _loop_1 = function (i) {
    var filtered = rightSide.filter(function (n) { return n === leftSide[i]; });
    var hasRepeat = filtered.length > 0;
    if (!hasRepeat)
        result.push(0);
    if (hasRepeat)
        result.push(leftSide[i] * filtered.length);
};
for (var i = 0; i < leftSide.length; i++) {
    _loop_1(i);
}
console.log(result.reduce(function (sum, acc) { return sum + acc; }, 0));
// console.log(filtered.length);
