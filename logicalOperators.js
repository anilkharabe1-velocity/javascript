// logical operators

// && ||
console.log("true && true", true && true);   // true
console.log("true && true", true && false);  // false
console.log("false && true", false && true);  // false
console.log("false && true", false && false);  // false 


// ||
console.log("true || true", true || true);   // true
console.log("true || false", true || false);  //  true
console.log("false || true", false || true);  //  true
console.log("false || true", false || false);  //  false

// mixture of && and ||

console.log("true && true || true", true && true || true); // true
console.log("true && true || false", true && true || false); // true 
console.log("true || true && false", true || true && false); // false 
console.log("true || false && true", true || true && false); // true
console.log("true && false || true", true && false || true); // true 

// truly /falsy values 
// falsy values => 0, null, undefined, ""
// truly values => !falsy

console.log("2 && 6", 2 && 6); // 6
console.log("2 && 0", 2 && 0); // 0 => falsy value
console.log("0 && 2", 0 && 2); // 0 => falsy value

console.log("undefined && 2", undefined && 2); // 0 => falsy value
console.log("1 && null", 1 && null); // 0 => falsy value

//  || operator
console.log("2 || 6", 2 || 6); // 2
console.log("2 || 0", 2 || 0); // 2
console.log("0 || 2", 0 || 2); // 2

console.log("undefined || 2", undefined || 2); // 2
console.log("1 || null", 1 || null); // 1


// combination of && and ||

console.log("10 && 20 || 30", 10 && 20 || 30); // 20
console.log("10 && 20 && 30", 10 && 20 && 30); // 30
console.log("10 || 20 || 30", 10 || 20 || 30); // 10
console.log("10 || 20 && 30", 10 || 20 && 30); // 30 => (10 || 30) => 10


// && >> ||
