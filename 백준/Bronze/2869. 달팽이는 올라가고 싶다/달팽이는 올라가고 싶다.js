const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

const A = input[0];
const B = input[1];     
const V = input[2];     

console.log(Math.ceil((V - B) / (A - B)));