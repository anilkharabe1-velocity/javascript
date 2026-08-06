let x = 10;

try{
    console.log("y:", y); // expection
    console.log("I am inside in try block")
}catch(error){
    console.log("error:", error)
    console.log("error.name", error.name);
    console.log("error.message", error.message);
}finally{
    // always run - whether error happens or not
    // always executes this block
    console.log("I am in finally block")
}

console.log("hello world")
// api failure
// user input
// network issue
// coding bug


// try - catch