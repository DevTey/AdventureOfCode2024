"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var debbuging = false;
var logDebugging = function () {
    var message = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        message[_i] = arguments[_i];
    }
    debbuging ? console.log.apply(console, message) : null;
};
var inputPath = (0, path_1.resolve)(__dirname, "input.txt");
var content = (0, fs_1.readFileSync)(inputPath, "utf-8");
var lines = content.split("\r\n");
var logs = [];
var safeLogs = [];
var handleTypeAndDiff = function (type, diff) {
    var isSafe = true;
    if (type === "ASC" && diff > 3) {
        isSafe = false;
    }
    if (type === "ASC" && diff <= 0) {
        isSafe = false;
    }
    if (type === "DESC" && diff < -3) {
        isSafe = false;
    }
    if (type === "DESC" && diff >= 0) {
        isSafe = false;
    }
    return isSafe;
};
lines.forEach(function (line, i) {
    var log = line.split(" ");
    var hasAsc = parseFloat(log[0]) - parseFloat(log[1]) < 0;
    var isSafe = true;
    var type = hasAsc ? "ASC" : "DESC";
    logDebugging(" ");
    logDebugging(" ");
    logDebugging(" ");
    logDebugging("Nova linha:", i + 1);
    logDebugging("Tipo:", type);
    log.forEach(function (n, idx) {
        var next = parseFloat(log[idx + 1]);
        var current = parseFloat(n);
        var diff = next - current;
        isSafe = handleTypeAndDiff(type, diff);
    });
    if (isSafe) {
        logDebugging("É seguro");
        safeLogs.push(log);
    }
    //   if (!isSafe) {
    //     console.log("Não é seguro:", log);
    //   } else {
    //     console.log("É seguro:", log);
    //   }
});
console.log(safeLogs.length);
