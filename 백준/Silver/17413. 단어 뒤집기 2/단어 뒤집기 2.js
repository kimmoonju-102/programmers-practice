const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let str = input[0]; 
let ans = "";
let temp = "";
let tag = ">";

for (let a of str) {
  if (a === "<") {
    tag = "<";
    ans += temp.split("").reverse().join("") + a;
    temp = "";
  } else if (a === ">") {
    tag = ">";
    ans += temp + a;
    temp = "";
  } else if (a === " ") {
    if (tag === "<") {
      ans += temp;
    } else {
      ans += temp.split("").reverse().join("");
    }
    ans += " ";
    temp = "";
  } else {
    temp += a;
  }
}
ans += temp.split("").reverse().join("");
console.log(ans);
