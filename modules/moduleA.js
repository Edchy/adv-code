let str = "oijo<div>hello<div><p>hello</p><div>yo<div>";

function closeDiv(str) {
  let string = str;
  let result = "";
  let divCount = 0;
  for (let index = 0; index < string.length; index++) {
    if (
      string[index] === "<" &&
      string[index + 1] === "d" &&
      string[index + 2] === "i" &&
      string[index + 3] === "v" &&
      string[index + 4] === ">"
    ) {
      if (divCount % 2 !== 0) {
        string =
          string.substring(0, index + 1) + "/" + string.substring(index + 1);
      }
      divCount++;
      result += string[index];
    } else {
      result += string[index];
    }
  }

  return result;
}

console.log(closeDiv(str));

export let x = [1, 2, 3];
export let y = "hello";
