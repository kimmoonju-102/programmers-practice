const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const newInput = input.map((item) => item.split(" "));
const len = input.shift();
const stack = [];
const result = [];

for (let i = 0; i < len; i++) {
  switch (input[i]) {
    case "pop":
      result.push(stack.pop() || -1);
      break;
    case "size":
      result.push(stack.length);
      break;
    case "empty":
      result.push(stack[0] ? 0 : 1);
      break;

    case "top":
      result.push(stack[stack.length - 1] || -1);
      break;

    default:
      stack.push(input[i].split(" ")[1]);
      break;
  }
}

console.log(result.join("\n"));