const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

const arr = input[0].split("");
const stk = [];
const len = arr.length;
let ans = 0;

for (let i = 0; i < len; i++) {
  if (arr[i] === "(") {
    stk.push(arr[i]);
  } else {
    if (arr[i - 1] === "(") {
      stk.pop();
      ans += stk.length;
    } else {
      stk.pop();
      ans++;
    }
  }
}
console.log(ans);
