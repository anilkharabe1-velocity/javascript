
function greet(name, callback){
    console.log("hello, ", name);
    callback();
}

function sayBye(){
    console.log("Goodbye");
}

// greet("Mayur", sayBye)


function calculate(a, b, callback){
    const result = a + b;
    callback(result)
}


calculate(10,20, (result)=>{
    console.log("result:", result)
})
