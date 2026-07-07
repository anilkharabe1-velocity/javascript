const numbers = [0,10,20,30,40,50,60,70,80,90];

let slice = numbers.slice(0,5);
console.log("slice:", slice); // 0-40
console.log("numbers", numbers); // 0-90


// splice => add/update/remove the items from array
// syntax splice(startIndex, deleteCount, item1, item2, item3.....);

// Remove items from numbers
let removed = numbers.splice(1, 4);
console.log("removed:", removed)

console.log("numbers:", numbers)

// // add items
numbers.splice(1, 0, 100, 200, 300, 400);
console.log("numbers:", numbers);


// // update items
numbers.splice(1, 2, 111, 222, 333, 444)
console.log("numbers:", numbers);

