const fs = require("fs");

const fileContent = fs.readFileSync("adv3.txt", "utf8");

function conditionalMulMatch(inputString) {
  const results = [];
  let isEnabled = true;
  let skipMode = false;

  const tokens = inputString.match(/do\(\)|don't\(\)|mul\(\d+,\d+\)/g);

  if (!tokens) return results;

  for (const token of tokens) {
    if (token === "do()") {
      isEnabled = true;
      skipMode = false;
    } else if (token === "don't()") {
      skipMode = true;
      isEnabled = false;
    } else if (token.startsWith("mul(") && isEnabled && !skipMode) {
      results.push(token);
    }
  }

  return results;
}
let result = 0;
console.log(conditionalMulMatch(fileContent));

conditionalMulMatch(fileContent).forEach(
  (f) => (result += createMulFunction(f)())
);

function createMulFunction(mulString) {
  const args = mulString
    .match(/mul\(([^)]*)\)/)[1]
    .split(",")
    .map(Number);
  return new Function("return " + args[0] + " * " + args[1]);
}
console.log("result", result);
