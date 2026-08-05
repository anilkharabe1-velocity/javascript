let str = "Good morning everyone. Lets discuss about Javascript";
// "dooG morning everyone. Lets discuss about Javascript";

let splitByChar = str.split("");
console.log("splitByChar", splitByChar);

// join => it will convert array into string
let arrOfStr = [
  "Good",
  "morning",
  "everyone.",
  "Lets",
  "discuss",
  "about",
  "Javascript",
];
let joinOnStrOfArr = arrOfStr.join(" ");
console.log("joinOnStrOfArr:", joinOnStrOfArr);

// reverse the string
// Javascript about discuss Lets .everyone morning Good

// split() => it will convert string into array
let split = str.split(" ");
console.log("split", split);

let reverse = split.reverse();
console.log("reverse", reverse);

let reverseStr = reverse.join(" ");
console.log("reverseStr", reverseStr);

let str2 = "Good morning everyone. Lets discuss about Javascript";

let arrOfStr2 = str2.split(" ");
console.log("arrOfStr2", arrOfStr2);

let reverseStr2 = [];

for (let i = 0; i < arrOfStr2.length; i++) {
  let currentElement = arrOfStr2[i].split("").reverse().join("");
  let reverse = currentElement;
  reverseStr2.push(reverse);
  // optimized code- short form
  // reverseStr2.push(arrOfStr2[i].split('').reverse().join(''));
}
console.log("reverseStr2", reverseStr2);

let ans = reverseStr2.join(" ");
console.log("ans", ans);
