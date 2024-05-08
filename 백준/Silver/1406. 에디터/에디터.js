const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 문자 단위로 쪼개기
let lStack = input[0].split("");
// 오른쪽 스택 빈 배열
let rStack = [];
// "P" 명령어에서 추가할 문자를 저장할 변수를 초기화합니다.
let ak = "";
for (let i = 2; i < input.length; i++) {
  if (input[i].length === 3) {
    ak = input[i][2];
  }

  switch (input[i][0]) {
    case "L":
      if (lStack.length !== 0) rStack.push(lStack.pop());
      break;
    case "D":
      if (rStack.length !== 0) lStack.push(rStack.pop());
      break;
    case "B":
      if (lStack.length !== 0) lStack.pop();
      break;
    case "P":
      lStack.push(ak);
  }
}

const result = [...lStack, ...rStack.reverse()];
console.log(result.join(""));
