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
  let isAscending = arr[0] <= arr[arr.length - 1] && arr[0] < arr[1];
  let isDescending = arr[0] >= arr[arr.length - 1] && arr[0] > arr[1];
  if (!isAscending && !isDescending) return false;
  if (isAscending) {
  }
  if (isDescending) {
  }
}

function isSafeAscending(arr) {
  let result = arr.every(
    (num, i) =>
      i === arr.length - 1 ||
      (num < arr[i + 1] && Math.abs(num - arr[i + 1]) <= 3)
  );
}
