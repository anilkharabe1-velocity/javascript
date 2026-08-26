console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise");

    setTimeout(() => {
        console.log("Timer inside Promise");
    }, 0);
});

setTimeout(() => {
    console.log("Normal Timer");
}, 0);

console.log("End");
// start
// end
// promise
// normal timer
// timer inside promise