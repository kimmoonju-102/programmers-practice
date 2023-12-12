const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input[0]);

function solution(S) {
  let answerArray = new Array(26).fill(-1); // 26개의 배열을 -1로 채운다.
  for (let i = 0; i < S.length; i++) {
    let nowChar = S[i]; // 꺼내진 하나의 문자는 nowChar에 들어간다.
    let answerArrayIdx = nowChar.charCodeAt() - 97;
    if (answerArray[answerArrayIdx] === -1) {
      answerArray[answerArrayIdx] = i;
    }
  }

  let answer = "";
  for (let i = 0; i < answerArray.length; i++) {
    answer += answerArray[i] + " ";
  }
  console.log(answer);
}