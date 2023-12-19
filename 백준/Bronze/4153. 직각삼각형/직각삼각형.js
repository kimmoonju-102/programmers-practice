const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.splice(-1);
var testcase = input.map((a) => a.split(" ").map(Number).sort((a,b)=>a-b));

testcase.forEach((a) =>
  a[0] * a[0] + a[1] * a[1] == a[2] * a[2]
    ? console.log("right")
    : console.log("wrong")
);
