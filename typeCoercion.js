// automatic conversion
console.log("5 + 2", 5 + 2);
console.log("5 + '2'", 5 + '2'); // 52 => 5 type => string
console.log("5 - '3", 5 - '3'); // 2 // operation other than addition 
// => string is converted into number

console.log('5 * "10"', 5 * "10")

// manual conversion
// type casting
console.log("Number('5')", Number("5")); // 5
console.log("String(5)",  String(5));  
console.log("Boolean(1)", Boolean(1)); // true
console.log("Boolean(0)", Boolean(0)); // false

console.log("Boolean('')", Boolean(''));  // false 
console.log("Boolean(' ')", Boolean(' '));  // true

console.log(''.length); // 0
console.log(' '.length); // 1

//falsy values  => 0, -0, 0n, "", undefined, null, NaN, false

console.log("NaN", NaN);
console.log(0/0);
console.log("Hello/10", "Hello" / 10)// Not a Number
console.log(typeof NaN); 

console.log("[]",Boolean([])); 
console.log("[]",Boolean({})); 

// when we are using == , then we are doing type coercion
console.log("0 == 0", 0 == 0); // true
console.log("0 == false", 0 == false); // true
console.log("'0' == false", "0" == false); // false

console.log("null == undefined", null == undefined);

// when we are using === , then we are NOT doing type coercion
console.log("0 === 0", 0 === 0); // true
console.log("0 === false", 0 === false); // true
console.log("'0' === false", "0" === false); // false
console.log("null === undefined", null === undefined); // false


// exceptional things
console.log("NaN == NaN", NaN == NaN) // false

