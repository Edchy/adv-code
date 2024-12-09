const fs = require("fs");

const fileContent = fs.readFileSync("adv1.txt", "utf8");
const lines = fileContent.split(/\s+/).filter((num) => num !== "");

let arr1 = lines.filter((_, i) => i % 2 === 0).sort((a, b) => a - b);
let arr2 = lines.filter((_, i) => i % 2 === 1).sort((a, b) => a - b);

function count(targetArray, valueArray) {
  console.time("timer");

  // Create a frequency map for targetArray
  const freqMap = new Map();
  for (const num of targetArray) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Calculate result using the frequency map
  let res = 0;
  for (const value of valueArray) {
    const frequency = freqMap.get(value) || 0;
    res += frequency * value;
  }

  console.timeEnd("timer");
  return res;
}

console.log(count(arr2, arr1));

// 1
// function calcTotalDistance(x, y) {
//   let newX = [...x].sort((a, b) => a - b);
//   let newY = [...y].sort((a, b) => a - b);

//   let res = [];
//   for (let i = 0; i < x.length; i++) {
//     if (newX[i] > newY[i]) {
//       res.push(newX[i] - newY[i]);
//     } else {
//       res.push(newY[i] - newX[i]);
//     }
//   }
//   return res.reduce((acc, curr) => acc + curr, 0);
// }

// console.log(calcTotalDistance(arr1, arr2));
/// 1603498
