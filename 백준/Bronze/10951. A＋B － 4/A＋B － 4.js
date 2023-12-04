const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCaseArray = [];
for (let i = 0; i < input.length; ++i) {
  const tempValue = input[i].split(" ").map((item) => +item);
  testCaseArray.push({ A: tempValue[0], B: tempValue[1] });
  if (tempValue[0] === 0 && tempValue[1] === 0) {
    break;
  }
}
solution(testCaseArray);

function solution(testCaseArray) {
  let idx = 0;
  let A = 0;
  let B = 0;
  while (idx !== testCaseArray.length) {
    A = testCaseArray[idx].A;
    B = testCaseArray[idx].B;
    console.log(A + B);
    idx++;
  }
}
