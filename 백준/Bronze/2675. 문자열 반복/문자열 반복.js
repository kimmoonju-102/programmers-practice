const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const num1 = input.shift();

for (let i = 0; i < num1; i++) {
    let answer = '';
    
    const [rsArray, str] = input[i].split(" ");
    
    for (let j = 0; j < str.length; j++) {
        answer += str[j].repeat(rsArray);
    }
    
    console.log(answer);
}