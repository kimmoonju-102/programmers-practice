const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(n) {
  let sum = 0;
  for(let i = 1; i <= n; ++i){
    sum += i;
  }
  console.log(sum);
}