const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]);

function solution(n) {
  for (let i = 1; i <= 9; ++i) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}