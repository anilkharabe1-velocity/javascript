console.log("Start");

setTimeout(() => {
    console.log("Timer");

    Promise.resolve().then(() => {
        console.log("Promise inside Timer");
    });
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");


// winner

// start 
// end 
// Promise
// Timer
// Promise inside Timer


// start 
// end 
// Promise 
// Promise inside Timer
// Timer