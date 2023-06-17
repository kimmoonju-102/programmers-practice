const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.pop();

for (let i = 0; i < input.length; i++) {
  let number = input[i];
  let reverse = input[i].split("").reverse().join("");

  console.log(+number === +reverse ? "yes" : "no");
}
