const arr1 = [
  { name: "John", goals: 3, assists: 4 },
  { name: "Paul", goals: 2, assists: 1 },
  { name: "George", goals: 1, assists: 2 },
  { name: "Ringo", goals: 0, assists: 3 },
  { name: "Pete", goals: 4, assists: 0 },
  { name: "Jimi", goals: 2, assists: 4 },
];
const arr2 = [
  { name: "John", goals: 1, assists: 0 },
  { name: "Paul", goals: 0, assists: 1 },
  { name: "Bob", goals: 1, assists: 1 },
  { name: "Ringo", goals: 10, assists: 6 },
  { name: "Pete", goals: 4, assists: 3 },
  { name: "Jimi", goals: 15, assists: 6 },
];

function sumItUp(...arrays) {
  const data = arrays.flat();
  // console.table(data);
  return data;
}
const data = sumItUp(arr1, arr2);
// console.log("data:", data);

const aggregated = data.reduce((object, player) => {
  object[player.name] = player.name;
  object.goals = player.goals;
  return object;
}, {});
console.log(aggregated);

const nums = [-1, -2, -4, -2, -1];

console.log(
  nums.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
  })
);
