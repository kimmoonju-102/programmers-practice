const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);

solution(input[0], input[1]);


function solution(H, M){
    M -= 45; // -1분
    if(M < 0) {
        M += 60;
        H -= 1; // 시간에서 1분을 빌려옴
      }
      if(H < 0){ //예를들어 0시 였으면 -1시 = 23시
        H = 23;
      }
  console.log(H, M);
}