const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = input.map((item) => +item);
const x = [];

for (let i = 1; i < 31; i++) {
  if (N.includes(i)) continue; 
  x.push(i);
}

x.sort((a, b) => a - b);
console.log(`${x[0]}\n${x[1]}`);
