const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const items = input.map((item) => +item);

solution(items);

function solution(items) {
  const num = items[0] * items[1] * items[2];
  const strNum = String(num);

  const answer = Array(10).fill(0);
  // for문으로 각 자리수 꺼내기
  for (let i = 0; i < strNum.length; i++) {
    const nowChar = +strNum[i];
    answer[nowChar]++;
  }
  // 줄바꿈
  for (let i = 0; i < answer.length; i++) {
    console.log(answer[i]);
  }
}
