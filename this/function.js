// "use strict";
var a =10

function showThis(){
    console.log(this); // point to window object
                        // strict mode => this object point to undefined
    console.log(this.a); // throws error in strict mode
    console.log(a)
}

showThis()