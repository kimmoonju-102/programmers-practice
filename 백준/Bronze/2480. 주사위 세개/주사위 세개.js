const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

const numbers = function (a, b, c) {
  let result = 0;
  if (a === b && b === c) {
    result = 10000 + a * 1000;
  } else if (a === b) {
    result = 1000 + a * 100;
  } else if (b === c) {
    result = 1000 + b * 100;
  } else if (a === c) {
    result = 1000 + a * 100;
  } else {
    result = Math.max(a, b, c) * 100;  
  }
  console.log(result);
};
numbers(a, b, c);