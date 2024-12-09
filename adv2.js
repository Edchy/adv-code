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

let numberOfSafeReports = 0;

sequences.forEach((sequence) => {
  numberOfSafeReports += isValidSequence(sequence) ? 1 : 0;
});
console.log(numberOfSafeReports);
// console.log(sequences);

function isValidSequence(arr) {
  let badIndex = null;

  let ascending = arr[0] < arr[arr.length];
  let descending = arr[0] > arr[arr.length];

  if (ascending) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (!(arr[i] < arr[i + 1] && isCorrectDiff(arr[i], arr[i + 1]))) {
        badIndex = i + 1;
        break;
      }
    }

    if (badIndex !== null) {
      let newArr = arr.filter((_, i) => i !== badIndex);
      console.log(newArr);

      const val = newArr.every(
        (num, index) =>
          index === newArr.length - 1 ||
          (num < newArr[index + 1] && isCorrectDiff(num, newArr[index + 1]))
      );
      return val;
    }
    //
    return true;
  }
  if (descending) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (!(arr[i] > arr[i + 1] && isCorrectDiff(arr[i], arr[i + 1]))) {
        badIndex = i + 1;
        break;
      }
    }

    if (badIndex !== null) {
      let newArr = arr.filter((_, i) => i !== badIndex);
      console.log(newArr);

      const val = newArr.every(
        (num, index) =>
          index === newArr.length - 1 ||
          (num > newArr[index + 1] && isCorrectDiff(num, newArr[index + 1]))
      );
      return val;
    }
    //
    return true;
  }
  //
  // const isAscending = arr.every(
  //   (num, idx) =>
  //     idx === arr.length - 1 ||
  //     (num < arr[idx + 1] && isCorrectDiff(arr[idx], arr[idx + 1]))
  // );
  // return isAscending;
  //
}

//
function isCorrectDiff(a, b) {
  return Math.abs(a - b) <= 3;
}
