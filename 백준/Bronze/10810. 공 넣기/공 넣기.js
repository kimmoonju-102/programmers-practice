const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [N, M] = input[0].split(" ").map((item) => +item);
const baskets = Array(N + 1).fill(0);

for (let i = 1; i <= M; i++) {
  const [I, J, K] = input[i].split(" ").map(Number);
  for (let j = I; j <= J; j++) {
    baskets[j] = K;
  }
}

console.log(baskets.slice(1).join(" "));