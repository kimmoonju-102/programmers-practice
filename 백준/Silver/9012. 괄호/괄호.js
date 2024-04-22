const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
  const cases = input[i];
  const stack = [];
  let result = "YES";

  for (let j = 0; j < cases.length; j++) {
    if (cases[j] === "(") {
      stack.push(1);
    } else {
      if (!stack.pop()) {
        result = "NO";
        break;
      }
    }
  }

  if (stack.length !== 0) {
    result = "NO";
  }

  console.log(result);
}
