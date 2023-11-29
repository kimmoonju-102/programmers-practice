const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number);

const solution = N => console.log(Math.min(...N), Math.max(...N));

solution(input);