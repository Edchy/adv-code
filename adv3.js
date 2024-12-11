const fs = require("fs");

const fileContent = fs.readFileSync("adv3.txt", "utf8");

const regex = /mul\(\d+,\d+\)/g;
const match = fileContent.match(regex);
const mulFunctions = Array.from(match);
let result = 0;

mulFunctions.forEach((f) => (result += createMulFunction(f)()));

function createMulFunction(mulString) {
  const args = mulString
    .match(/mul\(([^)]*)\)/)[1]
    .split(",")
    .map(Number);
  return new Function("return " + args[0] + " * " + args[1]);
}
console.log("result", result);
