
console.log(x)  // undefined
var x = 10;
console.log(x) 


// console.log(y) 
let y = 20;
console.log(y)

helloWorld()
function helloWorld(){
    console.log("I am function");
}
helloWorld()

// funcExpression()
let funcExpression = function(){
    console.log("function expression is called")
}
funcExpression()


//globle object
// var => undefined
// normal function => body

// // another memory
// let => 
// const

//1. scanning the code => memory creation phase =>  var, normal function, let , const
//2. code excution phase


function normalFunction(){
    let a = 10;
    var b = 20;
    console.log("a", a);
    console.log("b", b);
}
normalFunction();