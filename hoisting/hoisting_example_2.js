// example 

// let x = 10;  
// var y = 100; 

// function normalFunction(){
//     let a = 10;
//     var b = 20;
//     console.log("a", a);
//     console.log("b", b);
// }
// normalFunction();

// example 2

// let a = 10;     
// var b = 20; 
// function normalFunction(){
//     console.log("a", a);  // 10
//     console.log("b", b);  // 20
// }
// normalFunction();


// example 3

// function normalFunction(){
//     let a = 10;     
//     var b = 20; 
// }
// normalFunction();

// console.log("a", a);  // 10
// console.log("b", b);  // 20



// example 4


let x = 10;  
var y = 100; 

function normalFunction(){
    let a = 10;     
    var b = 20; 
    console.log("x", x);
    console.log("y", y);

    function childFunction(){
        let x = 30;
        var y = 40;
        console.log("a", a);
        console.log("b", b);
    }

    childFunction();
}

normalFunction();



