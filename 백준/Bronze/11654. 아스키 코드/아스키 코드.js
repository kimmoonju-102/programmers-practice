const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input[0]);

function solution(char) {
  console.log(char.charCodeAt());
}
