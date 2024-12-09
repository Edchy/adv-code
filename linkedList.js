let list = null;

function makeNode(value) {
  return {
    value: value,
    next: null,
  };
}

let one = makeNode(1);
let two = makeNode(2);
let three = makeNode(3);

one.next = two;
two.next = three;

function printList(list) {
  if (!list) return;
  console.log(list.value);
  printList(list.next);
}

printList(one);

const arre = [1, 2, 3];
console.log(arre.slice(0, 2));

console.log(Math.abs(-2 - 10));
