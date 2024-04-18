const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");


const T = +input.shift();

function solution(T, arr) {
  let cnt = 1;
  const result = [];

  for (let i = 0; i < T; i++) {
    const stack = [];
    const sentence = arr[i].split(" ");

    for (let j = 0; j < sentence.length; j++) {
      const word = sentence[j];

      for (let k = 0; k < word.length; k++) {
        const char = word[k];
        stack.push(char);
      }

      for (let k = 0; k < word.length; k++) {
        result.push(stack.pop());
      }
      result.push(" ");
    }

    if (T > cnt) {
      result.push("\n");
      cnt++;
    }
  }
  return result.join("");
}
console.log(solution(T, input));