const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input);

let M = 0;
for (let i = 0; i < N; i++) {
  let sum = 0;
  const candidateValue = i;
  const stringValue = candidateValue.toString();

  for (let j = 0; j < stringValue.length; j++) {
    sum += parseInt(stringValue[j]);
  }

  sum += candidateValue;

  if (sum == N) {
    M = candidateValue;
    break;
  }
}

console.log(M);