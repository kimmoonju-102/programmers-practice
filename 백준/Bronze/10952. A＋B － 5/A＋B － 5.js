const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCaseArray = [];
for (let i = 0; ; ++i) {
  const tempValue = input[i].split(" ").map((item) => +item);
  testCaseArray.push({ A: tempValue[0], B: tempValue[1] });
  if (tempValue[0] === 0 && tempValue[1] === 0) {
    break;
  }
}
solution(testCaseArray);

function solution(testCaseArray) {
  let idx = 1;
  let A = testCaseArray[0].A;
  let B = testCaseArray[0].B;
  while (A !== 0 || B !== 0) {
    console.log(A + B);
    A = testCaseArray[idx].A;
    B = testCaseArray[idx].B;
    idx++;
  }
}
