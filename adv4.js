function countOccurrencesInBothDirections(arr, subStr) {
  let count = 0;
  arr.forEach((str) => {
    count += (str.match(new RegExp(subStr, "g")) || []).length;
    count += (
      str.match(new RegExp(subStr.split("").reverse().join(""), "g")) || []
    ).length;
  });
  // arr.forEach((str) => {
  //   count += (
  //     str.match(new RegExp(subStr.split("").reverse().join(""), "g")) || []
  //   ).length;
  // });
  return count;
}

const grid = [
  "MMMSXXMASM",
  "MSAMXMSMSA",
  "AMXSXMAAMM",
  "MSAMASMSMX",
  "XMASAMXAMM",
  "XXAMMXXAMA",
  "SMSMSASXSS",
  "SAXAMASAAA",
  "MAMMMXMMMM",
  "MXMXAXMASX",
];
console.log(countOccurrencesInBothDirections(grid, "XMAS"));
