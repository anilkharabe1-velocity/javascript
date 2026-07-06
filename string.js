let str1 = "He'll'o";
let str2 = 'Good morning';
let str3 = `Everyone`  // string literals

console.log("str1:", str1);
console.log("str2:", str2);
console.log("str3:", str3);

let str4 = str1 + ' ' +  str2 + ' ' +str3 + ' and great morning'; // string concatination
console.log('str4:', str4)

// using string literals : string concatination

let str5 = `${str1}      ${str2}       ${str3}`; // string concatination
console.log("str5:", str5);

let age = 30;
let name = "Sagar";
let city = "Sangali";

console.log("Hello, my self "+ name + ", I'm from " + city + ", my age is "+ age);
console.log(`Hello, my self ${name}, I'm from ${city}, my age is ${age}`);


console.log("hello world,how are you");

console.log(`hello world,
    how are you`);

console.log("------------STRING METHODS-----------")
console.log("str4:", str4);

// properties

//1 length
console.log("str4.length", str4.length);

// methods
// 
let toUpperCase = str4.toUpperCase();
console.log("toUpperCase;", toUpperCase)

let toLowerCase = str4.toLowerCase();
console.log("toLowerCase;", toLowerCase)


let charAt = str4.charAt(6); // position // indexing
console.log("charAt",charAt)

let indexOf = str4.indexOf("Good morning");  // find index of first match
console.log("indexOf", indexOf)

let lastIndexOf = str4.lastIndexOf("e");  // find index of first match
console.log("lastIndexOf", lastIndexOf);

let includes =  str4.includes("Good morning1"); // return whether the substring is present in string
console.log("includes", includes)

let slice = str4.slice(4, 15)// 0 will include, 7th position is exclude
console.log("slice:", slice);

let substring = str4.substring(0, 7)// 0 will include, 7th position is exclude
console.log("substring:", substring);

let replace = str4.replace("morning", "evening");
console.log("replace", replace)

let replaceAll = str4.replaceAll("morning", "evening");
console.log("replaceAll", replaceAll)

// let concat = str1+ ' ' +  str2 + ' ' +str3 + ' and great morning'
let concat = str1.concat(' ', str2, ' ', str3, ' and great morning');
console.log("concat", concat);


let userName = "     Amol     ";
console.log("userName", userName)
let trim = userName.trim();
console.log("trim", trim);


let emailInDb = 'anilkharabe@gmail.com';
let userInput = 'ANILKHARABE@gmail.com';

userInput = userInput.toLowerCase();
console.log("userInput", userInput);