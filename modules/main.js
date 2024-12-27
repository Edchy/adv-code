String.prototype.isPalindrome = function () {
  return this.split("").reverse().join("").toLowerCase() === this.toLowerCase();
};

Array.prototype.myMap = function (cb) {
  let mappedArray = [];
  for (let i = 0; i < this.length; i++) {
    mappedArray.push(cb(this[i]));
  }
  return mappedArray;
};

Array.prototype.flatten = function () {
  let newarr = [];
  for (const value of this) {
    if (Array.isArray(value)) {
      newarr.push(...value.flatten());
    } else {
      newarr.push(value);
    }
  }
  return newarr;
};

let nest = [1, 2, [3, 4, [5, 6]]];

console.log(nest.flatten());
// console.log(Array.isArray(nest));
