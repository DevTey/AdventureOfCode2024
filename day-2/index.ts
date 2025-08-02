import { readFileSync } from "fs";
import { resolve } from "path";

let debbuging = false;

const logDebugging = (...message: any) => {
  debbuging ? console.log(...message) : null;
};

const inputPath = resolve(__dirname, "input.txt");
const content = readFileSync(inputPath, "utf-8");
const lines = content.split("\r\n");

let logs: string[] = [];
let safeLogs: object[] = [];

lines.forEach((line, i) => {
  const log = line.split(" ");
  const hasAsc = parseFloat(log[0]) - parseFloat(log[1]) < 0;

  let isSafe: boolean = true;
  let type = hasAsc ? "ASC" : "DESC";

  logDebugging(" ");
  logDebugging(" ");
  logDebugging(" ");

  logDebugging("Nova linha:", i + 1);
  logDebugging("Tipo:", type);

  log.forEach((n, idx) => {
    const next = parseFloat(log[idx + 1]);
    const current = parseFloat(n);
    const diff = next - current;

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
