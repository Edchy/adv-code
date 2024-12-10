const fs = require("fs");

// Read and process the file
const fileContent = fs.readFileSync("adv2.txt", "utf8");
const sequences = fileContent
  .trim() // Remove any trailing whitespace
  .split("\n") // Split into lines
  .map(
    (line) =>
      line
        .trim() // Remove whitespace from each line
        .split(/\s+/) // Split line into numbers
        .map(Number) // Convert strings to numbers
  );
let result = 0;
sequences.forEach((sequence) => (result += isSafe(sequence) ? 1 : 0));
console.log(result);

function isSafe(arr) {
  if (x(arr) || y(arr)) return true;
  for (let idx = 0; idx < arr.length; idx++) {
    if (x(arr, idx) || y(arr, idx)) return true;
  }

  return false;
}

function x(arr, index) {
  let filtered =
    index !== undefined ? arr.filter((_, i) => i !== index) : [...arr];

  return filtered.every(
    (num, i) =>
      i === filtered.length - 1 ||
      (num < filtered[i + 1] && Math.abs(num - filtered[i + 1]) <= 3)
  );
}
function y(arr, index) {
  let filtered =
    index !== undefined ? arr.filter((_, i) => i !== index) : [...arr];

  return filtered.every(
    (num, i) =>
      i === filtered.length - 1 ||
      (num > filtered[i + 1] && Math.abs(num - filtered[i + 1]) <= 3)
  );
}
