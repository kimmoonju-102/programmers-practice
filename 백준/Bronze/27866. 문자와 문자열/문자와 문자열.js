const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const words = input[0];
const index = Number(input[1]);

console.log(words[index - 1]);