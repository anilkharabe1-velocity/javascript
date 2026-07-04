// oprators are symbols;
// = is operator
// a = operand

//1 assignment operators
let a = 10;
a += 50;
a -= 20;
console.log("a", a);

// 2 Arithetic operators
console.log("Arithetic operators:");
let b = 50,
  c = 20;
let d = b + c;
let e = b - c;
let f = b * c;
let g = b / c;
console.log("d", d);
console.log("e", e);
console.log("f", f);
console.log("g", g);
// console.log("d", d)
let h = b % c;
console.log("h", h);
let i = 5 ** 3;
console.log("i", i);

// 3.Comparison operators

let x = 10;
let y = 10;
let z = 20;
let s = "10";

// == is equals to
console.log("x == y", x == y);
console.log("x == z", x == z);

console.log("x == s", x == s); // true
console.log(typeof x);
console.log(typeof s);
console.log("x === s", x === s); // false

console.log("x != s", x != s); // false
console.log("x !== s", x !== s); // true

//
console.log("x > y", x > y); // false
console.log("x >= y", x >= y); // true

console.log("x < y", x < y); // false
console.log("x <= y", x <= y); // true

// string operators;

let str1 = "Good";
let str2 = " Morning";
let completString = str1 + str2; // string concat
console.log(str1 + str2);

// unary operators
let m = 10;
console.log("++m", ++m); // 11 / 10 => 11
console.log("m++", m++); // 11 / 12 => 11
console.log("m", m); // 12

console.log("--m", --m); //  11
console.log("m--", m--); //  11
console.log("m", m); // 10



