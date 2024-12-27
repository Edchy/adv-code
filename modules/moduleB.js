import { x, y } from "./moduleA.js";

// const orders = [
//   { country: "US", product: "banana" },
//   { country: "CA", product: "apple" },
//   { country: "MX", product: "orange" },
//   { country: "US", product: "grape" },
//   { country: "CA", product: "strawberry" },
//   { country: "MX", product: "mango" },
//   { country: "US", product: "kiwi" },
//   { country: "CA", product: "pineapple" },
//   { country: "MX", product: "papaya" },
//   { country: "US", product: "watermelon" },
// ];

// const ordered = Object.groupBy(orders, (order) => {
//   return order.country;
// });

// console.log(ordered);
// console.log(ordered.CA[0].product);

let myArray = [1, 2, 3, 4, 5];

function b(arr) {
  return (arr = ["x", "y", "z"]);
}

console.log(b(myArray));
console.log(myArray);
