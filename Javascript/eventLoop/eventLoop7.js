console.log("Fetching user...");

setTimeout(() => {
    console.log("User data received");

    Promise.resolve().then(() => {
        console.log("Processing user data");
    });
}, 1000);

Promise.resolve().then(() => {
    console.log("Showing loading spinner");
});

console.log("Page continues...");

/*
Fetching user...
Page continues...
Showing loading spinner
User data received
Processing user data
*/




