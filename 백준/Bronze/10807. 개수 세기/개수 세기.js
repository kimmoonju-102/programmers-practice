const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, S, V] = input;

const cnt = S.split(" ").filter((ele) => ele == V).length;

console.log(cnt);