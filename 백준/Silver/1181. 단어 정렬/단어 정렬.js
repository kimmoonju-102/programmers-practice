const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift());

input.sort((a, b) => {
  return a.length - b.length || a.localeCompare(b);
});

const set = new Set(input);

console.log(Array.from(set).join("\n"));