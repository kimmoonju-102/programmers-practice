const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [N, M] = input[0].split(" ").map((item) => +item);
const basket = [];

for (let i = 0; i < N; i++) {
  basket.push(i + 1);
}

for (let i = 0; i < M; i++) {
  const [I, J] = input[i + 1].split(" ").map((item) => +item);
  let temp = basket[I - 1];
  basket[I - 1] = basket[J - 1];
  basket[J - 1] = temp;
}

console.log(basket.join(" "));